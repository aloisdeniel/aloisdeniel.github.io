---
layout: post
lang: fr
title: "Configurer NLog pour Xamarin"
image: images/post_xamarin-certification.jpg
categories:
  - Microsoft
tags:
  - NLog
  - C#
  - Xamarin
---

[NLog](http://nlog-project.org/) est depuis longtemps
un standard pour réaliser des traces applicative en environnement .NET, et il est désormais compatible avec Xamarin depuis quelques versions.

## Installation

La première étape est l'ajout de la référence au package NuGet [NLog.Config](https://www.nuget.org/packages/NLog.Config/) à votre projet iOS ou Android.

![schema]({{ site.url }}/img/nlog-package.png)

Ceci va créer et ajouter un fichier à la raçine de votre projet, afin de définir les cibles et règles de tracage.

## Chargement du fichier de configuration

Dans une application .NET, le fichier de configuration est automatiquement chargé au lancement. Malheuresement ceci n'est actuellement pas supporté par Xamarin, nous allons donc devoir le faire nous même.

Pour cela, vous pouvez inclure ce fichier dand votre dll en sélectionnant l'action de compilation `Embedded Resource` (ou `Ressource incorporée`).

![schema]({{ site.url }}/img/nlog-config-buildaction.png)

Nous pouvons maintenant charger ce contenu xml et définir `NLog.LogManager.Configuration`.

```csharp
private void InitializeLog()
{
	var assembly = this.GetType().Assembly;
	var name = assembly.GetName().Name;
	var location = $"{name}.NLog.config";
	var stream = assembly.GetManifestResourceStream(location);
	LogManager.Configuration = new XmlLoggingConfiguration(XmlTextReader.Create(stream), null);
}
```
Cette méthode doit être appellée au lancement de votre application, donc `AppDelegate.FinishedLaunching` sur iOS, et `MainActivity.OnCreate` sur Android sont de bons candidats. Vos *Loggers* peuvent désormais être créés et invoqués.

```csharp
private static Logger logger = LogManager.GetCurrentClassLogger();

public override bool FinishedLaunching(UIApplication application, NSDictionary launchOptions)
{
	this.InitializeLog();
	logger.Info("Application started");
	return true;
}
```

## Contenu du fichier de Configuration

Si vous souhaitez ajouter vos traces dans un fichier, vous allez devoir spécifier le chemin grâce à `${specialfolder:folder=MyDocuments}`.

### iOS

```xml
<?xml version="1.0" encoding="utf-8" ?>
<nlog xmlns="http://www.nlog-project.org/schemas/NLog.xsd"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.nlog-project.org/schemas/NLog.xsd NLog.xsd"
      autoReload="true" throwExceptions="false" internalLogLevel="Off">

  <targets>
    <target xsi:type="File" name="f" fileName="${specialfolder:folder=MyDocuments}/../Library/logs/${shortdate}.log" layout="${longdate} ${uppercase:${level}} ${message}" />
    <target xsi:type="Console" name="console" layout="${longdate} ${uppercase:${level}} ${message}" />
  </targets>

  <rules>
    <logger name="*" minlevel="Debug" writeTo="f" />
    <logger name="*" minlevel="Debug" writeTo="console" />
  </rules>
</nlog>
```

### Android

```xml
<?xml version="1.0" encoding="utf-8" ?>
<nlog xmlns="http://www.nlog-project.org/schemas/NLog.xsd"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.nlog-project.org/schemas/NLog.xsd NLog.xsd"
      autoReload="true"
      throwExceptions="false"
      internalLogLevel="Off" internalLogFile="c:\temp\nlog-internal.log">

  <targets>
    <target xsi:type="File" name="f" async="true" fileName="${specialfolder:folder=MyDocuments}/logs/${shortdate}.log" layout="${longdate} ${uppercase:${level}} ${message}" />
    <target xsi:type="Console" name="console" layout="${longdate} ${uppercase:${level}} ${message}" />
  </targets>

  <rules>
    <logger name="*" minlevel="Debug" writeTo="f" />
    <logger name="*" minlevel="Debug" writeTo="console" />
  </rules>
</nlog>
```

![schema]({{ site.url }}/img/nlog-file.png)

C'est tout pour aujourd'hui!