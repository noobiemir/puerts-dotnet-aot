using System.ComponentModel;
using System.Diagnostics;

namespace PuertsTest;

public enum MyEnum
{
    E1,
    E2
}

public delegate void MyCallback(string msg);

public class BaseClass
{
    public static void BSFunc()
    {
        Console.WriteLine("BaseClass Static Func, BSF = " + BSF);
    }

    public static int BSF = 1;

    public void BMFunc()
    {
        Console.WriteLine("BaseClass Member Func, BMF = " + BMF);
    }

    public int BMF { get; set; }
}

public class DerivedClass : BaseClass
{
    public static void DSFunc()
    {
        Console.WriteLine("DerivedClass Static Func, DSF = " + DSF);
    }

    public static int DSF = 2;

    public void DMFunc()
    {
        Console.WriteLine("DerivedClass Member Func, DMF = " + DMF);
    }

    public MyEnum DMFunc(MyEnum myEnum)
    {
        Console.WriteLine("DMFunc(MyEnum myEnum), myEnum = " + myEnum);
        return MyEnum.E2;
    }

    public int DMF { get; set; }

    public MyCallback? MyCallback;

    public event MyCallback? MyEvent;

    public static event MyCallback? MyStaticEvent;

    public void Trigger()
    {
        Console.WriteLine("begin Trigger");
        MyCallback?.Invoke("hello");
        MyEvent?.Invoke("john");
        MyStaticEvent?.Invoke("static event");
        Console.WriteLine("end Trigger");
    }

    public int ParamsFunc(int a, params string[] b)
    {
        Console.WriteLine("ParamsFunc.a = " + a);
        for (int i = 0; i < b.Length; i++)
        {
            Console.WriteLine("ParamsFunc.b[" + i + "] = " + b[i]);
        }
        return a + b.Length;
    }

    public double InOutArgFunc(int a, out int b, ref int c)
    {
        Console.WriteLine("a=" + a + ",c=" + c);
        b = 100;
        c = c * 2;
        return a + b;
    }

    public void PrintList(List<int> lst)
    {
        Console.WriteLine("lst.Count=" + lst.Count);
        for (int i = 0; i < lst.Count; i++)
        {
            Console.WriteLine(string.Format("lst[{0}]={1}", i, lst[i]));
        }
    }

    public Puerts.ArrayBuffer GetAb(int size)
    {
        byte[] bytes = new byte[size];
        for (int i = 0; i < size; i++)
        {
            bytes[i] = (byte)(i + 10);
        }
        return new Puerts.ArrayBuffer(bytes);
    }

    public int SumOfAb(Puerts.ArrayBuffer ab)
    {
        int sum = 0;
        foreach (var b in ab.Bytes)
        {
            sum += b;
        }
        return sum;
    }

    public async Task<int> GetFileLength(string path)
    {
        Console.WriteLine("start read " + path);
        using StreamReader reader = new StreamReader(path);
        string s = await reader.ReadToEndAsync();
        Console.WriteLine("read " + path + " completed");
        return s.Length;
    }
}

public class BaseClass1
{

}

public class DerivedClass1 : BaseClass1
{
}

public static class BaseClassExtension
{
    public static void PlainExtension(this BaseClass a)
    {
        Console.WriteLine("PlainExtension");
    }

    public static T Extension1<T>(this T a) where T : BaseClass
    {
        Console.WriteLine($"Extension1<{typeof(T)}>");
        return a;
    }

    public static T Extension2<T>(this T a, string b) where T : BaseClass
    {
        Console.WriteLine($"Extension2<{typeof(T)}>, {b}");
        return a;
    }

    public static void Extension2<T1, T2>(this T1 a, T2 b) where T1 : BaseClass where T2 : BaseClass1
    {
        Console.WriteLine($"Extension2<{typeof(T1)},{typeof(T2)}>");
    }
}