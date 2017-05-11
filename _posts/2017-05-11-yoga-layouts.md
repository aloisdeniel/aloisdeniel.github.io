---
layout: post
lang: en
title: "Yoga : cross platform layouts by Facebook"
image: images/yoga
categories:
  - Microsoft
tags:
  - Layout
  - Facebook
  - iOS
  - Android
  - Xamarin
  - C#
---

I recently tryed out a new opensource library developed by Facebook named [Yoga](https://facebook.github.io/yoga/). It's still in preview, but I'm very optimistic about it because it is a thing I started to design many times, for various purposes : creating shared layouts beetwen Xamarin.iOS and Android (*just like Forms with better performances*), creating UI for games (on top of Monogame). Its seems to be a free problem-solver for me.

## Low-level layout calculation

First of all, **Yoga** is developed with **C** language, and that's a good thing for low-level calculation optimization. Don't worry, there's also many available official bindings for popular languages : **C#**, Java, Swift, ...

In this article, I will use the C# version of the library but concepts can be easily ported to any language or platform.

The APIs are pretty simular to the well-known, easy and popular **flexbox** layout system from last web standards.

## Basic concepts

Your visual components are represented as a tree of `YogaNodes`.

So basically, you can represent the bellow view as shown with its tree:

![schema]({{ site.url }}/img/yogaxml-0.png)

Each one of those nodes has several properties to describe its relative position to its parent or position of its children (*simply refer to the [official documentation](https://facebook.github.io/yoga/docs/getting-started/) for more detail*).

![schema]({{ site.url }}/img/yogaxml-1.png)

With the C# api, you describe this tree like this :

```csharp
var root = new YogaNode()
{
	Width = 750,
	Height = 1240,
	Padding = 20,
};

// Top

var gray = new YogaNode()
{
	Height = 200,
};
root.Insert(root.Count, gray);

// Center

var green = new YogaNode()
{
	FlexDirection = YogaDirection.Row,
	FlexGrow = 1,
	Padding = 10,
};
root.Insert(root.Count, green);

var smallSquareLeft = new YogaNode()
{
	Margin = 10,
	Width = 20,
	Height = 20,
};

var smallRectangle = new YogaNode()
{
	Margin = 10,
	FlexGrow = 1,
	Height = 20,
	AlignSelf = YogaAlign.FlexEnd,
};

var smallSquareRight = new YogaNode()
{
	Margin = 10,
	Width = 20,
	Height = 20,
};

green.Insert(green.Count, smallSquareLeft);
green.Insert(green.Count, smallRectangle);
green.Insert(green.Count, smallSquareRight);

// Bottom

var black = new YogaNode()
{
	AlignSelf = YogaAlign.Center,
	FlexGrow = 1,
	Width = 100,
};
root.Insert(root.Count, black);
```

## Layout representation

As seen in previous example, the code is extremely simple but also very verbose : boring stuff. The library gives you the barebone mecanisms and that's up to you to build your visual system on top of it.

First, your tree would be more readable as an XML document :

```xml
<View Padding="20">
	<View Height="200"/>
	<View Padding="10" FlexGrow="1" FlexDirection="Row">
		<View Margin="10" Width="20" Height="20" />
		<View Margin="10" Position="Bottom" AlignSelf="FlexEnd" FlexGrow="1" Height="20" />
		<View Margin="10" Width="20" Height="20" />
	</View>
    <View FlexGrow="1"  AlignSelf="Center" Width="100" />
</View>
```

It's easy to generate the previous node instances with the built-in .NET serializers.

## Associating data

Each `YogaNode` has a `object Data { get; set; }` property to associate your custom representation to each visual layout node.

It's generally a good place to put your view custom properties, to proceed to a rendering by visiting your `YogaNode` tree.

## Yoga.Xml

I created a project named [Yoga.Xml](https://github.com/aloisdeniel/Yoga.Xml) to help you design such a parser.

It also contains quick example of an **XML parser**, applied to the previous view rendered on top of *Monogame* and *Xamarin.iOS*, both for iOS (*I will eventually add more platforms, but the principles are the same*) with the exact same end-result.

A `YogaParser` will parse `YogaNode` properties for each node and you will have to give it a way of create user data associated to a node through an implementation of `IXmlRenderer`.

You can extend the previous XML document to add visual properties too.

```xml
<View Padding="20" Background="White">
	<View Background="Gray" Height="200"/>
	<View Id="centerView" Padding="10" Background="Green" FlexGrow="1" FlexDirection="Row">
		<View Margin="10" Background="Black" Width="20" Height="20" />
		<View Margin="10" Position="Bottom" AlignSelf="FlexEnd" Background="Black" FlexGrow="1" Height="20" />
		<View Margin="10" Background="Black" Width="20" Height="20" />
	</View>
    <View Background="Black" FlexGrow="1"  AlignSelf="Center" Width="100" />
</View>
```

If you define a `View` type that represents your view properties, and provide an `IXmlRenderer` implementation for each XML `View` node, the parser will be able to render it accordingly.

```csharp
public class View
{
	public string Id { get; set; }
	public byte [] Background { get; set; }
}
```

You can base your implementation on included `XmlRenderer<T>` :

```csharp
public class ViewRenderer : XmlRenderer<View>
{
    public ViewRenderer() : base("View") { }
    
    public override View Render(XElement node)
    {
        var view = base.Render(node);
		 view.Id = node.Attribute("Id")?.Name.LocalName;
        switch (node.Attribute("Background")?.Value)
        {
            case "Gray":
                view.Background = new byte [] { 246, 247, 249 };
                break;

            case "Green":
                view.Background = new byte [] { 151, 220, 207 };
                break;

            case "Black":
                view.Background = new byte [] { 48, 56, 70 };
                break;

            default:
                view.Background = new byte [] { 255, 255, 255 };
                break;
        }
        return view;
    }
}
```

The last step is to indicate how to render your tree on each platform. An iOS `UIViewController` renderer could be :

```csharp
public override void ViewDidLoad()
{
	base.ViewDidLoad();
	
	var xml = @"<...>";
	
	var parser = new YogaParser();
	
	//Renderers
	parser.Register<ViewRenderer>();
	
	// Parsing
	var node = parser.Parse(xml);	
	
	// Calculating layout
	node.Width = (float)this.View.Frame.Width;
	node.Height = (float)this.View.Frame.Height;
	node.CalculateLayout();
	
	// Creating native views from yoga nodes
	this.CreateSubview(node);
}

private void CreateSubview(YogaNode node)
{
	var view = node.Data as View;
	var bg = view.Background;

	var native = new UIView(new CGRect(node.LayoutX, node.LayoutY, node.LayoutWidth, node.LayoutHeight));
	native.BackgroundColor = UIColor.FromRGB(bg[0], bg[1], bg[2]);
	this.View.AddSubview(native);
	
	foreach(var child in node)
	{
		CreateSubview(child);
	}
}
```

You could also imagine a build task that generate C# code for each node to have fully optimized rendering.

For a Monogame sample implementation, you can see the [SampleGame.cs](https://github.com/aloisdeniel/Yoga.Xml/blob/master/Sources.Xml/Yoga.Xml.Sample.Monogame.iOS/SampleGame.cs) class.

For a full and more complete sample, clone the [github repo](https://github.com/aloisdeniel/Yoga.Xml) and watch yourself.

