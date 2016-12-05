---
layout: post
lang: en
title: "Adding Icon fonts to your Xamarin.iOS project"
image: images/iconfont.png
categories:
  - Microsoft
tags:
  - Font
  - iOS
  - Xamarin
  - Icon
---

Today, I've written for you a quick guide on how to incorporate a custom icon font to your Xamarin.iOS project.

## Adding font file

The first step is to add the font file (i.g. `ttf`) to the `Resources` folder of your iOS project.

![schema]({{ site.url }}/img/xamarin-ios-font-1.png)

All your custom fonts must also appear into the `Info.plist` file of your application in order to be available. Open the file with the source editor, add the `Fonts provided by application` entry (as `Array`) and insert an entry for with you font file name.

![schema]({{ site.url }}/img/xamarin-ios-font-2.png)

## Identifying icon characters

You have now to identify which unicode characters are mapped to the icons you want to use. An easy solution could be to look into the associated `.css` file (for web) if available, else you could use a font explorator to search your icons.

![schema]({{ site.url }}/img/xamarin-ios-font-3.png)

To create a C# character from your unicode, you can use this method :

```csharp
private static string GetUnicode(string code)
{
    int codeValue = int.Parse(code, System.Globalization.NumberStyles.HexNumber);
    return char.ConvertFromUtf32(codeValue);
}


var c = GetUnicode("2605");
```

## Displaying the icon

Ok, we have all the elements to insert your icon into a `UILabel` :

```csharp
var label = new UILabel()
{
    Font = UIFont.FromName("entypo", 20),
    Text = GetUnicode("2605"),
};
```

## Bonus : rendering an image

Generating a `UIImage` from you icon can sometime be useful (for example for *Tabbar* items).

Here a short snippet of code to do so :

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