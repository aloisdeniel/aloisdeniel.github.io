---
layout: post
title: "Transforming events intents into Tasks"
image: images/post_task-intent.jpg
categories:
  - Microsoft
tags:
  - Task
  - C#
  - Xamarin
---

Sometimes you come accross callback based APIs and that doesn't fit very well with your nice `Task` based modern APIs.

## Task reminder

Let's start by reviewing the `Task` class that represents an asynchronous operation in *.NET* modern environnement.

A task can have those status :

* **Not started**
	* `Created`: The task has been initialized but has not yet been scheduled.
	* `WaitingForActivation	` : The task is waiting to be activated and scheduled internally by the .NET Framework infrastructure.
	* `WaitingToRun` : The task has been scheduled for execution but has not yet begun executing.
* **Running**
	* `WaitingForChildrenToComplete` : The task has finished executing and is implicitly waiting for attached child tasks to complete.
	* `Running` : The task is running but has not yet completed.
* **Output**
	* `Canceled`: The task acknowledged cancellation by throwing an OperationCanceledException with its own CancellationToken while the token was in signaled state, or the task's CancellationToken was already signaled before the task started executing.
	* `Faulted` :	 The task completed due to an unhandled exception.
	* `RanToCompletion`	 : The task completed execution successfully.

## Manual custom tasks

Thanks to the `TaskCompletionSource<T>` class, nothing too complex to create task object, and trigger its **output** status manually when needed.

You must first create a source instance, that has a `Task` property that can be awaited :

```csharp
var source = new TaskCompletionSource<string>();
var task = source.Task;

// ...

await task;
```

Then you can choose of the task output status at any time :

```csharp
// Success
source.SetResult("Success!);

// Cancelled
source.SetCancelled();

// Failed
source.SetException(new Exception("Failed"));
```


## Real life example : Xamarin.Android Intents

This is commonly used for changing .NET event based APIs to Tasks based one, but I used this mechanism recently for waiting for `Intents` callbacks in an **Xamarin.Android** application.

If you're not too familiar with `Intents`, read first the [Android documentation](https://developer.android.com/reference/android/content/Intent.html). Basically, its a *message* that can be broadcasted at a system wide level, and several subscribers (activities, services, system) can react to those messages.

For this example, we want to pick an image file from a Xamarin.Android `Activity`.

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

Then, the method can simply be awaited from an async method :

```csharp
var file = await this.PickImageAsync();
```

See the complete working project on [github](https://github.com/aloisdeniel/aloisdeniel.github.io/tree/master/samples/TaskFromIntent).

Of course, you can do this with `BroadcastReceiver` for example and this can be improved by adding `CancellationToken` verification, but you should be able to go further on your own now.

I find this great to be able to respect C# paradigmes even with APIs that have not be designed for that.
