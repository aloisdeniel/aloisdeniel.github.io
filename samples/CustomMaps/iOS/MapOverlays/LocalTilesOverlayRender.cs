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