---
layout: post
title: "Adding an Android Floating Action Button to your Xamarin.Forms apps"
categories:
  - Xamarin
tags:
  - Xamarin
  - Xamarin.Forms
  - Android
  - C#
---

Today I'll explain you how to add a **Floating Action Button** from Google's Material Design to a Xamarin.Forms application.

## Adding the button on Android

First, I want to clarify that this **will only be explained for Android**, because, for me, this control fits better to Android navigation paradigmes. On other systems other navigation patterns can be used (like toolbar items, or command bar buttons).

So, we will develop a basic custom renderer that will add a `FloatingActionButton` at the bottom of the area.

First, we start by declaring our shared component in the PCL projet :

```csharp
using System;
using Xamarin.Forms;

public class FloatingButton : View
{
    public FloatingButton()
    {
        this.IsVisible = (Device.OS == TargetPlatform.Android);
    }

    #region Static bindable properties

    /// <summary>
    /// The icon item source.
    /// </summary>
    public static readonly BindableProperty IconSourceProperty = BindableProperty.Create(nameof(IconSource), typeof(ImageSource), typeof(FloatingButton), default(ImageSource), BindingMode.OneWay, null, null, null, null);
    
    /// <summary>
    /// Hides of show the button with an animation.
    /// </summary>
    public static readonly BindableProperty IsHiddenProperty = BindableProperty.Create(nameof(IsHidden), typeof(bool), typeof(FloatingButton), default(bool), BindingMode.OneWay, null, null, null, null);

    /// <summary>
    /// The floating button color.
    /// </summary>
    public static readonly BindableProperty TintColorProperty = BindableProperty.Create(nameof(TintColor), typeof(Color), typeof(FloatingButton), Color.Purple, BindingMode.OneWay, null, null, null, null);

    #endregion

    #region Properties

    /// <summary>
    /// The icon item source.
    /// </summary>
    public ImageSource IconSource
    {
        get
        {
            return (ImageSource)base.GetValue(FloatingButton.IconSourceProperty);
        }
        set
        {
            base.SetValue(FloatingButton.IconSourceProperty, value);
        }
    }

    /// <summary>
    /// Hides of show the button with an animation.
    /// </summary>
    public bool IsHidden
    {
        get
        {
            return (bool)base.GetValue(FloatingButton.IsHiddenProperty);
        }
        set
        {
            base.SetValue(FloatingButton.IsHiddenProperty, value);
        }
    }

    /// <summary>
    /// The floating button color.
    /// </summary>
    public Color TintColor
    {
        get
        {
            return (Color)base.GetValue(FloatingButton.TintColorProperty);
        }
        set
        {
            base.SetValue(FloatingButton.TintColorProperty, value);
        }
    }

    #endregion

    #region Click handler

    /// <summary>
    /// Invoked when the user tapped the floating button.
    /// </summary>
    public event EventHandler Clicked;

    /// <summary>
    /// Triggers the event.
    /// </summary>
    public void Click()
    {
        this.Clicked?.Invoke(this, EventArgs.Empty);
    }

    #endregion
}

```

We've declared three customization properties that can be bound : the tint color of the button, its animated visibility, and its icon image source. There's also an event for intercepting user interractions (we could also have added a Command).

For the renderer, we will use the `Android.Support.Design` library that is luckily already present if you have a recent version of Xamarin.Forms installed.

So, we create a `FloatingActionButton`, place it at the bottom right of the view, and start observing the element properties to update our button accordingly.

