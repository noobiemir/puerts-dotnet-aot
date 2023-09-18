using ConsoleAot;
using Puerts;
using System.Diagnostics.CodeAnalysis;
using ConsoleAot.Examples;
using PuertsTest;

#pragma warning disable IL2026
#pragma warning disable IL2111

[Configure]
public class WrapperGenConfig
{
    private static readonly List<Type> BindingTypes = new();

    static WrapperGenConfig()
    {
        AddBindingTypes(typeof(Delegate));
        AddBindingTypes(typeof(object));
        AddBindingTypes(typeof(ValueType));
        AddBindingTypes(typeof(System.Reflection.MemberInfo));
        AddBindingTypes(typeof(System.Reflection.MethodInfo));
        AddBindingTypes(typeof(System.Reflection.TypeInfo));
        AddBindingTypes(typeof(Type));
        AddBindingTypes(typeof(Console));
        AddBindingTypes(typeof(System.Collections.IEnumerable));
        AddBindingTypes(typeof(Dictionary<int, string>));
        AddBindingTypes(typeof(Dictionary<int, int>));
        AddBindingTypes(typeof(List<int>));
        AddBindingTypes(typeof(List<string>));

        AddBindingTypes(typeof(FloatValue));
        AddBindingTypes(typeof(Int64Value));

        AddBindingTypes(typeof(ScriptLoader));

        AddBindingTypes(typeof(CsObject));
        AddBindingTypes(typeof(CsCallJsTestClass));

        AddBindingTypes(typeof(MyEnum));
        AddBindingTypes(typeof(BaseClass));
        AddBindingTypes(typeof(DerivedClass));
        AddBindingTypes(typeof(BaseClassExtension));
        AddBindingTypes(typeof(BaseClass1));
        AddBindingTypes(typeof(DerivedClass1));

        AddBindingTypes(typeof(JsObjectTest));
    }

    private static void AddBindingTypes([DynamicallyAccessedMembers(DynamicallyAccessedMemberTypes.All)] Type type)
    {
        BindingTypes.Add(type);
    }

    [Binding] private static IEnumerable<Type> Bindings => BindingTypes;
}