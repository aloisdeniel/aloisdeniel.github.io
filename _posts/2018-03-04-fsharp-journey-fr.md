---
layout: post
lang: fr
title: "F# : vers de nouveaux paradigmes"
image: images/fsharp
categories:
  - .NET
tags:
  - FSharp
  - .NET
  - Xamarin
---

Si comme moi vous êtes un développeur C# depuis de nombreuses années, je suis persuadé que vous avez déjà entendu parler du langage F#. Ce proche cousin du C# est souvent associé à des éloges : pourquoi n'est-il alors pas utilisé plus couramment ?

## Une mauvaise introduction

Je pense que les développeurs F# introduisent souvent mal le langage à leurs confrères qui : soit ne les prennent tout simplement pas au sérieux, soit considèrent une surenchère de complexité qui semble amener plus de problématiques que de solutions.

### Citations courantes

Il est ainsi courant de d'entendre ce type de déclarations qui peuvent prêter à confusion ou imprécisions.

> La programmation fonctionnelle est une approche totalement différente de la programmation orientée objet.

Lorsque l'on est familier avec la programmation orientée objet, il est difficilement concevable d'abandonner tous ces concepts qui nous sont chers. De plus cet assertion est bien trop extrême puisque de nombreux concepts sont partagés par les deux approches.

> Tout est fonction en F#.

Cette déclaration peut également être incomprise et ramener au language C pour lequel il n'y avait pas de classes. Pour un développeur javascript, il peut également y avoir une incompréhension comme les classes sont en fait des fonctions. Encore une fois, cette déclaration va trop loin, puisque des structures de données existent évidemment en F#.

> L'immutabilité des données, associée au pattern matching, rend le code plus compréhensif.

De nombreux termes spécifiques peuvent rebuter l'auditoire, alors que ce sont souvent des concepts qui ont déjà été manipulés par les développeurs C#. Ils sont uniquement intégrés au langage F# pour faciliter ou encourager leur utilisation.

> La programmation fonctionnelle est moins sujette aux bugs.

Cette déclaration n'est pas prise au sérieux. Il est difficilement concevable que le simple choix d'un language puisse éviter des incompréhensions fonctionnelles. Il s'agit en fait d'une facilité dans le traitement des différents cas de par les déclarations : cela n'évitera évidemment pas une mauvaise interprétation d'une règle métier.

### Comment je le présenterais

Le F# est un langage de la famille Microsoft .NET qui simplifie certaines déclarations grâce à une plus grande variété d'opérateurs et des APIs adaptées.

Pour commencer à développer en F#, vous avez déjà tous les outils, tout ce que vous connaissez déjà pour le C# s'applique également ici : créez un projet Visual Studio et n'hésitez pas à le référencer depuis un projet habituel développé (Xamarin, UWP, .NET Core, ...).

## Lancez-vous !

Mettez tous vos a-priori de côté, testez le langage et surtout : partagez votre expérience avec vos collègues.

L'autre jour, je suis tombé par hasard sur le [site fsharp for fun and profit](https://fsharpforfunandprofit.com/) qui m'a incité à aller plus loin. Je pense avoir appri beaucoup: des concepts universels qui enrichissent ma manière de développer et surtout un nouveau langage qui est désormais mon choix initial pour tout développement .NET.

## Mes étapes

Un effort est néanmoins à prévoir pour monter en compétence sur ce langage de part les nombreux concepts et mots-clés.

Je vais vous partager les étapes principales par lesquelles je suis passé pour appréhender ce langage de manière progressive. C'est donc l'occasion de vous montrer que vous n'êtes pas obligés d'abandonner le C# du jour au lendemain, l'interopabilité entre le F# et le C# étant aisée.

J'enrichirai régulièrement cette liste avec la publication de nouveaux articles :

* **1 (bientôt) :** Déclarations de base, records and intéropabilité avec le C# 
* **2 (bientôt) :** L'opérateur `|>` : adapter vos APIs
* **...**

## Aller plus loin

Ceci est juste une rapide introduction, mais de nombreuses ressources existent pour maîtriser tous les concepts. 

* [Introduction au langage](https://www.microsoft.com/net/learn/languages/fsharp/)
* [F# for fun and profit](https://fsharpforfunandprofit.com/)
* [Site officiel](http://fsharp.org/)
* [Documentation](https://docs.microsoft.com/en-us/dotnet/fsharp/)

À très bientôt!


