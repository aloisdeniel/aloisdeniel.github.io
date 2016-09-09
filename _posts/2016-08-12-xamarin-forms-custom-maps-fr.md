---
layout: post
lang: fr
title: "Créer une map Xamarin.Forms personnalisée"
image: images/post_xamarin-forms-custom-maps.png
categories:
  - Xamarin
tags:
  - Xamarin
  - Xamarin.Forms
  - Maps
  - iOS
  - Android
  - C#
---

Je vais vous présenter la manière dont j'ai pu personnaliser l'aspect des tuiles affichées sur une map Xamarin.Forms.

## Qu'est ce qu'une tuile de map

Le moyen le plus simple pour créer un rendu de map depuis les composants proposés (`Android.Gms.GoogleMap` and `MapKit.MKMapView`) peut se faire au travers d'un calque personnalisé.

Avant de plonger dans le code, voyons rapidement ce qu'est une tuile.

![schema]({{ site.url }}/img/custommaps_001.png)

![schema]({{ site.url }}/img/custommaps_002.png)

Une tuile est donc définie par :

* `size` : toutes les tuiles doivent tous avoir la même taille, quelque soit le niveau de zoom (souvent `256px*256px`)
* `z` : un niveau de zoom (`1` est le zoom minimal qio doit couvrir la totalité de la zone naviguable sur une tuile)
* `x` : la position horizontale de la tuile
* `y` : la position verticale de la tuile

## Comment obtenir des tuiles personnalisées ?

Vous avez deux possibilités, comme souvent : générez les par vous-même, ou bien utilisez un service tierce (souvent payants).

### Services

Plusieurs services permettent la génération de tuiles depuis des urls. Des options de personnalisation avancée nécessitent souvent un abonnement payant. Ces derniers proposent souvent également des composants natifs qui effectuent du rendu vectoriel (qui utilise plus de ressources systèmes pour le rendu, mais plus légères que des images)

