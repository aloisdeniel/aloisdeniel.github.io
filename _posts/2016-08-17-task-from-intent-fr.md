---
layout: post
lang: fr
title: "Des Tasks à partir d'événements"
image: images/post_task-intent.jpg
categories:
  - Microsoft
tags:
  - Task
  - C#
  - Xamarin
---

Quelques-fois vous pouvez être confronté à des API basées sur des callbacks pour l'exécution de tâches asynchrones, et cela ne correspond par vraiment à vos habitudes de programmation moderne basée sur l'asynchronisme TCL (avec des `Tasks`).

## Rappel sur l'objet Task

Commençons par un par un rapide rappel sur l'objet `Task` qui représente un état d'exécution asynchrone dans les environnements modernes *.NET*.

Une tâche peut avoir les états suivants :

* **Not started**
	* `Created`: initialisée, mais non encore planifiée.
	* `WaitingForActivation	` : la tâche est en attente pour planification et exécution par l'infrastructure du Framework *.NET*.
	* `WaitingToRun` : la tâche est planifiée et est en attente d'exécution.
* **Running**
	* `WaitingForChildrenToComplete` : la tâche a terminé son exécution et attends simplement la fin de l'exécution des tâches enfants éventuellement attachées.
	* `Running` : la tâche est en cours d'exécution.
* **Output**
	* `Canceled`: La tâche prévient d'une annulation en levant une `OperationCanceledException`avec son `CancellationToken`.
	* `Faulted` : La tâche à échouée à cause d'une exception non gérée.
	* `RanToCompletion`	 : L'execution de la tâche s'est terminé avec succès.

## Tâches manuelles

Grâce au type `TaskCompletionSource<T>`, la création de tâches déclenchées manuellement s'avère simple, et son état de **sortie** peut être affecté.

Vous devez tout d'avord créer une instance de source, cette dernière possédant une propriété `Task` qui peut être attendue :

```csharp
var source = new TaskCompletionSource<string>();
var task = source.Task;

// ...

await task;
```

Ensuite, il ne reste plus qu'à mettre à jour le status de la source en conséquence :

```csharp
// Success
source.SetResult("Success!);

// Cancelled
source.SetCancelled();

// Failed
source.SetException(new Exception("Failed"));
```


## Exemple concret : Xamarin.Android Intents

Cette technique est régulièrement utilisée pour migrer des APIs basées sur des événements en Tasks, mais j'ai récemment utilisé ce méchanisme pour attendre le resultat d'`Intents`  dans une application **Xamarin.Android**.

Si vous n'êtes pas familier avec les `Intents`, commencez par lire la [documentation Android](https://developer.android.com/reference/android/content/Intent.html). Pour simplifier, c'est un *message* qui peut être propagé au niveau système, et certaines entitées (activities, services, system) peuvent s'inscrire et réagir à ce type de messages.

Voici un exemple de selectionneur de fichier image  depuis une `Activity` Xamarin.Android :

```csharp
private TaskCompletionSource<Android.Net.Uri> source;

public Task<Android.Net.Uri> PickImageAsync()
{
	if (this.source != null && !this.source.Task.IsFaulted && !this.source.Task.IsCanceled)
		return this.source.Task;

	this.source = new TaskCompletionSource<Android.Net.Uri>();
	var task = this.source.Task;

	try
	{
		var imageIntent = new Intent();
		imageIntent.SetType("image/*");
		imageIntent.SetAction(Intent.ActionGetContent);
		var i = Intent.CreateChooser(imageIntent, "Select a photo");
		StartActivityForResult(i, 0);
	}
	catch (Exception e)
	{
		this.source.SetException(e);
		this.source = null;
	}

	return task;
}

protected override void OnActivityResult(int requestCode, Result resultCode, Intent data)
{
	base.OnActivityResult(requestCode, resultCode, data);

	switch (requestCode)
	{
		case 0:
			if (resultCode == Result.Ok && data?.Data != null)
			{
				this.source.SetResult(data.Data);
			}
			else if (resultCode == Result.Canceled)
			{
				this.source.SetCanceled();
			}
			else
			{
				this.source.SetException(new Exception("Failed to get a file"));
			}

			this.source = null;

			break;
	}
}
```

La méthode peut ensuite être appellée et attendue simplement :

```csharp
var file = await this.PickImageAsync();
```

Ce projet d'exemple est disponible sur [GitHub](https://github.com/aloisdeniel/aloisdeniel.github.io/tree/master/samples/TaskFromIntent).

Evidemment, vous pouvez également appliquer cette technique avec un `BroadcastReceiver` et tout cela peut être amélioré en ajoutant l'annulation au travers d'une vérification du `CancellationToken`, mais la base restera celle présentée.

Je trouve ça agréable d'être capable de respecter les paradigmes propres au C#, même avec des APIs non adaptées à cet usage.