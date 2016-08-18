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

