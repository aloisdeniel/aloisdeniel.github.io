using Xamarin.Forms;

namespace CustomMaps
{
	public partial class App : Application
	{
		public App()
		{
			InitializeComponent();

			MainPage = new ContentPage()
			{
				Content = new CustomMap()
			};
		}

		protected override void OnStart()
		{
			// Handle when your app starts
		}

		protected override void OnSleep()
		{
			// Handle when your app sleeps
		}

		protected override void OnResume()
		{
			// Handle when your app resumes
		}
	}
}

