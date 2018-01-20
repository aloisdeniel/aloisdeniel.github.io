---
layout: post
lang: en
title: "Flutter introduction from a Xamarin developer"
image: images/yoga
categories:
  - Flutter
tags:
  - Flutter
  - Dart
  - Xamarin
  - versus
---

Maybe you never heard about me, but I have been a Xamarin developer for four years now, always obsessed in code sharing strategies. I was so exited when I first discovered those tools which allowed me to share a big amount of logic in C# language, you couldn't imagine; and today I feel the same with [Flutter](http://www.flutter.io). In this long post, I will try to share various reflexions after several weeks of experimentation.

##### Disclaimer

> The tools are continuously evolving, so you can read things that are not valid at the time you read it

## The language : Dart

### Seriously ?

I almost never seen any [Dart](https://www.dartlang.org/) mention in many years and  my first thought when I knew that the Flutter team chose this language for the core tools was : 

> Why this language? Their are plenties of already well-known languages, including Kotlin that is currently pushed for Android development. This will slow down user adoption for sure...

Anyway, after a few lines of code I understood: this language is developped internally at Google, and they have a total control on how it should adapt on every platform, and you can feel it. It doesn't have a long history behind it, with various compatibility constraints (like Java/.NET environment). So everything has been designed for what you are using today, and it's really pleasant to use.

### A simple but powerful language

It is very easy to learn Dart syntax if you are familiar with OOP languages like C#, Java, Swift, Kotlin or Javascript. I made a quick selection of language specificities to make you more confident with it.

#### Modules

The strange thing when coming from Java or C# world, is the module oriented architecture (much like Javascript). It is then common to have multiple classes in the same file, and also to declare elements at the module level since module imports can be explicitely named.

#### Statically typed

The language is statically typed, even if it may not be obvious at first glance, because of type inference and dynamics.

```dart
var myVar = this.calculateVar();
final myFinal = const EdgeInsets.all(10.0);

```

Again, type inference is also present in C#, but in Dart you can often omit it from declarations. To be honest, I am not a big fan of it and it can make code readability worse. But the Dart team could change it in the coming versions to make it more strict. 

The `dynamic` keyword looks a lot like the C# one too. 

#### Declaring objects

There are several differences with Java or C#.

First in Dart, interfaces are implicit : every class could be used as an interface with the `implements` keyword. Though, you can declare a class as `abstract` to make it not instanciable.

Moreover, unlike typical languages, there isn't any keyword for defining a method as `private` or `public`. In Dart, you simply prefix your member by `_` for declaring it as private, else it is public. The interesting part is that a private member is visible from the library (aka module), so it's more an `internal` equivalent than private and it is clear that you have to think your software architecture differently around modules.

You can have `static` and readonly fields with `final` keyword.

Syntaxic sugar is also available to make constructor declarations simpler.

```dart
class User {
  final String firstname, lastname;
  String get fullname => "$firstname $lastname";
  User(this.firstname, this.lastname);
  String greet(String who) => 'Hello $who. I am real person.';
}

class Impostor implements User {
  @override
  String greet(String who) => "Hi $who. Ah ah, I'm an impostor!";

  @override
  String get firstname => null;

  @override
  String get fullname => null;

  @override
  String get lastname => null;
}
```

#### Type matching

It is pretty common to test the type of an instance, and Dart makes it easy by simply casting the object for you.

```dart
final result = getResult();
if(result is String) {
	final length = result.length; // result is cast as String
}
else if(result is int) {
	final addition = result + 5; // result is cast as Int
}
```
Again, .NET developers have similar operations with C# 7 (and even more with pattern matching).

#### Named constructors

It is common to have static factory functions to instanciate objects in other languages to make clear of how they were constructed. Dart provides a way to name constructor variants for this purpose.

```dart
class Customer {
	final String name;
	
	Customer(this.name);
	
	Customer.fromMap(Map map) : this.name = map["name"];
}
```

#### Asynchronicity

You also have all the helper functionalities you could expect from a modern language like `async`/`await` keywords and the `Future` type that greatly simplify the state management of asynchonous operations.

Here a short example of an HTTP call to a REST api (it should look really familiar to any .NET developer that used `HttpClient`/`Task`/`async`/`await`/`JsonConvert`) :

```dart
/// Gets a list of customers from a distant server.
Future<List<String>> getCustomers() async {
  var httpClient = new HttpClient();
  var uri = Uri.parse('http://company.com/api/customers');
  var request = await httpClient.getUrl(uri);
  var response = await request.close();
  if (response.statusCode == HttpStatus.OK) {
	  var responseBody = await response.transform(UTF8.decoder).join(); // [ "...", "...", ... ]
	  return JSON.decode(responseBody).toList();
  }
  throw("failed to load customers");
}
```

#### Reactive programming

The Dart language has built-in [Stream](https://www.dartlang.org/tutorials/language/streams) APIs that are well fitted for reactive-like programming.

```dart
Future<int> sum() async {
	final Stream<int> stream = this.openStream();
	return await stream.reduce((a,b) => a + b);
}
```

There are already reactive extensions available on [GitHub](https://github.com/ReactiveX/rxdart) for having more control (*retry, timer, throttle, combine, ...*) over streams.

#### I wasn't lost at all so you shouldn't be

Many features seem to be picked-up from existings languages, with simplification and easiness of use in mind. I felt quickly at home, and you will see that it matches pretty well the goals of Flutter. I hope that you got the philosophy behind this cute language (*it personally reminds me of the simplicity of [Lua](https://www.lua.org/), which I love, but with a lot more functionalities*). 

Visit the [Dart website](https://www.dartlang.org/guides/language/language-tour) to learn a lot more about it (their is more cool features like `callable class`, `factory constructors`, `class: mixins`) and [DartPad](https://dartpad.dartlang.org/) to experiment it right in the browser.

## The framework : Flutter

### Overview

Flutter is a cross platform mobile app SDK that is different from Xamarin and React-Native in the way the rendering is done. Google, that is the company behind Flutter, chose to re-implement all the rendering pipeline on top of [Skia](https://skia.org/) and [Dart](https://www.dartlang.org/).

This means that you have basically the exact same visual experience on every platform that runs Flutter. It is a lot like Hybrid web-based approaches, but without the overhead of the HTML and javascript interpreters. You have here only the mobile visual components needed and everything is ahead-of-time compiled so you have the best performances.

Fortunately, inside of it, Flutter provides specific components that make the user feels like he is on his platform. So you have iOS specific scrolling behaviors, typography, icons. But, you are absolutely not forced to use it, and that is the real power of Flutter : you are completely free since everything is included.

The other great benefit of the engine is that you will have the same rendering on all system versions. If your user have an old 4.0 limited Android device he will have the same visual rendering that the user that have a modern Android.

For anyone who debugged obscure visual bugs that appear on specific devices, or made dozens of Xamarin.Forms renderers, it is a real game changer.

Check out the [official technical overview](https://flutter.io/technical-overview/) for more details, and please watch [this video from Eric Seidel](https://www.youtube.com/watch?v=VUiVkDpikDI) who is the creator of Flutter.

### The tools

#### Install

The install was pretty smooth on my mac since I already had XCode, Android SDks and so on for Xamarin. I just had to clone the [Flutter](https://github.com/flutter/flutter) repository from GitHub (oh, yes, it is fully open-source), and that was all as far as I remember.

The steps are well described [on the website](https://flutter.io/setup/). 

#### IntelliJ / Android Studio

I use [IntelliJ IDE](https://www.jetbrains.com/idea/) with the Flutter plugin, and I have to say that the experience is pretty good : you have templates for application projects, autocompletion, code navigation. The great thing for me is the reactivity of the text editor unlike the one from Visual Studio for mac that could become pretty laggy on big projects.

![photo]({{ site.url }}/img/flutter_ide.png)

I am not tool-obssessed developer (I could even accept a simple text editor and a CLI) so it may be a big deal for you if you love to have dozens of configured helper tools.

#### Pub dependency manager

Dart has its own built-in very simple dependency manager (*just like NuGet or npm*), you simply have to declare you dependencies in you `yaml` project configuration file.

#### Hot Reloading

Flutter provides two modes : a **development** (also called `slow mode`) one and a **release** one. The first mode packages an interpreter that allows you to push new code continuously. The second one actually compiles it to native code to offers the best performances and allow three shaking to have smaller binaries.

Concretely, it means that with development mode your application is updating on your device while you are typing your code. It is a major productivity boost : it will change completely the way you work. To be honest, once you tried it, it is difficult to go back to a cycle where you compile your entire app just for checking that a padding is okay.

![Hot reloading](https://flutter.io/images/intellij/hot-reload.gif)

Fortunately, Xamarin is also working on its [Live Player](https://www.xamarin.com/live). To be clear, in comparison with Flutter, Xamarin Live Player is a lot more limited and could not be used for real life production development. But I know that [James Montemagno](https://montemagno.com/) and [Frank Krueger](http://praeclarum.org/) are working hard on it, and the recent announcement around Mono interpreter should bring it in the right direction.
 
### Designing user interfaces

#### Everything is Dart

There isn't any markup language for describing layouts (like [XAML with Xamarin Forms](https://developer.xamarin.com/guides/xamarin-forms/xaml/xaml-basics/) or UWP) : very unsettling first. But you will see that it is perfectly adaptated to the APIs functionnal-like philosophy.

So, to describe any visual component onto the user screen you will create a `Widget` class that implements a `build` method which explains how to structure the layout as a tree of nested objects. This method will be called everytime your component changes and the Flutter framework manages the diff between this immutable tree and the previous one *(you are a React-native developer? this should sound very familiar)*.

```dart
class HomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return new Text("Hello world");
  }
}
```

So, while this tree is immutable you will not be able to modify it afterwards. So, for example, for hiding a component you wouldn't change its visibility (*like ou would have done with native UI APIs or Xamarin forms*), but simply don't include the component into the next entirely new built tree.

```dart
Widget build(BuildContext context) {
	final text = new Text("Hello world");
	
	if(!this.isIconVisible) {
		return text;
	}

	return  new Row(
		children: <Widget>[
			new Icon(Icons.star),
			text,
		]
	);
}
```

#### Composability

After previous paragraph you should be very worried about code readability for complex user interfaces.

That's why everything should be splitted as multiple small components you then compose.

Imagine you want a vertical list of users, you could do everything in one widget:

```dart
class HomePage extends StatelessWidget {

  final List<User> users;

  HomePage(this.users);

  @override
  Widget build(BuildContext context) {
    return new ListView.builder(
        itemCount: users.length,
        itemBuilder: (c,i) {
          var user = this.users[i];
          return new Padding(
            padding: const EdgeInsets.all(10.0),
            child: new Column(
              children: <Widget>[
                new Text(user.firstname, style: const TextStyle(fontWeight: FontWeight.bold),),
                new Text(user.lastname),
              ],
            ),
          );
        }
    );
  }
}
```

This starts to become difficult to understand, so instead you would have prefered this :

```dart
class UserTile extends StatelessWidget {

  final User user;

  UserTile(this.user);

  @override
  Widget build(BuildContext context) {
    return new Padding(
      padding: const EdgeInsets.all(10.0),
      child: new Column(
        children: <Widget>[
          new Text(user.firstname, style: const TextStyle(fontWeight: FontWeight.bold),),
          new Text(user.lastname),
        ],
      ),
    );
  }
}

class UserListView extends StatelessWidget {

  final List<User> users;

  UserListView(this.users);

  @override
  Widget build(BuildContext context) {
    return new ListView.builder(
        itemCount: users.length,
        itemBuilder: (c,i) => new UserTile(this.users[i]),
    );
  }
}


class HomePage extends StatelessWidget {

  final List<User> users;

  HomePage(this.users);

  @override
  Widget build(BuildContext context) => new UserListView(this.users);
}
```

A lot better, no? You should also have noticed that all the framework is architectured this way : instead of having a `padding` property in many components, simply nest any component into a `Padding` object. Have you also noticed how easy it is to create a `ListView` compared to native solutions ? I find the **APIs very well designed**, all focused on developer experience, simplicity and productivity. Congratulations to Google engineers.

#### Wide catalog of widgets

The number of widgets already available is just incredible. It's more adapted to material design, but you also have Cupertino components that look more like iOS native components. Every widget looks clean, I haven't seen bugs while using it.

Check-out the [documentation](https://flutter.io/widgets/) and [Flutter Gallery app](https://play.google.com/store/apps/details?id=io.flutter.gallery&hl=fr) for seeing widget usage and demonstrations.

The great thing is that you can do your own catalog of custom widgets very easily, by implementing your visual design guidelines, and everthing will run perfectly on all platforms.

#### Custom painting

All the rendering is made with [Skia](https://skia.org/), and it is really easy to make a widget completely by drawing manually to a canvas. It is absolutely awesome when you have very specific components that don't fit native components, **like charts** for examples.

![photo]({{ site.url }}/img/flutter_custom-painter.png)

This is perfectly doable in Xamarin with [SkiaSharp](https://github.com/mono/SkiaSharp) (I used it for my [Microcharts library](https://github.com/aloisdeniel/Microcharts)), but here it is built-in and that follows the same approach than other components.

### Any architectural standard?

Unlike Xamarin with its well-known [Model-View-ViewModel](https://developer.xamarin.com/guides/xamarin-forms/enterprise-application-patterns/mvvm/) architectural pattern, Flutter doesn't have highly integrated architecture guidelines for designing your application.

However, you can adopt a [Facebook flux](https://facebook.github.io/flux/) and [Redux](https://redux.js.org/) architectures since Flutter widgets are really similar to React components. There are already many community-driven libraries available for that purpose : [greencat](https://github.com/alexeieleusis/greencat), [built_redux](https://github.com/davidmarne/flutter_built_redux), [redux.dart](https://github.com/johnpryan/redux.dart).

Even the Flutter team [has experimentations around it](https://github.com/flutter/flutter_flux), althougth it seems to be more a guidance for developers than a standard.

### A rich documentation

I have to say that the documentation is very complete and clear. 

Since you have all the code cloned on your computer, you can navigate directly to it at any time and look at the implementation under the documentation comments too. Again, it is simple and handy.

The Dart way to write documentation is also very smart : you don't have to list all the parameters in a list, but just mark them into you description. This removes a lot of boilerplate documentation that is almost always redundant with description in other languages.

### Accessing native features with plugins

Flutter team has included a way to access native features through [plugins and platform channels](https://flutter.io/platform-channels/). Yes, it should sound familiar to any Xamarin developer because you have the same concepts : a common abstraction over native features implemented differently with platform APIs.

The difference here is that you have to deal with native tools for implementing platform specific code : 

* **iOS** : XCode, Cocoapods, Objective-C or Swift
* **Android** : Gradle, Java or Kotlin

This seems more complex at first to implement one compared to Xamarin (because there are C# binding/wrapper around every native API with Xamarin, but you have to switch between multiple environments with Flutter), but it is easier to integrate native dependencies because you don't have to create bindings for them.

The great part is that Flutter team already provides and maintains a great [selection of plugins](https://github.com/flutter/plugins) : [connectivity](https://github.com/flutter/plugins/tree/master/packages/connectivity), [battery](https://github.com/flutter/plugins/tree/master/packages/battery), [shared_preferences](https://github.com/flutter/plugins/tree/master/packages/shared_preferences), [path_provider](https://github.com/flutter/plugins/tree/master/packages/path_provider) ...

I'm sure they took inspiration from [Xamarin plugins](https://github.com/xamarin/XamarinComponents).

## Current state

### It feels stable, even with `alpha` tag

The `alpha` state makes it difficult for convincing your customers that this solution is the best, but from a technical point of view almost everything is ready.

The only important missing components for me are : **better accessibility, map views, web views**. I pretty confident that all of them will come this year.

### Only two target platforms with Flutter, but web compatible

Only **iOS** and **Android** are supported at the moment. 

But a really cool feature of Dart is its ability [to transpile to Javascript](https://webdev.dartlang.org/), so with a well architectured solution you should be able to share a large part of your logic between your web application (moreover if you use React and flux), you mobile app and eventually a [Node.js](https://nodejs.org/en/) server.

Flutter app development is the core of the future Operating System of Google known as [Fushia](https://fuchsia.googlesource.com/);

We could also dream of more supported platforms in the future with many more form factors supported (*desktop and TVs*). All the core technologies should allow that and we could have a unique development platform.

### Still a growing community

You couldn't expect the Flutter community to be as developed as the Xamarin one, but you already have a very good selection of plugins and libraries. Since Dart has a strong community you also have many pure logical libraries.

Though I missed several libraries I use in every Xamarin project : a rest client generator ([Refit](https://github.com/paulcbetts/refit)), a simple NoSQL local database ([LiteDB](https://github.com/mbdavid/LiteDB)).

### Great user experience

The most important thing when developing a software is what the user will have between his hands. You could have the best developer tools, if the user interface doesn't feel good for the user it's not worth it.

But Google did great with Flutter because the performances are great and the components are beautiful. 

But, even if they thought about system specifities with Cupertino widgets, it is arguable that you Flutter app could be less well integrated to the user current operating system version than a native/Xamarin application. I personnaly find it interresting because it also means that you will have access to all widgets even on older system versions : no more specific UI bugs that could become a nightmare to fix.

### Already the most productive solution

It is always sad to admit it when you have invested so much time in a technology you love but today **I feel a lot more productive with Flutter than I am with Xamarin and native solutions**. The tools are stable, very coherent, the native feeling is real, the performances are astonishing, and when you are developing on a platform, you could be sure that it will look perfect at first launch on the other platform : a really fun developer experience.

### Can I have a look to an app developped with it?

![photo]({{ site.url }}/img/flutter_gallery.png)

Go have a see at the [Flutter Gallery app](https://play.google.com/store/apps/details?id=io.flutter.gallery&hl=fr) which shows off many components.

There is also the [Hamilton app](https://play.google.com/store/apps/details?id=com.hamilton.app&hl=fr) (*I'm not a big fan of the design choices, but anyway, look at how smooth it is*).

Stay tuned, I should also publish an app made with the tools soon (yes the guitar app)!

## Microsoft has to react

### They have the potential

Microsoft is still a step ahead in term of busines intergration and they also have awesome associated services like [Visual Studio App Center](https://appcenter.ms). They now have to improve a lot their mobile development tools otherwise Flutter will become the new standard for mobile (*maybe software?*) development .

### A crucial year for cross-platform development

That will sound very optimistic : **finally, 2018 will be the year where cross-platform development will feel as polished as native development.** And I think even the more reticient native developers could be tempted by those solutions. 

### Please, try it yourself!

Finally, just try [Flutter](http://flutter.io), you should understand really quickly why this post is so enthusiast. I hope Microsoft teams will do so and take inspiration from it too!

Thank you for reading.
