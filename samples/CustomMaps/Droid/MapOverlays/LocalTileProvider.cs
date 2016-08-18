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

