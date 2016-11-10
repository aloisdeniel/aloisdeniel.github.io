using Android.App;
using Android.Widget;
using Android.OS;
using NLog;
using NLog.Config;
using System.Xml;

namespace NLogSample.Droid
{
	[Activity(Label = "NLogSample", MainLauncher = true)]
	public class MainActivity : Activity
	{
		private void InitializeLog()
		{
			var assembly = this.GetType().Assembly;
			var name = assembly.GetName().Name;
			var location = $"{name}.NLog.config";
			var stream = assembly.GetManifestResourceStream(location);
			LogManager.Configuration = new XmlLoggingConfiguration(XmlTextReader.Create(stream), null);
		}

		protected override void OnCreate(Bundle savedInstanceState)
		{
			this.InitializeLog();

			base.OnCreate(savedInstanceState);

			// Set our view from the "main" layout resource
			SetContentView(Resource.Layout.Main);
		}
	}
}