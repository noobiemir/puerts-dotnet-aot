using Puerts;

namespace ConsoleAot;

internal class ScriptLoader : IResolvableLoader, ILoader, IModuleChecker
{
    public static string PathToBinDir(string appendix)
    {
        return Path.GetFullPath(Path.Combine(Path.GetDirectoryName(AppDomain.CurrentDomain.BaseDirectory)!, appendix));
    }

    private readonly List<string> _paths = new List<string>();

    public ScriptLoader()
    {
        _paths.Add(PathToBinDir("../../../../../../unity/Assets/core/upm/Runtime/Resources"));
        _paths.Add(PathToBinDir("../../../../../../../../unity/Assets/core/upm/Runtime/Resources"));
        _paths.Add(PathToBinDir("../../../../../../unity/Assets/core/upm/Editor/Resources"));
        _paths.Add(PathToBinDir("./Scripts"));
    }

    private string? TryResolve(string specifier)
    {
        foreach (var folder in _paths)
        {
            var path = Path.Combine(folder, specifier);
            if (File.Exists(path))
            {
                return path.Replace("\\", "/");
            }
        }

        return null;
    }

#pragma warning disable CS8766
    public string? Resolve(string specifier, string referrer)
#pragma warning restore CS8766
    {
        if (PathHelper.IsRelative(specifier))
        {
            specifier = PathHelper.normalize(PathHelper.Dirname(referrer) + "/" + specifier);
        }

        var specifier1 = TryResolve(specifier) ?? TryResolve(specifier + "/index.js");
        return specifier1 ?? null;
    }

    public bool FileExists(string filepath)
    {
        var res = !string.IsNullOrEmpty(Resolve(filepath, "."));
        return res;
    }

    public string ReadFile(string filepath, out string debugPath)
    {
        debugPath = string.Empty;
        foreach (var path in _paths.Select(folder => Path.Combine(folder, filepath)).Where(File.Exists))
        {
            debugPath = path;
            using StreamReader reader = new StreamReader(debugPath);
            return reader.ReadToEnd();
        }

        return null;
    }

    public bool IsESM(string filepath)
    {
        return !filepath.EndsWith(".cjs");
    }
}