---
layout: post
lang: fr
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

Je suis récemment tombé sur une librairie open-source développée par Facebook : [Yoga](https://facebook.github.io/yoga/). Cette dernière est encore en preview, mais je suis optimiste comme c'est un problème auquel j'ai été confronté un certain nombre de fois : réaliser des layouts partagés entre différentes plateformes (comme *Xamarin.Forms*, mais en performant ...), réalisation de UI pour des jeux vidéos (via Monogame). J'ai donc été très heureux de découvrir tout cela sur GitHub.

## Calcul bas niveau de layouts

Premièrement, **Yoga** est dévelopée en language **C**, et c'est une bonne chose pour l'optimisation globale des calculs. Mais ne vous inquiétez pas, des déclinaisons pour la plupart des languages populaires existent : **C#**, Java, Swift, ...

Les APIs sont basées sur le populaire système **flexbox**, bien connu des développeurs web d'aujourd'hui.

Tout au long de cet article, j'utiliserai la version **C#** de la librairie, mais les concepts s'appliquent pour n'importe laquelle  des déclinaison.

## Concepts de base

Vos composants visuels sont représentés sous la forme d'un arbre de `YogaNodes`.

Il est donc par exemple possible de réprésenter la hierarchie de vue ci dessous.

![schema]({{ site.url }}/img/yogaxml-0.png)

Chacun de ces noeuds possède certaines propriétés pour décrire sa position par rapport à son parent, ou encore décrire l'agencement de ses enfants. Pour une liste exaustive des propriétés disponibles, n'hésitez pas à jeter un oeil à la [documentation officielle](https://facebook.github.io/yoga/docs/getting-started/). 

![schema]({{ site.url }}/img/yogaxml-1.png)

Avec les APIs C#, vous êtes donc en mesure décrire cet arbre de la manière suivante :

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

## Réprésentation du layout

Comme vous avez pu le constater dans l'exemple précédent, le code est relativement simple, mais également très verbeux : rien de plus ennuyeux! La librairie vous livre donc uniquement les éléments de base pour construire votre système de rendu.

Il est en revanche simple d'imaginer une represéntation beaucoup plus lisible, par exemple sous la forme d'un document XML :

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

Cette tâche est d'autant plus simple que les frameworks .NET proposent en général des sérialiseurs à cet effet.

## Associer des données

Chaque `YogaNode` possède une propriété `object Data { get; set; }` qui vous permettra d'associer une représentation personnalisée à chacun de ces noeud.

C'est généralement l'endroit parfait pour stocker vos propriétés nécéssaires au rendu définitif lors du parcours de votre arbre.

## Yoga.Xml

J'ai publié un projet [Yoga.Xml](https://github.com/aloisdeniel/Yoga.Xml) pour simplifier la réalisation de ce type de parser.

Ce dernier contient également un exemple, appliqué aux technologies *Monogame.iOS* et *Xamarin.iOS* (*j'ajouterai éventuellement d'autres plateformes, mais le principe reste de toute manière le même*), pour lequel le résultat affiché est strictement le même.

Un `YogaParser` parcourera chaque propriété d'un `YogaNode`. En complément, vous devrez proposer un moyen de créer chaque donnée associée au travers d'une implémentation de `IXmlRenderer`.

Vous pouvez donc étendre votre XML pour ajouter des données utiles au rendu visuel :

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

Si, par exemple, vous définissez une classe `View` qui represente les propriétés de votre vue, et enregistrez une implémentation de `IXmlRenderer` pour les noeuds XML `View`, le parser sera capable de générer les données en conséquence.

```csharp
public class View
{
	public string Id { get; set; }
	public byte [] Background { get; set; }
}
```
Vous pouvez simplifier la réalisation de votre implémentation sur la classe `XmlRenderer<T>` incluse :

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

La dernière étape est le rendu de votre arbre sur chaque plateforme. Voici un exemple de ce à quoi ressemblerait un `UIViewController` sur plateforme *Xamarin.iOS*

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

Sur ce même principe, il est également aisé de concevoir une tâche de build générant le code C# associé à chaque noeuds pour améliorer la performance globale du rendu.

Pour un exemple d'implémentation Monogame, vous pouvez parcourir les sources de la classe [SampleGame.cs](https://github.com/aloisdeniel/Yoga.Xml/blob/master/Sources.Xml/Yoga.Xml.Sample.Monogame.iOS/SampleGame.cs).

Pour parcourir l'exemple complet, clonez le [repo github](https://github.com/aloisdeniel/Yoga.Xml) et voyez par vous-même!

