---
layout: post
lang: fr
title: "Ajouter un Android Floating Action Button à votre app Xamarin.Forms"
image: images/post_fab.png
categories:
  - Xamarin
tags:
  - Xamarin
  - Xamarin.Forms
  - Android
  - C#
---

Aujourd'hui je vais vous expliquer comment ajouter un **Floating Action Button** adapté au Material Design de Google dans vos applications Xamarin.Forms.

## Ajouter le bouton sur Android

Pour être clair, cet article sera **dédié à Android uniquement**, car, pour moin ce contrôle est plutôt adapté aux paradigmes de navigation Android. Sur les autres systèmes d'autres moyens existent (toolbars, command bars), mais des librairies tierces iOS sont eventuellement intégrables.

Nous allons donc développer un *custom renderer* qui va ajouter un `FloatingActionButton` dans la zone basse de l'écran.

Commencons par déclarer notre composant partagé au sein du projet de PCL :

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

Nous avons déclaré trois propriétés de customisation qui pourrons être branchées : la teinte du bouton, une visibilité avec animation, et la source de l'icone du bouton. Nous aurrons également un événement pour intercepter les interractions utilisateur (une commande pourrait également être ajoutée).

Pour le renderer, nous allons utiliser la librairie de support `Android.Support.Design` qui est heuresement déjà intégré si vous avez une version récente de Xamarin.Forms d'installée.

Alors, nous allons créer sur Android le `FloatingActionButton`, le placer en bas a droite de la vue et commencer à observer les propriétés de l'élément natif pour mettre à jour notre bouton en conséquence.

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

## Cacher le bouton lors d'un scroll d'une ListView

Nous avons hélas pas la possibilité d'avoir la possition actuelle de scroll dans une ListView, mais nous avons deux évenements `ItemAppearing` and `ItemDisappearing` qui vont nous aider. Après la première disparition d'un élément, l'utilisateur à commencé à scroller et que ce n'est pas des création de cellules pour l'état initial : nous pouvons donc commencer a observer les création et disparition de cellules pour en déduire le sens de navigation. Si l'utilisateur scroll vers le haut nous cacherons le bouton, sinon nous le ferons réapparaître.

Voici un behavior à cet effet :

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

## Utilisation

Nous pouvons donc désormais utiliser notre bouton depuis nos pages :

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

Wow, beaucoup de code aujourd'hui, mais c'est une bonne introduction aux custom renderers et aux behaviors. Nous avons également résolu la problématique de détection de scroll, sans la nécessité d'un custom renderer.

Je posterai probablement un composant sur NuGet sous peu avec plus de propriétés de personnalisation.