---
draft: true
lang: en
layout: post
title: "Auto-publish a NuGet package from Visual Studio Team Services"
image: images/post_nuget-vsts.jpg
categories:
  - Microsoft
tags:
  - NuGet
  - VSTS
  - TFS
  - CI
---

Continuous integration is an important topic : automate tedious tasks and focus on code instead. I'll explain you how to configure a simple VSTS build definition to publish a NuGet version on each source commit.

## Source code and package specification

First, be sur you have the **Visual Studio** project source code available from **Visual Studio Team Services (VSTS)** : [GitHub](https://www.github.com) is a well known git repository provider supported.

Your library must also be specified for **NuGet** with a `.nuspec` manifest file, or eventually use directly your `.csproj` for simple packages.

I have a simple library called [Orkester](https://github.com/aloisdeniel/Orkester) as an example.

## Create your build definition

After creating your [Visual Studio Team Services](http://www.visualstudio.com) project from dashboard, navigate to the `Build` tab.

