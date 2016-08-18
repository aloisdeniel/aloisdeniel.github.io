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