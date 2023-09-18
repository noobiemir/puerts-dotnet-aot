using Puerts;

namespace ConsoleAot.Examples;

internal static class TsQuickStart
{
    public static void Run(JsEnv jsEnv)
    {
        jsEnv.ExecuteModule("Quickstart.mjs");
    }
}