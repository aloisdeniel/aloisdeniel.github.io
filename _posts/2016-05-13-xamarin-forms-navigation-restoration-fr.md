---
layout: post
lang: fr
title: "Restauration de la navigation Xamarin.Forms"
categories:
  - Xamarin
tags:
  - Xamarin
  - Xamarin.Forms
  - C#
---

Pour the premier article technique, je voulais partager les différents moyen de restaurer l'état de navigation d'une application Xamarin.Forms, après qu'elle ait été tuée par le système hôte.

# Le problème

Tous les système cibles de Xamarin.Forms possèdent des similitudes dans la gestion du cycle de vie, du fait des contraintes d'exécutions limités de ce type d'environnement. Pour simplifier, quand une application est exécutée, vous ne pouvez jamais être assuré que le système ne tue pas l'application dès lors que l'utilisateur bascule vers une autre application. Que se passe-t-il alors lorsque l'utilisateur reviens sur votre application.

![schema]({{ site.url }}/img/post001_lifecycle.png)

Comme vous l'avez peut être deviné, votre application est simplement relancée depuis le départ et l'utilisateur perd tout son contexte d'exécution. C'est donc à vous de restaurer cet état, et avec les mécanismes propre à Xamarin.Forms, ce dernier ayant un fonctionnement différent des applications natives et la pile de navigation n'est pas sérialisée (comme ça peut être le cas sur les applications Windows par exemple).

# Représentation de la navigation

Le composant central de la navigation dans Xamarin.Forms est la `NavigationPage` qui gère une pile de page.

![schema]({{ site.url }}/img/post001_navigationpage.png)

Toutes ces étapes de navigation sont stockées dans la propriété `Navigation` (aussi partagée par ses enfants), qui est une simple collection de `Page`s appellée `NavigationStack`. La première étape nécessaire à la restauration de l'état de navigation utilisateur serait de sérialiser cette pile, de la stocker, et de la restaurer à chaque fois que l'application est tuée et relancée. Comme les `Page`s sont des objets complexes dédiées à l'affichage, il ne serait pas raisonable de stoker l'ensemble de ses propriétés. Nous allons donc stocker ce qui semble essentiel : le `Type` de la page.

{% highlight csharp %}
var pages = navigationPage.Navigation.NavigationStack;
var pageTypes = pages.Select((p) => p.GetType());
{% endhighlight %}

N'oubliez pas que votre application peut accueillir plusieures piles de navigation en parralèle : au travers de  `TabbedPage` ou `MasterDetailPage` par exemple.

![schema]({{ site.url }}/img/post001_tabbedpage.png)

Toutes ces piles seront donc à sérialiser et à restaurer de la même manière..

# Stockage de l'état

Pour cette étape, vous pouvez utiliser n'importe quelle solution de sérialisation pour votre pile de `Type`s : binaire/texte/json/xml par exemple. Il y a également plusieures solutions envisageable pour le stockage de la pile (dans un fichier de l'espace de stockage local par exemple).

![schema]({{ site.url }}/img/post001_storage.png)

Heuresement, l'équipé Xamarin nous propose une fonctionnalité intégré dédiée au stockage de l'état de l'application. Un dictionnaire `Application.Current.Properties` est donc présent présent, et est sauvegardé pour vous et restauré au lancement de l'application Xamarin.Forms.

{% highlight csharp %}
Application.Current.Properties[$"NavigationStack.{stackName}"] = pageTypes;
{% endhighlight %}

Le code d'enrichissement de ce dictionnaire peut se faire dans la méthode `OnSleep` de l'`Application`. Cette méthode est appellée à chaque fois que votre application n'est plus au premier plan.

{% highlight csharp %}
const string stackName = "Main";

protected override void OnSleep()
{
    var navigationPage = this.MainPage as NavigationPage;
    
    var pages = navigationPage.Navigation.NavigationStack;
    var pageTypes = pages.Select((p) => p.GetType());
    Application.Current.Properties[$"NavigationStack.{stackName}"] = pageTypes;
    base.OnSleep();
}
{% endhighlight %}

# Restauration

Maintenant que nous avons stocké notre historique de navigation sous la forme d'une pile de `Type`s, nous n'avons plus qu'a reconstruire l'historique de navigation de l'application. Pour cela, nous allons utiliser l'introspection via la méthode `Activator.CreateInstance` qui permet l'instanciation  d'un objet depuis son `Type`. Pour cela, nous partirons du principe que chaque page aura un constructeur par défaut.

{% highlight csharp %}
var states = Application.Current.Properties[$"NavigationStack.{stackName}"] as IEnumerable<PageState>;
var pages =  pages.Select((t) =>  Activator.CreateInstance(t) as Page);
{% endhighlight %}

Pour insérer toutes ces pages dans la pile de navigation, nous pouvons naviguer vers la dernière, et insérer toute les autres avant celle-ci.

{% highlight csharp %}
var navigation = navigationPage.Navigation;

if(pages.Count() > 1) // Only if we have stack to restore
{
    var last = pages.LastOrDefault();
    pages.RemoveAt(pages.Count - 1);
    await navigation.PushAsync(last, false); //not animated
    foreach (var page in pages)
    {
        navigation.InsertPageBefore(page, lastNavigationPage);
    }
}
{% endhighlight %}

N'oubliez pas de retirer la page initiale qui est également sérialisée.

{% highlight csharp %}
var navigation = navigationPage.Navigation;

if(pages.Count() > 1)
{
    var initialPages = navigation.NavigationStack.ToList();

    // Inserting pages here (see previous code sample)
    
    foreach (var page in initialPages)
    {
        navigation.RemovePage(page);
    }
}
{% endhighlight %}

A common place to trigger this restoration is in `OnStart` method of your application, but it can depend on the moment when you want this restoration to be done.

{% highlight csharp %}
protected override async void OnStart()
{
    var navigationPage = this.MainPage as NavigationPage;
    var navigation = navigationPage.Navigation;

    // 1. Loading stored states and instanciating pages
    var states = Application.Current.Properties[$"NavigationStack.{stackName}"] as IEnumerable<PageState>;
    var pages =  pages.Select((t) =>  Activator.CreateInstance(t) as Page);

    if(pages.Count() > 1) // Only if we have stack to restore
    {
        var initialPages = navigation.NavigationStack.ToList();
    
        // 2. Pushing pages into existing navigation stack
        var last = pages.LastOrDefault();
        pages.RemoveAt(pages.Count - 1);
        await navigation.PushAsync(last, false); //not animated
        foreach (var page in navigationPages)
        {
            navigation.InsertPageBefore(page, lastNavigationPage);
        }
    
        // 3. Removing existing pages that was present before restoration
        foreach (var page in initialPages)
        {
            navigation.RemovePage(page);
        }
    }
}
{% endhighlight %}

# Aller plus loin

Vous avez maintenant toutes les billes pour concevoir un système plus évolué.

J'ai publié un petit ensemble d'extensions qui ajoutent les fonctionnalités suivantes :

* Stockage des arguments de navigation passés entre les pages
* Un délai maximym de restauration après lequel l'application est relancée
* Méthodes d'aide pour la navigation et le stockage
* Méthodes d'aide pour les `TabbedPage`s
* Restauration de la pile

Tout cela est disponible sur [GitHub](https://github.com/aloisdeniel/Xam.Forms.NavigationExtensions) et [NuGet](https://www.nuget.org/packages/Xam.Forms.NavigationExtensions/).

Si vous avez la moindre question, n'hésitez pas à poster un commentaire.

Merci pour la lecture, en espérant avoir été utile à certains!