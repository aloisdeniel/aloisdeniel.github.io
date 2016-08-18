---
layout: post
title: "Navigation restoration in Xamarin.Forms"
categories:
  - Xamarin
tags:
  - Xamarin
  - Xamarin.Forms
  - C#
---

For this first technical blog post, I wanted to share a way for restoring the state of your Xamarin.Forms application after it was killed by one of the operating systems.

# The issue

All systems targeted by Xamarin.Forms have similarities in application lifecycle management because of the constraints of their execution environment. Basically, when an application is executed, you can't be sure that the system won't kill it as far as the user switch to another app. What if he comes back to your app ?

![schema]({{ site.url }}/img/post001_lifecycle.png)

As you should have guessed, your app is simply launched from the beginning again and the user lose all of his context : it's up to you to restore its state. It's even the case on Windows because Xamarin.Forms has its own navigation mechanism and the navigation stack isn't serialized by default like in Universal apps.

# How is the navigation represented ?

The main component for navigation in Xamarin.Forms is the `NavigationPage` that manages a stack of pages. 

![schema]({{ site.url }}/img/post001_navigationpage.png)

All those steps are stored in its `Navigation` property (also shared by all its children), which has a simple collection of `Page`s called `NavigationStack`. The the first step to be able to restore the user navigation state would be to serialize this stack,store it, and restore it whenever the app has been killed and launched again. Because `Pages` are heavy user interface objects, you shouldn't store its entire property values, but only the minimum for restoration : each page `Type` seems to be the etential needed information in most cases.

{% highlight csharp %}
var pages = navigationPage.Navigation.NavigationStack;
var pageTypes = pages.Select((p) => p.GetType());
{% endhighlight %}

Remind that your app can host multiple of those navigation stacks in parrallel : `TabbedPage` or `MasterDetailPage` scenarios for instance.

![schema]({{ site.url }}/img/post001_tabbedpage.png)

Thus, all those stacks have to be serialized and stored as well.

# Serializing and storing the state

You can use any serialization solution for your stack of page `Type`s : binary/text/json/xml serialization from a mapping table. There is also multiple solutions for storage (like a file in local storage for instance).

![schema]({{ site.url }}/img/post001_storage.png)

Fortunately, Xamarin teams propose a built-in solution for application state storage. A dictionary named `Application.Current.Properties` is available for this : it is stored in local storage for you, and restored at the Xamarin.Forms application startup.

{% highlight csharp %}
Application.Current.Properties[$"NavigationStack.{stackName}"] = pageTypes;
{% endhighlight %}

An example location where we can put our code is in the `OnSleep` method of the `Application`. This method is called each time your application switches to background.

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

# Restoring the state

Now that we have stored the page history, we only have to build again the navigation stack from the stored page types. For this task, we will use reflexion by using `Activator.CreateInstance` method that instanciates any object from a given type. We assume that your pages have a default constructor.

{% highlight csharp %}
var states = Application.Current.Properties[$"NavigationStack.{stackName}"] as IEnumerable<PageState>;
var pages =  pages.Select((t) =>  Activator.CreateInstance(t) as Page);
{% endhighlight %}

To push all those pages into the navigation stack we can navigate to the last one, and insert the others before.

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

Don't forget to remove the initial pages because they were serialized too.

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

# Go further

You should now have all the basic elements to implement a more advanced system. 

I've published a small set of extensions that adds several functionnalities :

* Stored navigation arguments passed between pages
* A maximum delay before the restoration is ignored
* Helper methods for navigation and storage
* Helper methods for TabbedPages
* Restoring modal stack

It's available on [GitHub](https://github.com/aloisdeniel/Xam.Forms.NavigationExtensions) and [NuGet](https://www.nuget.org/packages/Xam.Forms.NavigationExtensions/).

If you have any remark, feel free to post a comment. That was just the beginning of my blog post serie.

Thanks for reading, Hope it helped you in some ways!