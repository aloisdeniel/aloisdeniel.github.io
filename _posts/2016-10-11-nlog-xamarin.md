---
layout: post
lang: en
title: "Configure NLog for Xamarin"
image: images/post_xamarin-certification.jpg
categories:
  - Microsoft
tags:
  - NLog
  - C#
  - Xamarin
---

[NLog](http://nlog-project.org/) is now a standard for logging in .NET environnement, and since several versions it now supports Xamarin! But the configuration is not as obvious as expected.

## Installing

The first step is to add the [NLog.Config](https://www.nuget.org/packages/NLog.Config/) NuGet package to your iOS or Android project.

![schema]({{ site.url }}/img/nlog-package.png)

This will add an `NLog.config` file at the root level of your project for defining your logging targets and rules.

## Loading the configuration file

In a .NET application, the configuration file is automatically loaded at startup, but unfortunately, this isn't currently supported on Mono. So we have to do it ourselves.

You can embed this file into your application dll by choosing the `Embedded Resource` build action.

![schema]({{ site.url }}/img/nlog-config-buildaction.png)

Now, we can load it at startup by reading the xml content, and defining `NLog.LogManager.Configuration`.

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

Call this method at application startup, so `AppDelegate.FinishedLaunching` on iOS, and `MainActivity.OnCreate` on Android are good candidates. Loggers can now be created and will use your configuration file.

```csharp
private static Logger logger = LogManager.GetCurrentClassLogger();

public override bool FinishedLaunching(UIApplication application, NSDictionary launchOptions)
{
	this.InitializeLog();
	logger.Info("Application started");
	return true;
}
```

## Configuration file content

If you want to append your logs into a file, you have to add specify the path with `${specialfolder:folder=MyDocuments}`.

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

And that's all for today !