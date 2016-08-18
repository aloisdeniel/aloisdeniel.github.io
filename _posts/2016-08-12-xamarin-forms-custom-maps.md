---
layout: post
title: "Creating custom Xamarin.Forms maps"
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

I'll tell you how I achieved custom tile rendering from a Xamarin.Forms map component.

## What is a map image tile ?

The easier way to create custom map rendering from existing map components (`Android.Gms.GoogleMap` and `MapKit.MKMapView`) is by using overlay from multiple image tiles.

Before delving into code, let's review how the image tiles are represented.

![schema]({{ site.url }}/img/custommaps_001.png)

![schema]({{ site.url }}/img/custommaps_002.png)

A tile is defined by :

* `size` : all tiles from your map representation must have the exact same size for all available zoom levels (commonly `256px*256px`)
* `z` : a zoom level (`1` is the minimum zoom level that should show all the covered area in one tile)
* `x` : the horizontal position of the tile
* `y` : the vertical position of the tile

## How can I get custom tiles ?

The first step to get a custom styled map is to get those tiles. There`s two main ways, and like often : do it yourself, or use an existing provider.

### Providers

Several services provide custom tiles from urls. Generaly, advanced customization requires paid service. Paid services often provide also custom components that use native vector rendering (which uses more device resources to be rendered, but that are much lighter than image tiles).

Most of the time, those services uses data from [OpenStreetMaps](https://www.openstreetmap.org/).

The tiles are provided through HTTP with url like the above with the properties of a tile (`z`, `x`, `y`) to get the corresponding image :

```
https://{host}/{z}/{x}/{y}.png
```

#### Free

* [Stamen](http://maps.stamen.com/)
* [CartoDb-Basemaps](https://carto.com/location-data-services/basemaps/)

#### Paid

* [MapBox](https://www.mapbox.com/maps/)
* [CartoDb](https://carto.com/)

### Generating tiles

If you need really customized maps, you can also generate all those images by yourself and provide them to you mobile app the way you want (packaged with the app, through an http server).

[Mapnik](http://mapnik.org/) is a great tool for achieving this. If you want to go further, I have a node library called
[mapzen-tile-generator](https://github.com/aloisdeniel/mapzen-tile-generator) on github that creates images from [mapzen metro extracts](https://mapzen.com/data/metro-extracts/).

## Xamarin custom renderers

### Prerequirements

To use Xamarin.Forms, you must install 
[Xamarin.Forms.Maps](https://www.nuget.org/packages/Xamarin.Forms.Maps) nuget package to your projects.

### iOS

The iOS renderer is mainly based on `MKTileOverlayRenderer` and `MKTileOverlay`.

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

The Android renderer has lot of similarities and is based on `UrlTileProvider` and `MKTileOverlay`.


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

### Sample

I publish those [samples on github](https://github.com/aloisdeniel/blog/tree/gh-pages/samples/CustomMaps) if you want a complete working project.

## Conclusion

You should have all the pointers now to implement your own custom maps! You're even able to improve this by combining local and distant storage to create a cache of distants tiles for offline use. You can also render custom tiles directly from the mobile app and having multiple overlays. Have fun and be creative!