```csharp
using System;
using Android.Widget;
using Xamarin.Forms.Platform.Android;
using Xamarin.Forms;
using Project.Droid.Renderers;
using Android.Support.Design.Widget;
using Project.Views.Controls;
using System.ComponentModel;

[assembly: ExportRenderer(typeof(FloatingButton), typeof(FloatingButtonRenderer))]
namespace Project.Droid.Renderers
{
    public class FloatingButtonRenderer : ViewRenderer<FloatingButton, Android.Widget.RelativeLayout>
    {

        private FloatingActionButton fab;

        protected override void OnElementChanged(ElementChangedEventArgs<FloatingButton> e)
        {
            base.OnElementChanged(e);

            if (Control == null)
            {
                var layout = new Android.Widget.RelativeLayout(this.ViewGroup.Context);

                // Creating
                fab = new FloatingActionButton(this.ViewGroup.Context);

                var lay = new Android.Widget.RelativeLayout.LayoutParams(LinearLayout.LayoutParams.WrapContent, LinearLayout.LayoutParams.WrapContent);
                lay.SetMargins(0,0,16,16);
                lay.AddRule(LayoutRules.AlignParentRight);
                lay.AddRule(LayoutRules.AlignParentBottom);
                fab.LayoutParameters = lay;

                UpdateTintColor(Element.TintColor);
                UpdateIcon(Element.IconSource);

                layout.AddView(fab);
                SetNativeControl(layout);
            }
            if (e.OldElement != null)
            {
                fab.Click -= OnClick;
            }
            if (e.NewElement != null)
            {
                fab.Click += OnClick;
            }
        }

        // Updates the FAB icon from Forms source
        private async void UpdateIcon(ImageSource icon)
        {
            if(icon != null)
            {

                IImageSourceHandler handler;

                if (icon is FileImageSource)
                {
                    handler = new FileImageSourceHandler();
                }
                else if (icon is StreamImageSource)
                {
                    handler = new StreamImagesourceHandler(); // sic
                }
                else if (icon is UriImageSource)
                {
                    handler = new ImageLoaderSourceHandler(); // sic
                }
                else
                {
                    throw new NotImplementedException();
                }
                
                var bitmap = await handler.LoadImageAsync(icon, fab.Context);
                fab.SetImageBitmap(bitmap);
            }
            else
            {
                fab.SetImageBitmap(null);
            }
        }

        // Updates the FAB state colors from Forms color
        private void UpdateTintColor(Color color)
        {
            var states = new int[][] {
                    new [] { Android.Resource.Attribute.StateEnabled },
                    new [] { Android.Resource.Attribute.StatePressed },
                };

            var colors = new int[] {
                    color.ToAndroid(),
                    color.WithLuminosity(0.7).ToAndroid(),
                };

            fab.BackgroundTintList = new Android.Content.Res.ColorStateList(states, colors);
        }

        protected override void OnElementPropertyChanged(object sender, PropertyChangedEventArgs e)
        {
            base.OnElementPropertyChanged(sender, e);

            if(e.PropertyName == nameof(FloatingButton.IsHidden))
            {
                if(this.Element.IsHidden && fab.IsShown)
                {
                    fab.Hide();
                }
                else if(!this.Element.IsHidden && !fab.IsShown)
                {
                    fab.Show();
                }
            }
            else if(e.PropertyName == nameof(FloatingButton.TintColor))
            {
                UpdateTintColor(Element.TintColor);
            }
            else if (e.PropertyName == nameof(FloatingButton.IconSource))
            {
                UpdateIcon(Element.IconSource);
            }
        }

        private void OnClick(object sender, EventArgs e)
        {
            this.Element?.Click();
        }
        
    }
}
```

## Hiding the button when scrolling into a ListView

Unfortunately, we can't have the current scrolling state from a ListView. But fortunately, we have `ItemAppearing` and `ItemDisappearing` events. After the first disappearance of an item, it indicates that the user has started scrolling and thats it's not the initial render and that we can observe item appearance to find user's scrolling direction. If he scrolls up we show the button, else we hide it.

Here an example behavior that achieves this :


```csharp
using System.Linq;
using Xamarin.Forms;

/// <summary>
/// A behavior for observing scrolling status of a list view.
/// </summary>
public abstract class ScrollingBehavior : Behavior<ListView>
{
    /// <summary>
    /// Indicates that the first item of the list has disappeared, so the user has started scrolling for first time.
    /// </summary>
    private bool firstItemDisappeared = false;

    /// <summary>
    /// Last appeared list item index.
    /// </summary>
    private int lastIndex = 0;


    protected override void OnAttachedTo(ListView bindable)
    {
        base.OnAttachedTo(bindable);

        bindable.ItemAppearing += OnItemAppearing;
        bindable.ItemDisappearing += OnItemDisappearing;
    }
    
    protected override void OnDetachingFrom(ListView bindable)
    {
        base.OnDetachingFrom(bindable);

        bindable.ItemAppearing -= OnItemAppearing;
        if(!firstItemDisappeared)
        {
            bindable.ItemDisappearing -= OnItemDisappearing;
        }
    }
    
    private void OnItemDisappearing(object sender, ItemVisibilityEventArgs e)
    {
        if (!firstItemDisappeared)
        {
            var lv = sender as ListView;
            lv.ItemDisappearing -= OnItemDisappearing;
            firstItemDisappeared = true;
        }
    }


    private void OnItemAppearing(object sender, ItemVisibilityEventArgs e)
    {
        if (firstItemDisappeared)
        {
            var lv = sender as ListView;

            var index = lv.ItemsSource.Cast<object>().ToList().IndexOf(e.Item);
            this.OnScrolling(index - lastIndex > 0);
            lastIndex = index;
        }
    }

    /// <summary>
    /// Invoked on user scrolling.
    /// </summary>
    /// <param name="down">True if the user scrolls down, true if it is up</param>
    protected abstract void OnScrolling(bool down);
}

/// <summary>
/// Hides a floating button from current list view scrolling status.
/// </summary>
public class FloatingScrollingBehavior : ScrollingBehavior
{
    /// <summary>
    /// The floating button that will be hidden on scroll.
    /// </summary>
    public FloatingButton Button { get; set; }

    protected override void OnScrolling(bool down)
    {
        if (Button != null)
        {
            this.Button.IsHidden = down;
        }
    }
}

```

## Usage

You can now declare your button :

```csharp
var fab = new FloatingButton()
{
    HorizontalOptions = LayoutOptions.End,
    VerticalOptions = LayoutOptions.End,
    TintColor = (Color)App.Current.Resources["BrandAccentColor"],
    IconSource = "icon.png",
    
};
fab.Clicked += OnFabClicked;
listview.Behaviors.Add(new FloatingScrollingBehavior() { Button = fab });
```

## Conclusion

Wow, lot of code today, but its a good beginning for understanding custom renderers and behaviors! And we solved the ListView scrolling state issue whithout the need of a custom renderer.

I'll post this component to NuGet with more customization properties soon.