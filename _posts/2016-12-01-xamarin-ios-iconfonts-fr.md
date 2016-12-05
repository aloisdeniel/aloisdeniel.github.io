---
layout: post
lang: fr
title: "Ajouter une police d'icônes à votre projet Xamarin.iOS"
image: images/iconfont.png
categories:
  - Microsoft
tags:
  - Font
  - iOS
  - Xamarin
  - Icon
---

Au programme aujourd'hui, un petit guide qui vous expliquera comment intégrer une police d'icônes personnalisée à votre projet Xamarin.iOS.

## Ajouter le fichier de police

La première étape est l'ajout de votre fichier de police (souvent `ttf`) au dossier `Resources` de votre projet d'application iOS.

![schema]({{ site.url }}/img/xamarin-ios-font-1.png)

Toutes les polices personnalisées doivent également apparaître dans le fichier `Info.plist` de votre application pour être accessibles. Ouvrez ce fichier depuis le *source editor*, et ajoutez une entrée `Fonts provided by application` (de type `Array`). Inserez dans ce tableau une ligne pour votre fichier de police.

![schema]({{ site.url }}/img/xamarin-ios-font-2.png)

## Identifier les caractères de la police

Il faut désormais trouver à quels codes de caractères sont associés les icônes que nous souhaitons afficher. La solution que j'utilise généralement est de regarder dans le fichier `.css` associé (pour un usage web) si disponible. Vous pouvez également utiliser un programme d'exploration de polices.

![schema]({{ site.url }}/img/xamarin-ios-font-3.png)

Pour créer un caractère C# depuis votre code, vous pouvez utiliser cette méthode :

```csharp
private static string GetUnicode(string code)
{
    int codeValue = int.Parse(code, System.Globalization.NumberStyles.HexNumber);
    return char.ConvertFromUtf32(codeValue);
}

var c = GetUnicode("2605");
```

## Afficher une icône

Nous avons réunis tous les éléments pour afficher note icône dans un `UILabel` :

```csharp
var label = new UILabel()
{
    Font = UIFont.FromName("entypo", 20),
    Text = GetUnicode("2605"),
};
```

## Bonus : rendu sous forme d'image

Générer une `UIImage` depuis vos icônes peut parfois être utile (par exemple pour les *Tabbar items*).

Voici un extrait de code qui vous aidera peut-être pour cela :

```csharp
public static UIImage RenderIcon(string code, CGSize imageSize, float size, UIColor color)
{
	var unicodeString = GetUnicode(code);
	UIGraphics.BeginImageContextWithOptions(imageSize, false, 0);
	var paragraphStyle = new NSMutableParagraphStyle();
	paragraphStyle.Alignment = UITextAlignment.Center;
	var font = UIFont.FromName("entypo", size);
	var measure = unicodeString.StringSize(font, UIScreen.MainScreen.Bounds.Width, UILineBreakMode.TailTruncation);
	var area = new CGRect(imageSize.Width / 2 - measure.Width / 2, imageSize.Height / 2 - measure.Height / 2, measure.Width, measure.Height);
	color.SetColor();
	unicodeString.DrawString(area, font);
	var result = UIGraphics.GetImageFromCurrentImageContext();
	UIGraphics.EndImageContext();
	return result;
}
```