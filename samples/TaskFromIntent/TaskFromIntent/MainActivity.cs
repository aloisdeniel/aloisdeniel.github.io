using Android.App;
using Android.Widget;
using Android.OS;
using System.Threading.Tasks;
using System;
using Android.Content;
using Android.Graphics;
using Android.Graphics.Drawables;
using Android.Views;

namespace TaskFromIntent
{
	[Activity(Label = "TaskFromIntent", MainLauncher = true)]
	public class MainActivity : Activity
	{
		protected override void OnCreate(Bundle savedInstanceState)
		{
			base.OnCreate(savedInstanceState);

			this.button = new Button(this) { Text = "Pick" };
			this.label = new TextView(this);

			var layoutParams = new ViewGroup.LayoutParams(200,100);

			button.LayoutParameters = layoutParams;
			label.LayoutParameters = layoutParams;

			button.Click += OnButtonClick;

			var layout = new LinearLayout(this);
			layout.AddView(label);
			layout.AddView(button);
			this.SetContentView(layout);
		}

		#region Usage

		private Button button;

		private TextView label;

		private async void OnButtonClick(object sender, EventArgs e)
		{
			try
			{
				var file = await this.PickImageAsync();

				this.label.Text = file.Path;

				using (var stream = this.ContentResolver.OpenInputStream(file))
				{
					var drawable = Drawable.CreateFromStream(stream, file.ToString());
					this.button.Background = drawable;
				}
			}
			catch (Exception ex)
			{
				this.label.Text = ex.Message;	
			}
		}

		#endregion

		#region Task asynchronous pattern

		private TaskCompletionSource<Android.Net.Uri> source;

		public Task<Android.Net.Uri> PickImageAsync()
		{
			if (this.source != null && !this.source.Task.IsFaulted && !this.source.Task.IsCanceled)
				return this.source.Task;

			this.source = new TaskCompletionSource<Android.Net.Uri>();
			var task = this.source.Task;

			try
			{
				var imageIntent = new Intent();
				imageIntent.SetType("image/*");
				imageIntent.SetAction(Intent.ActionGetContent);
				var i = Intent.CreateChooser(imageIntent, "Select a photo");
				StartActivityForResult(i, 0);
			}
			catch (Exception e)
			{
				this.source.SetException(e);
				this.source = null;
			}

			return task;
		}

		protected override void OnActivityResult(int requestCode, Result resultCode, Intent data)
		{
			base.OnActivityResult(requestCode, resultCode, data);

			switch (requestCode)
			{
				case 0:
					if (resultCode == Result.Ok && data?.Data != null)
					{
						this.source.SetResult(data.Data);
					}
					else if (resultCode == Result.Canceled)
					{
						this.source.SetCanceled();
					}
					else
					{
						this.source.SetException(new Exception("Failed to get a file"));
					}

					this.source = null;

					break;
			}
		}

		#endregion
	}
}


