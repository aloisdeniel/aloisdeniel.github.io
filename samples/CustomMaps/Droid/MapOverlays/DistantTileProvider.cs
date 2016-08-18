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

