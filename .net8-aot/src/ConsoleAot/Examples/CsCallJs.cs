using Puerts;

namespace ConsoleAot.Examples;

internal static class CsCallJs
{
    public static void Run(JsEnv jsEnv)
    {
        jsEnv.UsingFunc<CsObject, int>();
        jsEnv.Eval(@"
                const o =  CS.ConsoleAot.Examples.CsCallJsTestClass.Instance;

                function csFunc(csObject) {
                  console.log(csObject.Name)
                  console.log(csObject.Name.length)
                  return csObject.Name.length
                }
                o.Func = csFunc;
            ");
        Console.WriteLine($"Call Js func and return: {CsCallJsTestClass.Instance.Func?.Invoke(new CsObject { Name = "CsObject From C#" })}");
        Console.WriteLine($"Call Js func and return: {CsCallJsTestClass.Instance.Func?.Invoke(new CsObject { Name = "CsObject From C# ... ..." })}");
    }
}

public class CsObject
{
    public string Name { get; set; }
}

public class CsCallJsTestClass
{
    public static readonly CsCallJsTestClass Instance = new();

    public Func<CsObject, int> Func;
}