La source de données géographiques généralement utilisée est [OpenStreetMaps](https://www.openstreetmap.org/).

Les tuiles sont proposées au travers du protocole HTTP, avec des urls contenant les propriété de tuiles (`z`, `x`, `y`) pour obtenir l'image associée :

```
https://{host}/{z}/{x}/{y}.png
```

#### Gratuit

* [Stamen](http://maps.stamen.com/)
* [CartoDb-Basemaps](https://carto.com/location-data-services/basemaps/)

#### Payant

* [MapBox](https://www.mapbox.com/maps/)
* [CartoDb](https://carto.com/)

### Génération 

Si vous nécessitez une personnalisation maximale, vous pouvez également générer toutes ces tuiles par vous-même et les mettre à disposition de votre mobile (soit packagée avec l'application, soit avec un serveur).

[Mapnik](http://mapnik.org/) un super outil pour réaliser cela. Si vous voulez voir un exemple plus simple, j'ai créé une librairie qui l'utilise
[mapzen-tile-generator](https://github.com/aloisdeniel/mapzen-tile-generator), disponible sur GitHub, qui crée des images à partir de [mapzen metro extracts](https://mapzen.com/data/metro-extracts/).

## Xamarin custom renderers

### Pré-requis

Pour utiliser les maps Xamarin.Forms, vous devez installer le package
[Xamarin.Forms.Maps](https://www.nuget.org/packages/Xamarin.Forms.Maps).

### iOS

Le renderer iOS est principalement basé sur `MKTileOverlayRenderer` and `MKTileOverlay`.

```csharp
namespace CustomMaps.iOS.MapOverlays
{
	using System;
	using System.IO;
	using Foundation;
	using MapKit;

	public class LocalTilesOverlayRender : MKTileOverlay
	{
		public LocalTilesOverlayRender()
		{
			this.CanReplaceMapContent = true;
		}

		public override NSUrl URLForTilePath(MKTileOverlayPath path)
		{
			var name = $"logo_xam_{((path.X + path.Y) % 2)}.png";
			var file = Path.Combine(NSBundle.MainBundle.BundlePath, name);
			return NSUrl.FromFilename(file);
		}
	}
}
```

```csharp
namespace CustomMaps.iOS.MapOverlays
{
	using Foundation;
	using MapKit;

	public class DistantTilesOverlayRender : MKTileOverlay
	{
		public DistantTilesOverlayRender(string tileUrl)
		{
			this.CanReplaceMapContent = true;
			this.tileUrl = tileUrl;
		}

		private readonly string tileUrl;

		public override NSUrl URLForTilePath(MKTileOverlayPath path)
		{
			var url = string.Format(this.tileUrl, path.Z, path.X, path.Y);
			return NSUrl.FromString(url);
		}
	}
}
```

```csharp
[assembly: Xamarin.Forms.ExportRenderer(typeof(CustomMaps.CustomMap), typeof(CustomMaps.iOS.Renderers.CustomMapRenderer))]
namespace CustomMaps.iOS.Renderers
{
	using MapKit;
	using Xamarin.Forms;
	using Xamarin.Forms.Maps.iOS;
	using Xamarin.Forms.Platform.iOS;

	public class CustomMapRenderer : MapRenderer
	{
		const string Host = "https://cartodb-basemaps-a.global.ssl.fastly.net/dark_all/{0}/{1}/{2}.png";

		protected override void OnElementChanged(ElementChangedEventArgs<View> e)
		{
			base.OnElementChanged(e);

			if (e.NewElement != null)
			{
				var map = new MKMapView();
				//var ol = new MapOverlays.DistantTilesOverlayRender(Host);
				var ol = new MapOverlays.LocalTilesOverlayRender();
				map.AddOverlay(ol, MKOverlayLevel.AboveLabels);
				map.OverlayRenderer = (mv, o) => new MKTileOverlayRenderer((MKTileOverlay)o);
				this.SetNativeControl(map);
			}
		}
	}
}
```

### Android

Le renderer Android a un fonctionnement relativement similaire, et est basé sur `UrlTileProvider` and `MKTileOverlay`.

```csharp
namespace CustomMaps.Droid
{
	using System;
	using Android.Gms.Maps.Model;
	using Java.Net;

	public class LocalTileProvider: UrlTileProvider
	{
		public LocalTileProvider() : base(256, 256)
		{
		}

		public override Java.Net.URL GetTileUrl(int x, int y, int z)
		{
			return new URL($"file:///android_asset/logo_xam_{((x + y) % 2)}.png");
		}
	}
}
```

```csharp
namespace CustomMaps.Droid
{
	using System;
	using Android.Gms.Maps.Model;
	using Java.Net;

	public class DistantTileProvider: UrlTileProvider
	{
		public DistantTileProvider(string tileUrl) : base(256, 256)
		{
			this.tileUrl = tileUrl;
		}

		readonly string tileUrl;

		public override Java.Net.URL GetTileUrl(int x, int y, int z)
		{
			var url = string.Format(this.tileUrl, z, x, y);
			return new URL(url);
		}
	}
}
```

```csharp	
[assembly: Xamarin.Forms.ExportRenderer(typeof(CustomMaps.CustomMap), typeof(CustomMaps.Droid.Renderers.CustomMapRenderer))]
namespace CustomMaps.Droid.Renderers
{
	using Android.Gms.Maps;
	using Android.Gms.Maps.Model;
	using Xamarin.Forms;
	using Xamarin.Forms.Maps.Android;
	using Xamarin.Forms.Platform.Android;

	public class CustomMapRenderer : MapRenderer, IOnMapReadyCallback
	{
		const string Host = "https://cartodb-basemaps-a.global.ssl.fastly.net/dark_all/{0}/{1}/{2}.png";

		protected override void OnElementChanged(ElementChangedEventArgs<View> e)
		{
			base.OnElementChanged(e);

			if (e.NewElement != null)
			{
				((MapView)Control).GetMapAsync(this);
			}
		}

		public void OnMapReady(GoogleMap googleMap)
		{
			var options = new TileOverlayOptions();
			//options.InvokeTileProvider(new DistantTileProvider(Host));
			options.InvokeTileProvider(new LocalTileProvider());
			googleMap.MapType = GoogleMap.MapTypeNone;
			googleMap.AddTileOverlay(options);
		}
	}
}
```

### Exemple

J'ai publié ces [projets d'exemple sur GitHub](https://github.com/aloisdeniel/blog/tree/gh-pages/samples/CustomMaps) si vous voulez un exemple concret.

## Conclusion

Vous devez désormais avoir touts les éléments pour implémenter vos propres cartes personnalisées! Vous pouvez améliorer tout cela en combinant du stockage local et disant pour créer un cache des images distantes en cas de perte de connexion. Vous pouvez également eventuellement générer les tuiles directement depuis le mobile.

Amusez vous, et soyez créatif!