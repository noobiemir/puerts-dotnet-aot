using ConsoleAot;

Puerts.Editor.Generator.FileExporter.ExportWrapper(
    ScriptLoader.PathToBinDir("../../../../ConsoleAot/StaticWrapper/"),
    new ScriptLoader()
);
Puerts.Editor.Generator.FileExporter.GenRegisterInfo(
    ScriptLoader.PathToBinDir("../../../../ConsoleAot/StaticWrapper/"),
    new ScriptLoader()
);

var tsDir = ScriptLoader.PathToBinDir("../../../../TsProj/");
if (!Directory.Exists(tsDir + "Typing/csharp/"))
{
    Directory.CreateDirectory(tsDir + "Typing/csharp/");
}

Puerts.Editor.Generator.FileExporter.ExportDTS(
    tsDir,
    new ScriptLoader()
);