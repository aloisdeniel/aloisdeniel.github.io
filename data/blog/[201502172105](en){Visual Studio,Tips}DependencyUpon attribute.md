# DependentUpon file attribute

Have you ever wondered how exactly are defined the "*dependent*" files in a Visual Studio project ? You know ... like the code-behind of a XAML page.

If you edit a `.csproj` file that contains dependent files with a text editor, you will quickly see this kind of definition :

	<Compile Include="MainPage.xaml.cs">
      <DependentUpon>MainPage.xaml</DependentUpon>
    </Compile>

The `MainPage.xaml.cs` file is now dependent upon the `MainPage.xaml` file and in the solution explorer of Visual Studio the two files are *linked*.

![](/images/dependentupon.png)

What if we can define our own dependent files ? It can really help us organize our projects. It works great for generated partial classes, but you can imagine other alternatives like associating different implementations to an interface.

Even if there's no possibility to declare a **DependentUpon** attribute in Visual Studio, you could either edit your `.csproj file` to add the attribute or use an extension like [File Nesting Extension](https://visualstudiogallery.msdn.microsoft.com/3ebde8fb-26d8-4374-a0eb-1e4e2665070c).


