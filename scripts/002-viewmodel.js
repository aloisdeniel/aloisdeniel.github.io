/* View model*/

var context = {
email: "alois.deniel@outlook.com",
hobbies: [
      {
            title: "Sport",
            activities: ["Badminton", "Tennis"]
      },
      {
            title: "Art",
            activities: ["Guitar", "Digital design", "Drawing", "Pixel"]
      },
      {
            title: "Travels",
            activities: ["Turkey", "Corsica", "Crete", "Swiss", "Italy"]
      }
],
opensource:[
  {
        title: "Global",
        projects: [
            {
                  title: "cheatsheets",
                  link: "https://github.com/aloisdeniel/cheatsheets"
            }
        ]
 },
  {
        title: "node.js",
        projects: [
            {
                  title: "Mobile Localization",
                  link: "https://github.com/aloisdeniel/mobile-localization"
            },
            {
                  title: "t-rest",
                  link: "https://github.com/aloisdeniel/t-rest"
            },
            {
                  title: "code-cards",
                  link: "https://github.com/aloisdeniel/code-cards"
            }
        ]
 },
 {
        title: "C#",
        projects: [
            {
                  title: "CommonExtensions",
                  link: "https://github.com/aloisdeniel/CommonExtensions"
            },
            {
                  title: "Xamarin.Animtations",
                  link: "https://github.com/aloisdeniel/Xamarin.Animations"
            }
        ]
 },
 {
        title: "Lua",
        projects: [
            {
                  title: "pixel-map",
                  link: "https://github.com/aloisdeniel/love-pixelmap"
            },
            {
                  title: "pixel-atlas",
                  link: "https://github.com/aloisdeniel/love-pixelatlas"
            },
            {
                  title: "chain",
                  link: "https://github.com/aloisdeniel/chain.lua"
            },
            {
                  title: "delay",
                  link: "https://github.com/aloisdeniel/delay.lua"
            },
            {
                  title: "ldoc-styles",
                  link: "https://github.com/aloisdeniel/ldoc-styles"
            }
        ]
 }
],
competences: [
      [
            {
                  title: "xamarin",
                  description: "Blah blah blah",
                  type: "primary",
                  logo: "logo_xamarin.png",
                  tools: ["Visual Studio","Xamarin Studio", "C#", "UITests"],
                  circles: [1,1,1,1]
            },
            {
                  title: "windows platform",
                  description: "Blah blah blah",
                  type: "primary",
                  logo: "logo_windows.png",
                  tools: ["Visual Studio","WinRT", "C#", "XAML"],
                  circles: [1,1,1,1]
            },
            {
                  title: "ios",
                  description: "Blah blah blah",
                  type: "primary",
                  logo: "logo_apple.png",
                  tools: [ "Objective-C", "Swift 2", "XCode","CocoaPods"],
                  circles: [1,1,1,0]
            }
      ],
      [
            {
                  title: "node.js",
                  description: "Blah blah blah \n blah blah",
                  type: "secondary",
                  logo: "logo_nodejs.png",
                  tools: ["js", "npm", "express.js", "koa.js"],
                  circles: [1,1,0,0]
            },
            {
                  title: "design",
                  description: "Blah blah blah",
                  type: "secondary",
                  logo: "logo_ps.png",
                  tools: ["Photoshop"],
                  circles: [1,1,0,0]
            },
            {
                  title: "android",
                  description: "Blah blah blah",
                  type: "secondary",
                  logo: "logo_android.png",
                  tools: ["Android Studio","Gradle"],
                  circles: [1,1,0,0]
            }
      ]
      ]
};