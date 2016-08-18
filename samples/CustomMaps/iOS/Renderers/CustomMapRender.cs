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