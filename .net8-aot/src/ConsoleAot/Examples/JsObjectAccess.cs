using Puerts;

namespace ConsoleAot.Examples;

internal static class JsObjectAccess
{
    public static void Run(JsEnv jsEnv)
    {
        jsEnv.Eval(@"
                let obj = new CS.ConsoleAot.Examples.JsObjectTest();
                let jsObj = {'c': 100};
                obj.Setter = (path, value) => {
                    let tmp = jsObj;
                    let nodes = path.split('.');
                    let lastNode = nodes.pop();
                    nodes.forEach(n => {
                        if (typeof tmp[n] === 'undefined') tmp[n] = {};
                        tmp = tmp[n];
                    });
                    tmp[lastNode] = value;
                }

                obj.Getter = (path) => {
                    let tmp = jsObj;
                    let nodes = path.split('.');
                    let lastNode = nodes.pop();
                    nodes.forEach(n => {
                        if (typeof tmp != 'undefined') tmp = tmp[n];
                    });
                    return tmp[lastNode];
                }
                obj.SetSomeData();
                obj.GetSomeData();
                console.log(JSON.stringify(jsObj));

                const a = {a: 1};
                obj.storeJSObject(a);
                console.log(obj.getStoredJSObject() == a)
            ");
    }
}

public class JsObjectTest
{
    public GenericDelegate Getter;

    public GenericDelegate Setter;

    public void SetSomeData()
    {
        Setter.Action("a", 1);
        Setter.Action("b.a", 1.1);
    }

    public void GetSomeData()
    {
        Console.WriteLine(Getter.Func<string, int>("a"));
        Console.WriteLine(Getter.Func<string, double>("b.a"));
        Console.WriteLine(Getter.Func<string, int>("c"));
    }

    private JSObject obj;
    public void storeJSObject(JSObject jsobj)
    {
        obj = jsobj;
    }

    public JSObject getStoredJSObject()
    {
        return obj;
    }
}