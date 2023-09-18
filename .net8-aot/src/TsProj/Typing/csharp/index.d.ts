
    declare namespace CS {
    //keep type incompatibility / 此属性保持类型不兼容
    const __keep_incompatibility: unique symbol;
    interface $Ref<T> {
        value: T
    }
    namespace System {
        interface Array$1<T> extends System.Array {
            get_Item(index: number):T;
            set_Item(index: number, value: T):void;
        }
    }
    interface $Task<T> {}
    namespace System {
        class Object
        {
            protected [__keep_incompatibility]: never;
            public GetType () : System.Type
            public ToString () : string
            public Equals ($obj: any) : boolean
            public static Equals ($objA: any, $objB: any) : boolean
            public static ReferenceEquals ($objA: any, $objB: any) : boolean
            public GetHashCode () : number
            public constructor ()
        }
        class Delegate extends System.Object implements System.ICloneable, System.Runtime.Serialization.ISerializable
        {
            protected [__keep_incompatibility]: never;
            public get Target(): any;
            public get Method(): System.Reflection.MethodInfo;
            public static CreateDelegate ($type: System.Type, $target: any, $method: string, $ignoreCase: boolean, $throwOnBindFailure: boolean) : Function
            public static CreateDelegate ($type: System.Type, $target: System.Type, $method: string, $ignoreCase: boolean, $throwOnBindFailure: boolean) : Function
            public static CreateDelegate ($type: System.Type, $method: System.Reflection.MethodInfo, $throwOnBindFailure: boolean) : Function
            public static CreateDelegate ($type: System.Type, $firstArgument: any, $method: System.Reflection.MethodInfo, $throwOnBindFailure: boolean) : Function
            public Clone () : any
            public static Combine ($a: Function, $b: Function) : Function
            public static Combine (...delegates: Function[]) : Function
            public static CreateDelegate ($type: System.Type, $firstArgument: any, $method: System.Reflection.MethodInfo) : Function
            public static CreateDelegate ($type: System.Type, $method: System.Reflection.MethodInfo) : Function
            public static CreateDelegate ($type: System.Type, $target: any, $method: string) : Function
            public static CreateDelegate ($type: System.Type, $target: any, $method: string, $ignoreCase: boolean) : Function
            public static CreateDelegate ($type: System.Type, $target: System.Type, $method: string) : Function
            public static CreateDelegate ($type: System.Type, $target: System.Type, $method: string, $ignoreCase: boolean) : Function
            public GetInvocationList () : System.Array$1<Function>
            public DynamicInvoke (...args: any[]) : any
            public static Remove ($source: Function, $value: Function) : Function
            public static RemoveAll ($source: Function, $value: Function) : Function
            public static op_Equality ($d1: Function, $d2: Function) : boolean
            public static op_Inequality ($d1: Function, $d2: Function) : boolean
        }
        interface ICloneable
        {
        }
        class ValueType extends System.Object
        {
            protected [__keep_incompatibility]: never;
        }
        class Boolean extends System.ValueType implements System.IComparable, System.IConvertible, System.IComparable$1<boolean>, System.IEquatable$1<boolean>, System.ISpanParsable$1<boolean>, System.IParsable$1<boolean>
        {
            protected [__keep_incompatibility]: never;
        }
        interface IComparable
        {
        }
        interface IConvertible
        {
        }
        interface IComparable$1<T>
        {
        }
        interface IEquatable$1<T>
        {
        }
        interface ISpanParsable$1<TSelf> extends System.IParsable$1<TSelf>
        {
        }
        interface IParsable$1<TSelf>
        {
        }
        class Int32 extends System.ValueType implements System.IComparable, System.IConvertible, System.ISpanFormattable, System.IFormattable, System.IComparable$1<number>, System.IEquatable$1<number>, System.Numerics.IBinaryInteger$1<number>, System.Numerics.IBinaryNumber$1<number>, System.Numerics.IBitwiseOperators$3<number, number, number>, System.Numerics.INumber$1<number>, System.Numerics.IComparisonOperators$3<number, number, boolean>, System.Numerics.IEqualityOperators$3<number, number, boolean>, System.Numerics.IModulusOperators$3<number, number, number>, System.Numerics.INumberBase$1<number>, System.Numerics.IAdditionOperators$3<number, number, number>, System.Numerics.IAdditiveIdentity$2<number, number>, System.Numerics.IDecrementOperators$1<number>, System.Numerics.IDivisionOperators$3<number, number, number>, System.Numerics.IIncrementOperators$1<number>, System.Numerics.IMultiplicativeIdentity$2<number, number>, System.Numerics.IMultiplyOperators$3<number, number, number>, System.ISpanParsable$1<number>, System.IParsable$1<number>, System.Numerics.ISubtractionOperators$3<number, number, number>, System.Numerics.IUnaryPlusOperators$2<number, number>, System.Numerics.IUnaryNegationOperators$2<number, number>, System.IUtf8SpanParsable$1<number>, System.Numerics.IShiftOperators$3<number, number, number>, System.Numerics.IMinMaxValue$1<number>, System.Numerics.ISignedNumber$1<number>, System.IUtf8SpanFormattable, System.IBinaryIntegerParseAndFormatInfo$1<number>
        {
            protected [__keep_incompatibility]: never;
        }
        interface ISpanFormattable extends System.IFormattable
        {
        }
        interface IFormattable
        {
        }
        interface IUtf8SpanParsable$1<TSelf>
        {
        }
        interface IUtf8SpanFormattable
        {
        }
        interface IBinaryIntegerParseAndFormatInfo$1<TSelf> extends System.Numerics.IBinaryInteger$1<TSelf>, System.Numerics.IBinaryNumber$1<TSelf>, System.Numerics.IBitwiseOperators$3<TSelf, TSelf, TSelf>, System.Numerics.INumber$1<TSelf>, System.IComparable, System.IComparable$1<TSelf>, System.Numerics.IComparisonOperators$3<TSelf, TSelf, boolean>, System.Numerics.IEqualityOperators$3<TSelf, TSelf, boolean>, System.Numerics.IModulusOperators$3<TSelf, TSelf, TSelf>, System.Numerics.INumberBase$1<TSelf>, System.Numerics.IAdditionOperators$3<TSelf, TSelf, TSelf>, System.Numerics.IAdditiveIdentity$2<TSelf, TSelf>, System.Numerics.IDecrementOperators$1<TSelf>, System.Numerics.IDivisionOperators$3<TSelf, TSelf, TSelf>, System.IEquatable$1<TSelf>, System.Numerics.IIncrementOperators$1<TSelf>, System.Numerics.IMultiplicativeIdentity$2<TSelf, TSelf>, System.Numerics.IMultiplyOperators$3<TSelf, TSelf, TSelf>, System.ISpanFormattable, System.IFormattable, System.ISpanParsable$1<TSelf>, System.IParsable$1<TSelf>, System.Numerics.ISubtractionOperators$3<TSelf, TSelf, TSelf>, System.Numerics.IUnaryPlusOperators$2<TSelf, TSelf>, System.Numerics.IUnaryNegationOperators$2<TSelf, TSelf>, System.IUtf8SpanParsable$1<TSelf>, System.Numerics.IShiftOperators$3<TSelf, number, TSelf>, System.Numerics.IMinMaxValue$1<TSelf>
        {
        }
        class Type extends System.Reflection.MemberInfo implements System.Reflection.ICustomAttributeProvider, System.Reflection.IReflect
        {
            protected [__keep_incompatibility]: never;
            public static Delimiter : number
            public static EmptyTypes : System.Array$1<System.Type>
            public static Missing : any
            public static FilterAttribute : System.Reflection.MemberFilter
            public static FilterName : System.Reflection.MemberFilter
            public static FilterNameIgnoreCase : System.Reflection.MemberFilter
            public get IsInterface(): boolean;
            public get MemberType(): System.Reflection.MemberTypes;
            public get Namespace(): string;
            public get AssemblyQualifiedName(): string;
            public get FullName(): string;
            public get Assembly(): System.Reflection.Assembly;
            public get Module(): System.Reflection.Module;
            public get IsNested(): boolean;
            public get DeclaringType(): System.Type;
            public get DeclaringMethod(): System.Reflection.MethodBase;
            public get ReflectedType(): System.Type;
            public get UnderlyingSystemType(): System.Type;
            public get IsTypeDefinition(): boolean;
            public get IsArray(): boolean;
            public get IsByRef(): boolean;
            public get IsPointer(): boolean;
            public get IsConstructedGenericType(): boolean;
            public get IsGenericParameter(): boolean;
            public get IsGenericTypeParameter(): boolean;
            public get IsGenericMethodParameter(): boolean;
            public get IsGenericType(): boolean;
            public get IsGenericTypeDefinition(): boolean;
            public get IsSZArray(): boolean;
            public get IsVariableBoundArray(): boolean;
            public get IsByRefLike(): boolean;
            public get IsFunctionPointer(): boolean;
            public get IsUnmanagedFunctionPointer(): boolean;
            public get HasElementType(): boolean;
            public get GenericTypeArguments(): System.Array$1<System.Type>;
            public get GenericParameterPosition(): number;
            public get GenericParameterAttributes(): System.Reflection.GenericParameterAttributes;
            public get Attributes(): System.Reflection.TypeAttributes;
            public get IsAbstract(): boolean;
            public get IsImport(): boolean;
            public get IsSealed(): boolean;
            public get IsSpecialName(): boolean;
            public get IsClass(): boolean;
            public get IsNestedAssembly(): boolean;
            public get IsNestedFamANDAssem(): boolean;
            public get IsNestedFamily(): boolean;
            public get IsNestedFamORAssem(): boolean;
            public get IsNestedPrivate(): boolean;
            public get IsNestedPublic(): boolean;
            public get IsNotPublic(): boolean;
            public get IsPublic(): boolean;
            public get IsAutoLayout(): boolean;
            public get IsExplicitLayout(): boolean;
            public get IsLayoutSequential(): boolean;
            public get IsAnsiClass(): boolean;
            public get IsAutoClass(): boolean;
            public get IsUnicodeClass(): boolean;
            public get IsCOMObject(): boolean;
            public get IsContextful(): boolean;
            public get IsEnum(): boolean;
            public get IsMarshalByRef(): boolean;
            public get IsPrimitive(): boolean;
            public get IsValueType(): boolean;
            public get IsSignatureType(): boolean;
            public get IsSecurityCritical(): boolean;
            public get IsSecuritySafeCritical(): boolean;
            public get IsSecurityTransparent(): boolean;
            public get StructLayoutAttribute(): System.Runtime.InteropServices.StructLayoutAttribute;
            public get TypeInitializer(): System.Reflection.ConstructorInfo;
            public get TypeHandle(): System.RuntimeTypeHandle;
            public get GUID(): System.Guid;
            public get BaseType(): System.Type;
            public static get DefaultBinder(): System.Reflection.Binder;
            public get ContainsGenericParameters(): boolean;
            public get IsVisible(): boolean;
            public static GetType ($typeName: string, $throwOnError: boolean, $ignoreCase: boolean) : System.Type
            public static GetType ($typeName: string, $throwOnError: boolean) : System.Type
            public static GetType ($typeName: string) : System.Type
            public static GetType ($typeName: string, $assemblyResolver: System.Func$2<System.Reflection.AssemblyName, System.Reflection.Assembly>, $typeResolver: System.Func$4<System.Reflection.Assembly, string, boolean, System.Type>) : System.Type
            public static GetType ($typeName: string, $assemblyResolver: System.Func$2<System.Reflection.AssemblyName, System.Reflection.Assembly>, $typeResolver: System.Func$4<System.Reflection.Assembly, string, boolean, System.Type>, $throwOnError: boolean) : System.Type
            public static GetType ($typeName: string, $assemblyResolver: System.Func$2<System.Reflection.AssemblyName, System.Reflection.Assembly>, $typeResolver: System.Func$4<System.Reflection.Assembly, string, boolean, System.Type>, $throwOnError: boolean, $ignoreCase: boolean) : System.Type
            public static GetTypeFromHandle ($handle: System.RuntimeTypeHandle) : System.Type
            public GetType () : System.Type
            public GetElementType () : System.Type
            public GetArrayRank () : number
            public GetGenericTypeDefinition () : System.Type
            public GetGenericArguments () : System.Array$1<System.Type>
            public GetOptionalCustomModifiers () : System.Array$1<System.Type>
            public GetRequiredCustomModifiers () : System.Array$1<System.Type>
            public GetGenericParameterConstraints () : System.Array$1<System.Type>
            public IsAssignableTo ($targetType: System.Type) : boolean
            public GetConstructor ($types: System.Array$1<System.Type>) : System.Reflection.ConstructorInfo
            public GetConstructor ($bindingAttr: System.Reflection.BindingFlags, $types: System.Array$1<System.Type>) : System.Reflection.ConstructorInfo
            public GetConstructor ($bindingAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $types: System.Array$1<System.Type>, $modifiers: System.Array$1<System.Reflection.ParameterModifier>) : System.Reflection.ConstructorInfo
            public GetConstructor ($bindingAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $callConvention: System.Reflection.CallingConventions, $types: System.Array$1<System.Type>, $modifiers: System.Array$1<System.Reflection.ParameterModifier>) : System.Reflection.ConstructorInfo
            public GetConstructors () : System.Array$1<System.Reflection.ConstructorInfo>
            public GetConstructors ($bindingAttr: System.Reflection.BindingFlags) : System.Array$1<System.Reflection.ConstructorInfo>
            public GetEvent ($name: string) : System.Reflection.EventInfo
            public GetEvent ($name: string, $bindingAttr: System.Reflection.BindingFlags) : System.Reflection.EventInfo
            public GetEvents () : System.Array$1<System.Reflection.EventInfo>
            public GetEvents ($bindingAttr: System.Reflection.BindingFlags) : System.Array$1<System.Reflection.EventInfo>
            public GetField ($name: string) : System.Reflection.FieldInfo
            public GetField ($name: string, $bindingAttr: System.Reflection.BindingFlags) : System.Reflection.FieldInfo
            public GetFields () : System.Array$1<System.Reflection.FieldInfo>
            public GetFields ($bindingAttr: System.Reflection.BindingFlags) : System.Array$1<System.Reflection.FieldInfo>
            public GetFunctionPointerCallingConventions () : System.Array$1<System.Type>
            public GetFunctionPointerReturnType () : System.Type
            public GetFunctionPointerParameterTypes () : System.Array$1<System.Type>
            public GetMember ($name: string) : System.Array$1<System.Reflection.MemberInfo>
            public GetMember ($name: string, $bindingAttr: System.Reflection.BindingFlags) : System.Array$1<System.Reflection.MemberInfo>
            public GetMember ($name: string, $type: System.Reflection.MemberTypes, $bindingAttr: System.Reflection.BindingFlags) : System.Array$1<System.Reflection.MemberInfo>
            public GetMembers () : System.Array$1<System.Reflection.MemberInfo>
            public GetMemberWithSameMetadataDefinitionAs ($member: System.Reflection.MemberInfo) : System.Reflection.MemberInfo
            public GetMembers ($bindingAttr: System.Reflection.BindingFlags) : System.Array$1<System.Reflection.MemberInfo>
            public GetMethod ($name: string) : System.Reflection.MethodInfo
            public GetMethod ($name: string, $bindingAttr: System.Reflection.BindingFlags) : System.Reflection.MethodInfo
            public GetMethod ($name: string, $bindingAttr: System.Reflection.BindingFlags, $types: System.Array$1<System.Type>) : System.Reflection.MethodInfo
            public GetMethod ($name: string, $types: System.Array$1<System.Type>) : System.Reflection.MethodInfo
            public GetMethod ($name: string, $types: System.Array$1<System.Type>, $modifiers: System.Array$1<System.Reflection.ParameterModifier>) : System.Reflection.MethodInfo
            public GetMethod ($name: string, $bindingAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $types: System.Array$1<System.Type>, $modifiers: System.Array$1<System.Reflection.ParameterModifier>) : System.Reflection.MethodInfo
            public GetMethod ($name: string, $bindingAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $callConvention: System.Reflection.CallingConventions, $types: System.Array$1<System.Type>, $modifiers: System.Array$1<System.Reflection.ParameterModifier>) : System.Reflection.MethodInfo
            public GetMethod ($name: string, $genericParameterCount: number, $types: System.Array$1<System.Type>) : System.Reflection.MethodInfo
            public GetMethod ($name: string, $genericParameterCount: number, $types: System.Array$1<System.Type>, $modifiers: System.Array$1<System.Reflection.ParameterModifier>) : System.Reflection.MethodInfo
            public GetMethod ($name: string, $genericParameterCount: number, $bindingAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $types: System.Array$1<System.Type>, $modifiers: System.Array$1<System.Reflection.ParameterModifier>) : System.Reflection.MethodInfo
            public GetMethod ($name: string, $genericParameterCount: number, $bindingAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $callConvention: System.Reflection.CallingConventions, $types: System.Array$1<System.Type>, $modifiers: System.Array$1<System.Reflection.ParameterModifier>) : System.Reflection.MethodInfo
            public GetMethods () : System.Array$1<System.Reflection.MethodInfo>
            public GetMethods ($bindingAttr: System.Reflection.BindingFlags) : System.Array$1<System.Reflection.MethodInfo>
            public GetNestedType ($name: string) : System.Type
            public GetNestedType ($name: string, $bindingAttr: System.Reflection.BindingFlags) : System.Type
            public GetNestedTypes () : System.Array$1<System.Type>
            public GetNestedTypes ($bindingAttr: System.Reflection.BindingFlags) : System.Array$1<System.Type>
            public GetProperty ($name: string) : System.Reflection.PropertyInfo
            public GetProperty ($name: string, $bindingAttr: System.Reflection.BindingFlags) : System.Reflection.PropertyInfo
            public GetProperty ($name: string, $returnType: System.Type) : System.Reflection.PropertyInfo
            public GetProperty ($name: string, $types: System.Array$1<System.Type>) : System.Reflection.PropertyInfo
            public GetProperty ($name: string, $returnType: System.Type, $types: System.Array$1<System.Type>) : System.Reflection.PropertyInfo
            public GetProperty ($name: string, $returnType: System.Type, $types: System.Array$1<System.Type>, $modifiers: System.Array$1<System.Reflection.ParameterModifier>) : System.Reflection.PropertyInfo
            public GetProperty ($name: string, $bindingAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $returnType: System.Type, $types: System.Array$1<System.Type>, $modifiers: System.Array$1<System.Reflection.ParameterModifier>) : System.Reflection.PropertyInfo
            public GetProperties () : System.Array$1<System.Reflection.PropertyInfo>
            public GetProperties ($bindingAttr: System.Reflection.BindingFlags) : System.Array$1<System.Reflection.PropertyInfo>
            public GetDefaultMembers () : System.Array$1<System.Reflection.MemberInfo>
            public static GetTypeHandle ($o: any) : System.RuntimeTypeHandle
            public static GetTypeArray ($args: System.Array$1<any>) : System.Array$1<System.Type>
            public static GetTypeCode ($type: System.Type) : System.TypeCode
            public static GetTypeFromCLSID ($clsid: System.Guid) : System.Type
            public static GetTypeFromCLSID ($clsid: System.Guid, $throwOnError: boolean) : System.Type
            public static GetTypeFromCLSID ($clsid: System.Guid, $server: string) : System.Type
            public static GetTypeFromCLSID ($clsid: System.Guid, $server: string, $throwOnError: boolean) : System.Type
            public static GetTypeFromProgID ($progID: string) : System.Type
            public static GetTypeFromProgID ($progID: string, $throwOnError: boolean) : System.Type
            public static GetTypeFromProgID ($progID: string, $server: string) : System.Type
            public static GetTypeFromProgID ($progID: string, $server: string, $throwOnError: boolean) : System.Type
            public InvokeMember ($name: string, $invokeAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $target: any, $args: System.Array$1<any>) : any
            public InvokeMember ($name: string, $invokeAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $target: any, $args: System.Array$1<any>, $culture: System.Globalization.CultureInfo) : any
            public InvokeMember ($name: string, $invokeAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $target: any, $args: System.Array$1<any>, $modifiers: System.Array$1<System.Reflection.ParameterModifier>, $culture: System.Globalization.CultureInfo, $namedParameters: System.Array$1<string>) : any
            public GetInterface ($name: string) : System.Type
            public GetInterface ($name: string, $ignoreCase: boolean) : System.Type
            public GetInterfaces () : System.Array$1<System.Type>
            public GetInterfaceMap ($interfaceType: System.Type) : System.Reflection.InterfaceMapping
            public IsInstanceOfType ($o: any) : boolean
            public IsEquivalentTo ($other: System.Type) : boolean
            public GetEnumUnderlyingType () : System.Type
            public GetEnumValues () : System.Array
            public GetEnumValuesAsUnderlyingType () : System.Array
            public MakeArrayType () : System.Type
            public MakeArrayType ($rank: number) : System.Type
            public MakeByRefType () : System.Type
            public MakeGenericType (...typeArguments: System.Type[]) : System.Type
            public MakePointerType () : System.Type
            public static MakeGenericSignatureType ($genericTypeDefinition: System.Type, ...typeArguments: System.Type[]) : System.Type
            public static MakeGenericMethodParameter ($position: number) : System.Type
            public Equals ($o: any) : boolean
            public Equals ($o: System.Type) : boolean
            public static op_Equality ($left: System.Type, $right: System.Type) : boolean
            public static op_Inequality ($left: System.Type, $right: System.Type) : boolean
            public IsEnumDefined ($value: any) : boolean
            public GetEnumName ($value: any) : string
            public GetEnumNames () : System.Array$1<string>
            public FindInterfaces ($filter: System.Reflection.TypeFilter, $filterCriteria: any) : System.Array$1<System.Type>
            public FindMembers ($memberType: System.Reflection.MemberTypes, $bindingAttr: System.Reflection.BindingFlags, $filter: System.Reflection.MemberFilter, $filterCriteria: any) : System.Array$1<System.Reflection.MemberInfo>
            public IsSubclassOf ($c: System.Type) : boolean
            public IsAssignableFrom ($c: System.Type) : boolean
            public static op_Equality ($left: System.Reflection.MemberInfo, $right: System.Reflection.MemberInfo) : boolean
            public static op_Inequality ($left: System.Reflection.MemberInfo, $right: System.Reflection.MemberInfo) : boolean
            public Equals ($obj: any) : boolean
            public static Equals ($objA: any, $objB: any) : boolean
        }
        class String extends System.Object implements System.IComparable, System.Collections.IEnumerable, System.IConvertible, System.Collections.Generic.IEnumerable$1<number>, System.IComparable$1<string>, System.IEquatable$1<string>, System.ICloneable, System.ISpanParsable$1<string>, System.IParsable$1<string>
        {
            protected [__keep_incompatibility]: never;
            public GetEnumerator () : System.Collections.IEnumerator
        }
        class Char extends System.ValueType implements System.IComparable, System.IComparable$1<number>, System.IEquatable$1<number>, System.IConvertible, System.ISpanFormattable, System.IFormattable, System.Numerics.IBinaryInteger$1<number>, System.Numerics.IBinaryNumber$1<number>, System.Numerics.IBitwiseOperators$3<number, number, number>, System.Numerics.INumber$1<number>, System.Numerics.IComparisonOperators$3<number, number, boolean>, System.Numerics.IEqualityOperators$3<number, number, boolean>, System.Numerics.IModulusOperators$3<number, number, number>, System.Numerics.INumberBase$1<number>, System.Numerics.IAdditionOperators$3<number, number, number>, System.Numerics.IAdditiveIdentity$2<number, number>, System.Numerics.IDecrementOperators$1<number>, System.Numerics.IDivisionOperators$3<number, number, number>, System.Numerics.IIncrementOperators$1<number>, System.Numerics.IMultiplicativeIdentity$2<number, number>, System.Numerics.IMultiplyOperators$3<number, number, number>, System.ISpanParsable$1<number>, System.IParsable$1<number>, System.Numerics.ISubtractionOperators$3<number, number, number>, System.Numerics.IUnaryPlusOperators$2<number, number>, System.Numerics.IUnaryNegationOperators$2<number, number>, System.IUtf8SpanParsable$1<number>, System.Numerics.IShiftOperators$3<number, number, number>, System.Numerics.IMinMaxValue$1<number>, System.Numerics.IUnsignedNumber$1<number>, System.IUtf8SpanFormattable, System.IUtfChar$1<number>, System.IBinaryIntegerParseAndFormatInfo$1<number>
        {
            protected [__keep_incompatibility]: never;
        }
        interface IUtfChar$1<TSelf> extends System.Numerics.IBinaryInteger$1<TSelf>, System.Numerics.IBinaryNumber$1<TSelf>, System.Numerics.IBitwiseOperators$3<TSelf, TSelf, TSelf>, System.Numerics.INumber$1<TSelf>, System.IComparable, System.IComparable$1<TSelf>, System.Numerics.IComparisonOperators$3<TSelf, TSelf, boolean>, System.Numerics.IEqualityOperators$3<TSelf, TSelf, boolean>, System.Numerics.IModulusOperators$3<TSelf, TSelf, TSelf>, System.Numerics.INumberBase$1<TSelf>, System.Numerics.IAdditionOperators$3<TSelf, TSelf, TSelf>, System.Numerics.IAdditiveIdentity$2<TSelf, TSelf>, System.Numerics.IDecrementOperators$1<TSelf>, System.Numerics.IDivisionOperators$3<TSelf, TSelf, TSelf>, System.IEquatable$1<TSelf>, System.Numerics.IIncrementOperators$1<TSelf>, System.Numerics.IMultiplicativeIdentity$2<TSelf, TSelf>, System.Numerics.IMultiplyOperators$3<TSelf, TSelf, TSelf>, System.ISpanFormattable, System.IFormattable, System.ISpanParsable$1<TSelf>, System.IParsable$1<TSelf>, System.Numerics.ISubtractionOperators$3<TSelf, TSelf, TSelf>, System.Numerics.IUnaryPlusOperators$2<TSelf, TSelf>, System.Numerics.IUnaryNegationOperators$2<TSelf, TSelf>, System.IUtf8SpanParsable$1<TSelf>, System.Numerics.IShiftOperators$3<TSelf, number, TSelf>
        {
        }
        class Array extends System.Object implements System.ICloneable, System.Collections.IList, System.Collections.ICollection, System.Collections.IEnumerable, System.Collections.IStructuralComparable, System.Collections.IStructuralEquatable
        {
            protected [__keep_incompatibility]: never;
            public GetEnumerator () : System.Collections.IEnumerator
        }
        class Void extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
        }
        class Enum extends System.ValueType implements System.IComparable, System.ISpanFormattable, System.IFormattable, System.IConvertible
        {
            protected [__keep_incompatibility]: never;
        }
        interface MulticastDelegate
        { 
        (...args:any[]) : any; 
        Invoke?: (...args:any[]) => any;
        }
        var MulticastDelegate: { new (func: (...args:any[]) => any): MulticastDelegate; }
        interface Func$2<T, TResult>
        { 
        (arg: T) : TResult; 
        Invoke?: (arg: T) => TResult;
        }
        interface Func$4<T1, T2, T3, TResult>
        { 
        (arg1: T1, arg2: T2, arg3: T3) : TResult; 
        Invoke?: (arg1: T1, arg2: T2, arg3: T3) => TResult;
        }
        class RuntimeTypeHandle extends System.ValueType implements System.IEquatable$1<System.RuntimeTypeHandle>, System.Runtime.Serialization.ISerializable
        {
            protected [__keep_incompatibility]: never;
        }
        class Attribute extends System.Object
        {
            protected [__keep_incompatibility]: never;
        }
        enum TypeCode
        { Empty = 0, Object = 1, DBNull = 2, Boolean = 3, Char = 4, SByte = 5, Byte = 6, Int16 = 7, UInt16 = 8, Int32 = 9, UInt32 = 10, Int64 = 11, UInt64 = 12, Single = 13, Double = 14, Decimal = 15, DateTime = 16, String = 18 }
        class Guid extends System.ValueType implements System.ISpanFormattable, System.IFormattable, System.IComparable, System.IComparable$1<System.Guid>, System.IEquatable$1<System.Guid>, System.ISpanParsable$1<System.Guid>, System.IParsable$1<System.Guid>, System.IUtf8SpanFormattable
        {
            protected [__keep_incompatibility]: never;
        }
        interface IFormatProvider
        {
        }
        class Console extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static get In(): System.IO.TextReader;
            public static get InputEncoding(): System.Text.Encoding;
            public static set InputEncoding(value: System.Text.Encoding);
            public static get OutputEncoding(): System.Text.Encoding;
            public static set OutputEncoding(value: System.Text.Encoding);
            public static get KeyAvailable(): boolean;
            public static get Out(): System.IO.TextWriter;
            public static get Error(): System.IO.TextWriter;
            public static get IsInputRedirected(): boolean;
            public static get IsOutputRedirected(): boolean;
            public static get IsErrorRedirected(): boolean;
            public static get CursorSize(): number;
            public static set CursorSize(value: number);
            public static get NumberLock(): boolean;
            public static get CapsLock(): boolean;
            public static get BackgroundColor(): System.ConsoleColor;
            public static set BackgroundColor(value: System.ConsoleColor);
            public static get ForegroundColor(): System.ConsoleColor;
            public static set ForegroundColor(value: System.ConsoleColor);
            public static get BufferWidth(): number;
            public static set BufferWidth(value: number);
            public static get BufferHeight(): number;
            public static set BufferHeight(value: number);
            public static get WindowLeft(): number;
            public static set WindowLeft(value: number);
            public static get WindowTop(): number;
            public static set WindowTop(value: number);
            public static get WindowWidth(): number;
            public static set WindowWidth(value: number);
            public static get WindowHeight(): number;
            public static set WindowHeight(value: number);
            public static get LargestWindowWidth(): number;
            public static get LargestWindowHeight(): number;
            public static get CursorVisible(): boolean;
            public static set CursorVisible(value: boolean);
            public static get CursorLeft(): number;
            public static set CursorLeft(value: number);
            public static get CursorTop(): number;
            public static set CursorTop(value: number);
            public static get Title(): string;
            public static set Title(value: string);
            public static get TreatControlCAsInput(): boolean;
            public static set TreatControlCAsInput(value: boolean);
            public static ReadKey () : System.ConsoleKeyInfo
            public static ReadKey ($intercept: boolean) : System.ConsoleKeyInfo
            public static ResetColor () : void
            public static SetBufferSize ($width: number, $height: number) : void
            public static SetWindowPosition ($left: number, $top: number) : void
            public static SetWindowSize ($width: number, $height: number) : void
            public static GetCursorPosition () : System.ValueTuple$2<number, number>
            public static Beep () : void
            public static Beep ($frequency: number, $duration: number) : void
            public static MoveBufferArea ($sourceLeft: number, $sourceTop: number, $sourceWidth: number, $sourceHeight: number, $targetLeft: number, $targetTop: number) : void
            public static MoveBufferArea ($sourceLeft: number, $sourceTop: number, $sourceWidth: number, $sourceHeight: number, $targetLeft: number, $targetTop: number, $sourceChar: number, $sourceForeColor: System.ConsoleColor, $sourceBackColor: System.ConsoleColor) : void
            public static Clear () : void
            public static SetCursorPosition ($left: number, $top: number) : void
            public static add_CancelKeyPress ($value: System.ConsoleCancelEventHandler) : void
            public static remove_CancelKeyPress ($value: System.ConsoleCancelEventHandler) : void
            public static OpenStandardInput () : System.IO.Stream
            public static OpenStandardInput ($bufferSize: number) : System.IO.Stream
            public static OpenStandardOutput () : System.IO.Stream
            public static OpenStandardOutput ($bufferSize: number) : System.IO.Stream
            public static OpenStandardError () : System.IO.Stream
            public static OpenStandardError ($bufferSize: number) : System.IO.Stream
            public static SetIn ($newIn: System.IO.TextReader) : void
            public static SetOut ($newOut: System.IO.TextWriter) : void
            public static SetError ($newError: System.IO.TextWriter) : void
            public static Read () : number
            public static ReadLine () : string
            public static WriteLine () : void
            public static WriteLine ($value: boolean) : void
            public static WriteLine ($value: number) : void
            public static WriteLine ($buffer: System.Array$1<number>) : void
            public static WriteLine ($buffer: System.Array$1<number>, $index: number, $count: number) : void
            public static WriteLine ($value: System.Decimal) : void
            public static WriteLine ($value: bigint) : void
            public static WriteLine ($value: any) : void
            public static WriteLine ($value: string) : void
            public static WriteLine ($format: string, $arg0: any) : void
            public static WriteLine ($format: string, $arg0: any, $arg1: any) : void
            public static WriteLine ($format: string, $arg0: any, $arg1: any, $arg2: any) : void
            public static WriteLine ($format: string, ...arg: any[]) : void
            public static Write ($format: string, $arg0: any) : void
            public static Write ($format: string, $arg0: any, $arg1: any) : void
            public static Write ($format: string, $arg0: any, $arg1: any, $arg2: any) : void
            public static Write ($format: string, ...arg: any[]) : void
            public static Write ($value: boolean) : void
            public static Write ($value: number) : void
            public static Write ($buffer: System.Array$1<number>) : void
            public static Write ($buffer: System.Array$1<number>, $index: number, $count: number) : void
            public static Write ($value: System.Decimal) : void
            public static Write ($value: bigint) : void
            public static Write ($value: any) : void
            public static Write ($value: string) : void
        }
        class MarshalByRefObject extends System.Object
        {
            protected [__keep_incompatibility]: never;
        }
        interface IDisposable
        {
        }
        class ConsoleKeyInfo extends System.ValueType implements System.IEquatable$1<System.ConsoleKeyInfo>
        {
            protected [__keep_incompatibility]: never;
        }
        interface IAsyncDisposable
        {
        }
        enum ConsoleColor
        { Black = 0, DarkBlue = 1, DarkGreen = 2, DarkCyan = 3, DarkRed = 4, DarkMagenta = 5, DarkYellow = 6, Gray = 7, DarkGray = 8, Blue = 9, Green = 10, Cyan = 11, Red = 12, Magenta = 13, Yellow = 14, White = 15 }
        class ValueTuple$2<T1, T2> extends System.ValueType implements System.IEquatable$1<System.ValueTuple$2<T1, T2>>, System.Collections.IStructuralEquatable, System.Collections.IStructuralComparable, System.IComparable, System.IComparable$1<System.ValueTuple$2<T1, T2>>, System.IValueTupleInternal, System.Runtime.CompilerServices.ITuple
        {
            protected [__keep_incompatibility]: never;
        }
        interface IValueTupleInternal extends System.Runtime.CompilerServices.ITuple
        {
        }
        interface ConsoleCancelEventHandler
        { 
        (sender: any, e: System.ConsoleCancelEventArgs) : void; 
        Invoke?: (sender: any, e: System.ConsoleCancelEventArgs) => void;
        }
        var ConsoleCancelEventHandler: { new (func: (sender: any, e: System.ConsoleCancelEventArgs) => void): ConsoleCancelEventHandler; }
        class EventArgs extends System.Object
        {
            protected [__keep_incompatibility]: never;
        }
        class ConsoleCancelEventArgs extends System.EventArgs
        {
            protected [__keep_incompatibility]: never;
        }
        class Decimal extends System.ValueType implements System.ISpanFormattable, System.IFormattable, System.IComparable, System.IConvertible, System.IComparable$1<System.Decimal>, System.IEquatable$1<System.Decimal>, System.Runtime.Serialization.ISerializable, System.Runtime.Serialization.IDeserializationCallback, System.Numerics.IFloatingPoint$1<System.Decimal>, System.Numerics.IFloatingPointConstants$1<System.Decimal>, System.Numerics.INumberBase$1<System.Decimal>, System.Numerics.IAdditionOperators$3<System.Decimal, System.Decimal, System.Decimal>, System.Numerics.IAdditiveIdentity$2<System.Decimal, System.Decimal>, System.Numerics.IDecrementOperators$1<System.Decimal>, System.Numerics.IDivisionOperators$3<System.Decimal, System.Decimal, System.Decimal>, System.Numerics.IEqualityOperators$3<System.Decimal, System.Decimal, boolean>, System.Numerics.IIncrementOperators$1<System.Decimal>, System.Numerics.IMultiplicativeIdentity$2<System.Decimal, System.Decimal>, System.Numerics.IMultiplyOperators$3<System.Decimal, System.Decimal, System.Decimal>, System.ISpanParsable$1<System.Decimal>, System.IParsable$1<System.Decimal>, System.Numerics.ISubtractionOperators$3<System.Decimal, System.Decimal, System.Decimal>, System.Numerics.IUnaryPlusOperators$2<System.Decimal, System.Decimal>, System.Numerics.IUnaryNegationOperators$2<System.Decimal, System.Decimal>, System.IUtf8SpanParsable$1<System.Decimal>, System.Numerics.INumber$1<System.Decimal>, System.Numerics.IComparisonOperators$3<System.Decimal, System.Decimal, boolean>, System.Numerics.IModulusOperators$3<System.Decimal, System.Decimal, System.Decimal>, System.Numerics.ISignedNumber$1<System.Decimal>, System.Numerics.IMinMaxValue$1<System.Decimal>, System.IUtf8SpanFormattable
        {
            protected [__keep_incompatibility]: never;
        }
        class Double extends System.ValueType implements System.IComparable, System.IConvertible, System.ISpanFormattable, System.IFormattable, System.IComparable$1<number>, System.IEquatable$1<number>, System.Numerics.IBinaryFloatingPointIeee754$1<number>, System.Numerics.IBinaryNumber$1<number>, System.Numerics.IBitwiseOperators$3<number, number, number>, System.Numerics.INumber$1<number>, System.Numerics.IComparisonOperators$3<number, number, boolean>, System.Numerics.IEqualityOperators$3<number, number, boolean>, System.Numerics.IModulusOperators$3<number, number, number>, System.Numerics.INumberBase$1<number>, System.Numerics.IAdditionOperators$3<number, number, number>, System.Numerics.IAdditiveIdentity$2<number, number>, System.Numerics.IDecrementOperators$1<number>, System.Numerics.IDivisionOperators$3<number, number, number>, System.Numerics.IIncrementOperators$1<number>, System.Numerics.IMultiplicativeIdentity$2<number, number>, System.Numerics.IMultiplyOperators$3<number, number, number>, System.ISpanParsable$1<number>, System.IParsable$1<number>, System.Numerics.ISubtractionOperators$3<number, number, number>, System.Numerics.IUnaryPlusOperators$2<number, number>, System.Numerics.IUnaryNegationOperators$2<number, number>, System.IUtf8SpanParsable$1<number>, System.Numerics.IFloatingPointIeee754$1<number>, System.Numerics.IExponentialFunctions$1<number>, System.Numerics.IFloatingPointConstants$1<number>, System.Numerics.IFloatingPoint$1<number>, System.Numerics.ISignedNumber$1<number>, System.Numerics.IHyperbolicFunctions$1<number>, System.Numerics.ILogarithmicFunctions$1<number>, System.Numerics.IPowerFunctions$1<number>, System.Numerics.IRootFunctions$1<number>, System.Numerics.ITrigonometricFunctions$1<number>, System.Numerics.IMinMaxValue$1<number>, System.IUtf8SpanFormattable, System.IBinaryFloatParseAndFormatInfo$1<number>
        {
            protected [__keep_incompatibility]: never;
        }
        interface IBinaryFloatParseAndFormatInfo$1<TSelf> extends System.Numerics.IBinaryFloatingPointIeee754$1<TSelf>, System.Numerics.IBinaryNumber$1<TSelf>, System.Numerics.IBitwiseOperators$3<TSelf, TSelf, TSelf>, System.Numerics.INumber$1<TSelf>, System.IComparable, System.IComparable$1<TSelf>, System.Numerics.IComparisonOperators$3<TSelf, TSelf, boolean>, System.Numerics.IEqualityOperators$3<TSelf, TSelf, boolean>, System.Numerics.IModulusOperators$3<TSelf, TSelf, TSelf>, System.Numerics.INumberBase$1<TSelf>, System.Numerics.IAdditionOperators$3<TSelf, TSelf, TSelf>, System.Numerics.IAdditiveIdentity$2<TSelf, TSelf>, System.Numerics.IDecrementOperators$1<TSelf>, System.Numerics.IDivisionOperators$3<TSelf, TSelf, TSelf>, System.IEquatable$1<TSelf>, System.Numerics.IIncrementOperators$1<TSelf>, System.Numerics.IMultiplicativeIdentity$2<TSelf, TSelf>, System.Numerics.IMultiplyOperators$3<TSelf, TSelf, TSelf>, System.ISpanFormattable, System.IFormattable, System.ISpanParsable$1<TSelf>, System.IParsable$1<TSelf>, System.Numerics.ISubtractionOperators$3<TSelf, TSelf, TSelf>, System.Numerics.IUnaryPlusOperators$2<TSelf, TSelf>, System.Numerics.IUnaryNegationOperators$2<TSelf, TSelf>, System.IUtf8SpanParsable$1<TSelf>, System.Numerics.IFloatingPointIeee754$1<TSelf>, System.Numerics.IExponentialFunctions$1<TSelf>, System.Numerics.IFloatingPointConstants$1<TSelf>, System.Numerics.IFloatingPoint$1<TSelf>, System.Numerics.ISignedNumber$1<TSelf>, System.Numerics.IHyperbolicFunctions$1<TSelf>, System.Numerics.ILogarithmicFunctions$1<TSelf>, System.Numerics.IPowerFunctions$1<TSelf>, System.Numerics.IRootFunctions$1<TSelf>, System.Numerics.ITrigonometricFunctions$1<TSelf>, System.Numerics.IMinMaxValue$1<TSelf>
        {
        }
        class Single extends System.ValueType implements System.IComparable, System.IConvertible, System.ISpanFormattable, System.IFormattable, System.IComparable$1<number>, System.IEquatable$1<number>, System.Numerics.IBinaryFloatingPointIeee754$1<number>, System.Numerics.IBinaryNumber$1<number>, System.Numerics.IBitwiseOperators$3<number, number, number>, System.Numerics.INumber$1<number>, System.Numerics.IComparisonOperators$3<number, number, boolean>, System.Numerics.IEqualityOperators$3<number, number, boolean>, System.Numerics.IModulusOperators$3<number, number, number>, System.Numerics.INumberBase$1<number>, System.Numerics.IAdditionOperators$3<number, number, number>, System.Numerics.IAdditiveIdentity$2<number, number>, System.Numerics.IDecrementOperators$1<number>, System.Numerics.IDivisionOperators$3<number, number, number>, System.Numerics.IIncrementOperators$1<number>, System.Numerics.IMultiplicativeIdentity$2<number, number>, System.Numerics.IMultiplyOperators$3<number, number, number>, System.ISpanParsable$1<number>, System.IParsable$1<number>, System.Numerics.ISubtractionOperators$3<number, number, number>, System.Numerics.IUnaryPlusOperators$2<number, number>, System.Numerics.IUnaryNegationOperators$2<number, number>, System.IUtf8SpanParsable$1<number>, System.Numerics.IFloatingPointIeee754$1<number>, System.Numerics.IExponentialFunctions$1<number>, System.Numerics.IFloatingPointConstants$1<number>, System.Numerics.IFloatingPoint$1<number>, System.Numerics.ISignedNumber$1<number>, System.Numerics.IHyperbolicFunctions$1<number>, System.Numerics.ILogarithmicFunctions$1<number>, System.Numerics.IPowerFunctions$1<number>, System.Numerics.IRootFunctions$1<number>, System.Numerics.ITrigonometricFunctions$1<number>, System.Numerics.IMinMaxValue$1<number>, System.IUtf8SpanFormattable, System.IBinaryFloatParseAndFormatInfo$1<number>
        {
            protected [__keep_incompatibility]: never;
        }
        class UInt32 extends System.ValueType implements System.IComparable, System.IConvertible, System.ISpanFormattable, System.IFormattable, System.IComparable$1<number>, System.IEquatable$1<number>, System.Numerics.IBinaryInteger$1<number>, System.Numerics.IBinaryNumber$1<number>, System.Numerics.IBitwiseOperators$3<number, number, number>, System.Numerics.INumber$1<number>, System.Numerics.IComparisonOperators$3<number, number, boolean>, System.Numerics.IEqualityOperators$3<number, number, boolean>, System.Numerics.IModulusOperators$3<number, number, number>, System.Numerics.INumberBase$1<number>, System.Numerics.IAdditionOperators$3<number, number, number>, System.Numerics.IAdditiveIdentity$2<number, number>, System.Numerics.IDecrementOperators$1<number>, System.Numerics.IDivisionOperators$3<number, number, number>, System.Numerics.IIncrementOperators$1<number>, System.Numerics.IMultiplicativeIdentity$2<number, number>, System.Numerics.IMultiplyOperators$3<number, number, number>, System.ISpanParsable$1<number>, System.IParsable$1<number>, System.Numerics.ISubtractionOperators$3<number, number, number>, System.Numerics.IUnaryPlusOperators$2<number, number>, System.Numerics.IUnaryNegationOperators$2<number, number>, System.IUtf8SpanParsable$1<number>, System.Numerics.IShiftOperators$3<number, number, number>, System.Numerics.IMinMaxValue$1<number>, System.Numerics.IUnsignedNumber$1<number>, System.IUtf8SpanFormattable, System.IBinaryIntegerParseAndFormatInfo$1<number>
        {
            protected [__keep_incompatibility]: never;
        }
        class Int64 extends System.ValueType implements System.IComparable, System.IConvertible, System.ISpanFormattable, System.IFormattable, System.IComparable$1<bigint>, System.IEquatable$1<bigint>, System.Numerics.IBinaryInteger$1<bigint>, System.Numerics.IBinaryNumber$1<bigint>, System.Numerics.IBitwiseOperators$3<bigint, bigint, bigint>, System.Numerics.INumber$1<bigint>, System.Numerics.IComparisonOperators$3<bigint, bigint, boolean>, System.Numerics.IEqualityOperators$3<bigint, bigint, boolean>, System.Numerics.IModulusOperators$3<bigint, bigint, bigint>, System.Numerics.INumberBase$1<bigint>, System.Numerics.IAdditionOperators$3<bigint, bigint, bigint>, System.Numerics.IAdditiveIdentity$2<bigint, bigint>, System.Numerics.IDecrementOperators$1<bigint>, System.Numerics.IDivisionOperators$3<bigint, bigint, bigint>, System.Numerics.IIncrementOperators$1<bigint>, System.Numerics.IMultiplicativeIdentity$2<bigint, bigint>, System.Numerics.IMultiplyOperators$3<bigint, bigint, bigint>, System.ISpanParsable$1<bigint>, System.IParsable$1<bigint>, System.Numerics.ISubtractionOperators$3<bigint, bigint, bigint>, System.Numerics.IUnaryPlusOperators$2<bigint, bigint>, System.Numerics.IUnaryNegationOperators$2<bigint, bigint>, System.IUtf8SpanParsable$1<bigint>, System.Numerics.IShiftOperators$3<bigint, number, bigint>, System.Numerics.IMinMaxValue$1<bigint>, System.Numerics.ISignedNumber$1<bigint>, System.IUtf8SpanFormattable, System.IBinaryIntegerParseAndFormatInfo$1<bigint>
        {
            protected [__keep_incompatibility]: never;
        }
        class UInt64 extends System.ValueType implements System.IComparable, System.IConvertible, System.ISpanFormattable, System.IFormattable, System.IComparable$1<bigint>, System.IEquatable$1<bigint>, System.Numerics.IBinaryInteger$1<bigint>, System.Numerics.IBinaryNumber$1<bigint>, System.Numerics.IBitwiseOperators$3<bigint, bigint, bigint>, System.Numerics.INumber$1<bigint>, System.Numerics.IComparisonOperators$3<bigint, bigint, boolean>, System.Numerics.IEqualityOperators$3<bigint, bigint, boolean>, System.Numerics.IModulusOperators$3<bigint, bigint, bigint>, System.Numerics.INumberBase$1<bigint>, System.Numerics.IAdditionOperators$3<bigint, bigint, bigint>, System.Numerics.IAdditiveIdentity$2<bigint, bigint>, System.Numerics.IDecrementOperators$1<bigint>, System.Numerics.IDivisionOperators$3<bigint, bigint, bigint>, System.Numerics.IIncrementOperators$1<bigint>, System.Numerics.IMultiplicativeIdentity$2<bigint, bigint>, System.Numerics.IMultiplyOperators$3<bigint, bigint, bigint>, System.ISpanParsable$1<bigint>, System.IParsable$1<bigint>, System.Numerics.ISubtractionOperators$3<bigint, bigint, bigint>, System.Numerics.IUnaryPlusOperators$2<bigint, bigint>, System.Numerics.IUnaryNegationOperators$2<bigint, bigint>, System.IUtf8SpanParsable$1<bigint>, System.Numerics.IShiftOperators$3<bigint, number, bigint>, System.Numerics.IMinMaxValue$1<bigint>, System.Numerics.IUnsignedNumber$1<bigint>, System.IUtf8SpanFormattable, System.IBinaryIntegerParseAndFormatInfo$1<bigint>
        {
            protected [__keep_incompatibility]: never;
        }
        interface Converter$2<TInput, TOutput>
        { 
        (input: TInput) : TOutput; 
        Invoke?: (input: TInput) => TOutput;
        }
        interface Predicate$1<T>
        { 
        (obj: T) : boolean; 
        Invoke?: (obj: T) => boolean;
        }
        interface Action$1<T>
        { 
        (obj: T) : void; 
        Invoke?: (obj: T) => void;
        }
        interface Comparison$1<T>
        { 
        (x: T, y: T) : number; 
        Invoke?: (x: T, y: T) => number;
        }
        interface IAsyncResult
        {
        }
    }
    namespace System.Runtime.Serialization {
        interface ISerializable
        {
        }
        class SerializationInfo extends System.Object
        {
            protected [__keep_incompatibility]: never;
        }
        class StreamingContext extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
        }
        interface IObjectReference
        {
        }
        interface IDeserializationCallback
        {
        }
    }
    namespace System.Numerics {
        interface IBinaryInteger$1<TSelf> extends System.Numerics.IBinaryNumber$1<TSelf>, System.Numerics.IBitwiseOperators$3<TSelf, TSelf, TSelf>, System.Numerics.INumber$1<TSelf>, System.IComparable, System.IComparable$1<TSelf>, System.Numerics.IComparisonOperators$3<TSelf, TSelf, boolean>, System.Numerics.IEqualityOperators$3<TSelf, TSelf, boolean>, System.Numerics.IModulusOperators$3<TSelf, TSelf, TSelf>, System.Numerics.INumberBase$1<TSelf>, System.Numerics.IAdditionOperators$3<TSelf, TSelf, TSelf>, System.Numerics.IAdditiveIdentity$2<TSelf, TSelf>, System.Numerics.IDecrementOperators$1<TSelf>, System.Numerics.IDivisionOperators$3<TSelf, TSelf, TSelf>, System.IEquatable$1<TSelf>, System.Numerics.IIncrementOperators$1<TSelf>, System.Numerics.IMultiplicativeIdentity$2<TSelf, TSelf>, System.Numerics.IMultiplyOperators$3<TSelf, TSelf, TSelf>, System.ISpanFormattable, System.IFormattable, System.ISpanParsable$1<TSelf>, System.IParsable$1<TSelf>, System.Numerics.ISubtractionOperators$3<TSelf, TSelf, TSelf>, System.Numerics.IUnaryPlusOperators$2<TSelf, TSelf>, System.Numerics.IUnaryNegationOperators$2<TSelf, TSelf>, System.IUtf8SpanParsable$1<TSelf>, System.Numerics.IShiftOperators$3<TSelf, number, TSelf>
        {
        }
        interface IBinaryNumber$1<TSelf> extends System.Numerics.IBitwiseOperators$3<TSelf, TSelf, TSelf>, System.Numerics.INumber$1<TSelf>, System.IComparable, System.IComparable$1<TSelf>, System.Numerics.IComparisonOperators$3<TSelf, TSelf, boolean>, System.Numerics.IEqualityOperators$3<TSelf, TSelf, boolean>, System.Numerics.IModulusOperators$3<TSelf, TSelf, TSelf>, System.Numerics.INumberBase$1<TSelf>, System.Numerics.IAdditionOperators$3<TSelf, TSelf, TSelf>, System.Numerics.IAdditiveIdentity$2<TSelf, TSelf>, System.Numerics.IDecrementOperators$1<TSelf>, System.Numerics.IDivisionOperators$3<TSelf, TSelf, TSelf>, System.IEquatable$1<TSelf>, System.Numerics.IIncrementOperators$1<TSelf>, System.Numerics.IMultiplicativeIdentity$2<TSelf, TSelf>, System.Numerics.IMultiplyOperators$3<TSelf, TSelf, TSelf>, System.ISpanFormattable, System.IFormattable, System.ISpanParsable$1<TSelf>, System.IParsable$1<TSelf>, System.Numerics.ISubtractionOperators$3<TSelf, TSelf, TSelf>, System.Numerics.IUnaryPlusOperators$2<TSelf, TSelf>, System.Numerics.IUnaryNegationOperators$2<TSelf, TSelf>, System.IUtf8SpanParsable$1<TSelf>
        {
        }
        interface IBitwiseOperators$3<TSelf, TOther, TResult>
        {
        }
        interface INumber$1<TSelf> extends System.IComparable, System.IComparable$1<TSelf>, System.Numerics.IComparisonOperators$3<TSelf, TSelf, boolean>, System.Numerics.IEqualityOperators$3<TSelf, TSelf, boolean>, System.Numerics.IModulusOperators$3<TSelf, TSelf, TSelf>, System.Numerics.INumberBase$1<TSelf>, System.Numerics.IAdditionOperators$3<TSelf, TSelf, TSelf>, System.Numerics.IAdditiveIdentity$2<TSelf, TSelf>, System.Numerics.IDecrementOperators$1<TSelf>, System.Numerics.IDivisionOperators$3<TSelf, TSelf, TSelf>, System.IEquatable$1<TSelf>, System.Numerics.IIncrementOperators$1<TSelf>, System.Numerics.IMultiplicativeIdentity$2<TSelf, TSelf>, System.Numerics.IMultiplyOperators$3<TSelf, TSelf, TSelf>, System.ISpanFormattable, System.IFormattable, System.ISpanParsable$1<TSelf>, System.IParsable$1<TSelf>, System.Numerics.ISubtractionOperators$3<TSelf, TSelf, TSelf>, System.Numerics.IUnaryPlusOperators$2<TSelf, TSelf>, System.Numerics.IUnaryNegationOperators$2<TSelf, TSelf>, System.IUtf8SpanParsable$1<TSelf>
        {
        }
        interface IComparisonOperators$3<TSelf, TOther, TResult> extends System.Numerics.IEqualityOperators$3<TSelf, TOther, TResult>
        {
        }
        interface IEqualityOperators$3<TSelf, TOther, TResult>
        {
        }
        interface IModulusOperators$3<TSelf, TOther, TResult>
        {
        }
        interface INumberBase$1<TSelf> extends System.Numerics.IAdditionOperators$3<TSelf, TSelf, TSelf>, System.Numerics.IAdditiveIdentity$2<TSelf, TSelf>, System.Numerics.IDecrementOperators$1<TSelf>, System.Numerics.IDivisionOperators$3<TSelf, TSelf, TSelf>, System.IEquatable$1<TSelf>, System.Numerics.IEqualityOperators$3<TSelf, TSelf, boolean>, System.Numerics.IIncrementOperators$1<TSelf>, System.Numerics.IMultiplicativeIdentity$2<TSelf, TSelf>, System.Numerics.IMultiplyOperators$3<TSelf, TSelf, TSelf>, System.ISpanFormattable, System.IFormattable, System.ISpanParsable$1<TSelf>, System.IParsable$1<TSelf>, System.Numerics.ISubtractionOperators$3<TSelf, TSelf, TSelf>, System.Numerics.IUnaryPlusOperators$2<TSelf, TSelf>, System.Numerics.IUnaryNegationOperators$2<TSelf, TSelf>, System.IUtf8SpanParsable$1<TSelf>
        {
        }
        interface IAdditionOperators$3<TSelf, TOther, TResult>
        {
        }
        interface IAdditiveIdentity$2<TSelf, TResult>
        {
        }
        interface IDecrementOperators$1<TSelf>
        {
        }
        interface IDivisionOperators$3<TSelf, TOther, TResult>
        {
        }
        interface IIncrementOperators$1<TSelf>
        {
        }
        interface IMultiplicativeIdentity$2<TSelf, TResult>
        {
        }
        interface IMultiplyOperators$3<TSelf, TOther, TResult>
        {
        }
        interface ISubtractionOperators$3<TSelf, TOther, TResult>
        {
        }
        interface IUnaryPlusOperators$2<TSelf, TResult>
        {
        }
        interface IUnaryNegationOperators$2<TSelf, TResult>
        {
        }
        interface IShiftOperators$3<TSelf, TOther, TResult>
        {
        }
        interface IMinMaxValue$1<TSelf>
        {
        }
        interface ISignedNumber$1<TSelf> extends System.Numerics.INumberBase$1<TSelf>, System.Numerics.IAdditionOperators$3<TSelf, TSelf, TSelf>, System.Numerics.IAdditiveIdentity$2<TSelf, TSelf>, System.Numerics.IDecrementOperators$1<TSelf>, System.Numerics.IDivisionOperators$3<TSelf, TSelf, TSelf>, System.IEquatable$1<TSelf>, System.Numerics.IEqualityOperators$3<TSelf, TSelf, boolean>, System.Numerics.IIncrementOperators$1<TSelf>, System.Numerics.IMultiplicativeIdentity$2<TSelf, TSelf>, System.Numerics.IMultiplyOperators$3<TSelf, TSelf, TSelf>, System.ISpanFormattable, System.IFormattable, System.ISpanParsable$1<TSelf>, System.IParsable$1<TSelf>, System.Numerics.ISubtractionOperators$3<TSelf, TSelf, TSelf>, System.Numerics.IUnaryPlusOperators$2<TSelf, TSelf>, System.Numerics.IUnaryNegationOperators$2<TSelf, TSelf>, System.IUtf8SpanParsable$1<TSelf>
        {
        }
        interface IUnsignedNumber$1<TSelf> extends System.Numerics.INumberBase$1<TSelf>, System.Numerics.IAdditionOperators$3<TSelf, TSelf, TSelf>, System.Numerics.IAdditiveIdentity$2<TSelf, TSelf>, System.Numerics.IDecrementOperators$1<TSelf>, System.Numerics.IDivisionOperators$3<TSelf, TSelf, TSelf>, System.IEquatable$1<TSelf>, System.Numerics.IEqualityOperators$3<TSelf, TSelf, boolean>, System.Numerics.IIncrementOperators$1<TSelf>, System.Numerics.IMultiplicativeIdentity$2<TSelf, TSelf>, System.Numerics.IMultiplyOperators$3<TSelf, TSelf, TSelf>, System.ISpanFormattable, System.IFormattable, System.ISpanParsable$1<TSelf>, System.IParsable$1<TSelf>, System.Numerics.ISubtractionOperators$3<TSelf, TSelf, TSelf>, System.Numerics.IUnaryPlusOperators$2<TSelf, TSelf>, System.Numerics.IUnaryNegationOperators$2<TSelf, TSelf>, System.IUtf8SpanParsable$1<TSelf>
        {
        }
        interface IFloatingPoint$1<TSelf> extends System.Numerics.IFloatingPointConstants$1<TSelf>, System.Numerics.INumberBase$1<TSelf>, System.Numerics.IAdditionOperators$3<TSelf, TSelf, TSelf>, System.Numerics.IAdditiveIdentity$2<TSelf, TSelf>, System.Numerics.IDecrementOperators$1<TSelf>, System.Numerics.IDivisionOperators$3<TSelf, TSelf, TSelf>, System.IEquatable$1<TSelf>, System.Numerics.IEqualityOperators$3<TSelf, TSelf, boolean>, System.Numerics.IIncrementOperators$1<TSelf>, System.Numerics.IMultiplicativeIdentity$2<TSelf, TSelf>, System.Numerics.IMultiplyOperators$3<TSelf, TSelf, TSelf>, System.ISpanFormattable, System.IFormattable, System.ISpanParsable$1<TSelf>, System.IParsable$1<TSelf>, System.Numerics.ISubtractionOperators$3<TSelf, TSelf, TSelf>, System.Numerics.IUnaryPlusOperators$2<TSelf, TSelf>, System.Numerics.IUnaryNegationOperators$2<TSelf, TSelf>, System.IUtf8SpanParsable$1<TSelf>, System.Numerics.INumber$1<TSelf>, System.IComparable, System.IComparable$1<TSelf>, System.Numerics.IComparisonOperators$3<TSelf, TSelf, boolean>, System.Numerics.IModulusOperators$3<TSelf, TSelf, TSelf>, System.Numerics.ISignedNumber$1<TSelf>
        {
        }
        interface IFloatingPointConstants$1<TSelf> extends System.Numerics.INumberBase$1<TSelf>, System.Numerics.IAdditionOperators$3<TSelf, TSelf, TSelf>, System.Numerics.IAdditiveIdentity$2<TSelf, TSelf>, System.Numerics.IDecrementOperators$1<TSelf>, System.Numerics.IDivisionOperators$3<TSelf, TSelf, TSelf>, System.IEquatable$1<TSelf>, System.Numerics.IEqualityOperators$3<TSelf, TSelf, boolean>, System.Numerics.IIncrementOperators$1<TSelf>, System.Numerics.IMultiplicativeIdentity$2<TSelf, TSelf>, System.Numerics.IMultiplyOperators$3<TSelf, TSelf, TSelf>, System.ISpanFormattable, System.IFormattable, System.ISpanParsable$1<TSelf>, System.IParsable$1<TSelf>, System.Numerics.ISubtractionOperators$3<TSelf, TSelf, TSelf>, System.Numerics.IUnaryPlusOperators$2<TSelf, TSelf>, System.Numerics.IUnaryNegationOperators$2<TSelf, TSelf>, System.IUtf8SpanParsable$1<TSelf>
        {
        }
        interface IBinaryFloatingPointIeee754$1<TSelf> extends System.Numerics.IBinaryNumber$1<TSelf>, System.Numerics.IBitwiseOperators$3<TSelf, TSelf, TSelf>, System.Numerics.INumber$1<TSelf>, System.IComparable, System.IComparable$1<TSelf>, System.Numerics.IComparisonOperators$3<TSelf, TSelf, boolean>, System.Numerics.IEqualityOperators$3<TSelf, TSelf, boolean>, System.Numerics.IModulusOperators$3<TSelf, TSelf, TSelf>, System.Numerics.INumberBase$1<TSelf>, System.Numerics.IAdditionOperators$3<TSelf, TSelf, TSelf>, System.Numerics.IAdditiveIdentity$2<TSelf, TSelf>, System.Numerics.IDecrementOperators$1<TSelf>, System.Numerics.IDivisionOperators$3<TSelf, TSelf, TSelf>, System.IEquatable$1<TSelf>, System.Numerics.IIncrementOperators$1<TSelf>, System.Numerics.IMultiplicativeIdentity$2<TSelf, TSelf>, System.Numerics.IMultiplyOperators$3<TSelf, TSelf, TSelf>, System.ISpanFormattable, System.IFormattable, System.ISpanParsable$1<TSelf>, System.IParsable$1<TSelf>, System.Numerics.ISubtractionOperators$3<TSelf, TSelf, TSelf>, System.Numerics.IUnaryPlusOperators$2<TSelf, TSelf>, System.Numerics.IUnaryNegationOperators$2<TSelf, TSelf>, System.IUtf8SpanParsable$1<TSelf>, System.Numerics.IFloatingPointIeee754$1<TSelf>, System.Numerics.IExponentialFunctions$1<TSelf>, System.Numerics.IFloatingPointConstants$1<TSelf>, System.Numerics.IFloatingPoint$1<TSelf>, System.Numerics.ISignedNumber$1<TSelf>, System.Numerics.IHyperbolicFunctions$1<TSelf>, System.Numerics.ILogarithmicFunctions$1<TSelf>, System.Numerics.IPowerFunctions$1<TSelf>, System.Numerics.IRootFunctions$1<TSelf>, System.Numerics.ITrigonometricFunctions$1<TSelf>
        {
        }
        interface IFloatingPointIeee754$1<TSelf> extends System.Numerics.IExponentialFunctions$1<TSelf>, System.Numerics.IFloatingPointConstants$1<TSelf>, System.Numerics.INumberBase$1<TSelf>, System.Numerics.IAdditionOperators$3<TSelf, TSelf, TSelf>, System.Numerics.IAdditiveIdentity$2<TSelf, TSelf>, System.Numerics.IDecrementOperators$1<TSelf>, System.Numerics.IDivisionOperators$3<TSelf, TSelf, TSelf>, System.IEquatable$1<TSelf>, System.Numerics.IEqualityOperators$3<TSelf, TSelf, boolean>, System.Numerics.IIncrementOperators$1<TSelf>, System.Numerics.IMultiplicativeIdentity$2<TSelf, TSelf>, System.Numerics.IMultiplyOperators$3<TSelf, TSelf, TSelf>, System.ISpanFormattable, System.IFormattable, System.ISpanParsable$1<TSelf>, System.IParsable$1<TSelf>, System.Numerics.ISubtractionOperators$3<TSelf, TSelf, TSelf>, System.Numerics.IUnaryPlusOperators$2<TSelf, TSelf>, System.Numerics.IUnaryNegationOperators$2<TSelf, TSelf>, System.IUtf8SpanParsable$1<TSelf>, System.Numerics.IFloatingPoint$1<TSelf>, System.Numerics.INumber$1<TSelf>, System.IComparable, System.IComparable$1<TSelf>, System.Numerics.IComparisonOperators$3<TSelf, TSelf, boolean>, System.Numerics.IModulusOperators$3<TSelf, TSelf, TSelf>, System.Numerics.ISignedNumber$1<TSelf>, System.Numerics.IHyperbolicFunctions$1<TSelf>, System.Numerics.ILogarithmicFunctions$1<TSelf>, System.Numerics.IPowerFunctions$1<TSelf>, System.Numerics.IRootFunctions$1<TSelf>, System.Numerics.ITrigonometricFunctions$1<TSelf>
        {
        }
        interface IExponentialFunctions$1<TSelf> extends System.Numerics.IFloatingPointConstants$1<TSelf>, System.Numerics.INumberBase$1<TSelf>, System.Numerics.IAdditionOperators$3<TSelf, TSelf, TSelf>, System.Numerics.IAdditiveIdentity$2<TSelf, TSelf>, System.Numerics.IDecrementOperators$1<TSelf>, System.Numerics.IDivisionOperators$3<TSelf, TSelf, TSelf>, System.IEquatable$1<TSelf>, System.Numerics.IEqualityOperators$3<TSelf, TSelf, boolean>, System.Numerics.IIncrementOperators$1<TSelf>, System.Numerics.IMultiplicativeIdentity$2<TSelf, TSelf>, System.Numerics.IMultiplyOperators$3<TSelf, TSelf, TSelf>, System.ISpanFormattable, System.IFormattable, System.ISpanParsable$1<TSelf>, System.IParsable$1<TSelf>, System.Numerics.ISubtractionOperators$3<TSelf, TSelf, TSelf>, System.Numerics.IUnaryPlusOperators$2<TSelf, TSelf>, System.Numerics.IUnaryNegationOperators$2<TSelf, TSelf>, System.IUtf8SpanParsable$1<TSelf>
        {
        }
        interface IHyperbolicFunctions$1<TSelf> extends System.Numerics.IFloatingPointConstants$1<TSelf>, System.Numerics.INumberBase$1<TSelf>, System.Numerics.IAdditionOperators$3<TSelf, TSelf, TSelf>, System.Numerics.IAdditiveIdentity$2<TSelf, TSelf>, System.Numerics.IDecrementOperators$1<TSelf>, System.Numerics.IDivisionOperators$3<TSelf, TSelf, TSelf>, System.IEquatable$1<TSelf>, System.Numerics.IEqualityOperators$3<TSelf, TSelf, boolean>, System.Numerics.IIncrementOperators$1<TSelf>, System.Numerics.IMultiplicativeIdentity$2<TSelf, TSelf>, System.Numerics.IMultiplyOperators$3<TSelf, TSelf, TSelf>, System.ISpanFormattable, System.IFormattable, System.ISpanParsable$1<TSelf>, System.IParsable$1<TSelf>, System.Numerics.ISubtractionOperators$3<TSelf, TSelf, TSelf>, System.Numerics.IUnaryPlusOperators$2<TSelf, TSelf>, System.Numerics.IUnaryNegationOperators$2<TSelf, TSelf>, System.IUtf8SpanParsable$1<TSelf>
        {
        }
        interface ILogarithmicFunctions$1<TSelf> extends System.Numerics.IFloatingPointConstants$1<TSelf>, System.Numerics.INumberBase$1<TSelf>, System.Numerics.IAdditionOperators$3<TSelf, TSelf, TSelf>, System.Numerics.IAdditiveIdentity$2<TSelf, TSelf>, System.Numerics.IDecrementOperators$1<TSelf>, System.Numerics.IDivisionOperators$3<TSelf, TSelf, TSelf>, System.IEquatable$1<TSelf>, System.Numerics.IEqualityOperators$3<TSelf, TSelf, boolean>, System.Numerics.IIncrementOperators$1<TSelf>, System.Numerics.IMultiplicativeIdentity$2<TSelf, TSelf>, System.Numerics.IMultiplyOperators$3<TSelf, TSelf, TSelf>, System.ISpanFormattable, System.IFormattable, System.ISpanParsable$1<TSelf>, System.IParsable$1<TSelf>, System.Numerics.ISubtractionOperators$3<TSelf, TSelf, TSelf>, System.Numerics.IUnaryPlusOperators$2<TSelf, TSelf>, System.Numerics.IUnaryNegationOperators$2<TSelf, TSelf>, System.IUtf8SpanParsable$1<TSelf>
        {
        }
        interface IPowerFunctions$1<TSelf> extends System.Numerics.INumberBase$1<TSelf>, System.Numerics.IAdditionOperators$3<TSelf, TSelf, TSelf>, System.Numerics.IAdditiveIdentity$2<TSelf, TSelf>, System.Numerics.IDecrementOperators$1<TSelf>, System.Numerics.IDivisionOperators$3<TSelf, TSelf, TSelf>, System.IEquatable$1<TSelf>, System.Numerics.IEqualityOperators$3<TSelf, TSelf, boolean>, System.Numerics.IIncrementOperators$1<TSelf>, System.Numerics.IMultiplicativeIdentity$2<TSelf, TSelf>, System.Numerics.IMultiplyOperators$3<TSelf, TSelf, TSelf>, System.ISpanFormattable, System.IFormattable, System.ISpanParsable$1<TSelf>, System.IParsable$1<TSelf>, System.Numerics.ISubtractionOperators$3<TSelf, TSelf, TSelf>, System.Numerics.IUnaryPlusOperators$2<TSelf, TSelf>, System.Numerics.IUnaryNegationOperators$2<TSelf, TSelf>, System.IUtf8SpanParsable$1<TSelf>
        {
        }
        interface IRootFunctions$1<TSelf> extends System.Numerics.IFloatingPointConstants$1<TSelf>, System.Numerics.INumberBase$1<TSelf>, System.Numerics.IAdditionOperators$3<TSelf, TSelf, TSelf>, System.Numerics.IAdditiveIdentity$2<TSelf, TSelf>, System.Numerics.IDecrementOperators$1<TSelf>, System.Numerics.IDivisionOperators$3<TSelf, TSelf, TSelf>, System.IEquatable$1<TSelf>, System.Numerics.IEqualityOperators$3<TSelf, TSelf, boolean>, System.Numerics.IIncrementOperators$1<TSelf>, System.Numerics.IMultiplicativeIdentity$2<TSelf, TSelf>, System.Numerics.IMultiplyOperators$3<TSelf, TSelf, TSelf>, System.ISpanFormattable, System.IFormattable, System.ISpanParsable$1<TSelf>, System.IParsable$1<TSelf>, System.Numerics.ISubtractionOperators$3<TSelf, TSelf, TSelf>, System.Numerics.IUnaryPlusOperators$2<TSelf, TSelf>, System.Numerics.IUnaryNegationOperators$2<TSelf, TSelf>, System.IUtf8SpanParsable$1<TSelf>
        {
        }
        interface ITrigonometricFunctions$1<TSelf> extends System.Numerics.IFloatingPointConstants$1<TSelf>, System.Numerics.INumberBase$1<TSelf>, System.Numerics.IAdditionOperators$3<TSelf, TSelf, TSelf>, System.Numerics.IAdditiveIdentity$2<TSelf, TSelf>, System.Numerics.IDecrementOperators$1<TSelf>, System.Numerics.IDivisionOperators$3<TSelf, TSelf, TSelf>, System.IEquatable$1<TSelf>, System.Numerics.IEqualityOperators$3<TSelf, TSelf, boolean>, System.Numerics.IIncrementOperators$1<TSelf>, System.Numerics.IMultiplicativeIdentity$2<TSelf, TSelf>, System.Numerics.IMultiplyOperators$3<TSelf, TSelf, TSelf>, System.ISpanFormattable, System.IFormattable, System.ISpanParsable$1<TSelf>, System.IParsable$1<TSelf>, System.Numerics.ISubtractionOperators$3<TSelf, TSelf, TSelf>, System.Numerics.IUnaryPlusOperators$2<TSelf, TSelf>, System.Numerics.IUnaryNegationOperators$2<TSelf, TSelf>, System.IUtf8SpanParsable$1<TSelf>
        {
        }
    }
    namespace System.Reflection {
        class MemberInfo extends System.Object implements System.Reflection.ICustomAttributeProvider
        {
            protected [__keep_incompatibility]: never;
            public get MemberType(): System.Reflection.MemberTypes;
            public get Name(): string;
            public get DeclaringType(): System.Type;
            public get ReflectedType(): System.Type;
            public get Module(): System.Reflection.Module;
            public get CustomAttributes(): System.Collections.Generic.IEnumerable$1<System.Reflection.CustomAttributeData>;
            public get IsCollectible(): boolean;
            public get MetadataToken(): number;
            public HasSameMetadataDefinitionAs ($other: System.Reflection.MemberInfo) : boolean
            public IsDefined ($attributeType: System.Type, $inherit: boolean) : boolean
            public GetCustomAttributes ($inherit: boolean) : System.Array$1<any>
            public GetCustomAttributes ($attributeType: System.Type, $inherit: boolean) : System.Array$1<any>
            public GetCustomAttributesData () : System.Collections.Generic.IList$1<System.Reflection.CustomAttributeData>
            public static op_Equality ($left: System.Reflection.MemberInfo, $right: System.Reflection.MemberInfo) : boolean
            public static op_Inequality ($left: System.Reflection.MemberInfo, $right: System.Reflection.MemberInfo) : boolean
        }
        interface ICustomAttributeProvider
        {
        }
        interface IReflect
        {
        }
        class MethodBase extends System.Reflection.MemberInfo implements System.Reflection.ICustomAttributeProvider
        {
            protected [__keep_incompatibility]: never;
        }
        class MethodInfo extends System.Reflection.MethodBase implements System.Reflection.ICustomAttributeProvider
        {
            protected [__keep_incompatibility]: never;
            public get MemberType(): System.Reflection.MemberTypes;
            public get ReturnParameter(): System.Reflection.ParameterInfo;
            public get ReturnType(): System.Type;
            public get ReturnTypeCustomAttributes(): System.Reflection.ICustomAttributeProvider;
            public GetGenericMethodDefinition () : System.Reflection.MethodInfo
            public MakeGenericMethod (...typeArguments: System.Type[]) : System.Reflection.MethodInfo
            public GetBaseDefinition () : System.Reflection.MethodInfo
            public CreateDelegate ($delegateType: System.Type) : Function
            public CreateDelegate ($delegateType: System.Type, $target: any) : Function
            public static op_Equality ($left: System.Reflection.MethodInfo, $right: System.Reflection.MethodInfo) : boolean
            public static op_Inequality ($left: System.Reflection.MethodInfo, $right: System.Reflection.MethodInfo) : boolean
            public static op_Equality ($left: System.Reflection.MemberInfo, $right: System.Reflection.MemberInfo) : boolean
            public static op_Inequality ($left: System.Reflection.MemberInfo, $right: System.Reflection.MemberInfo) : boolean
        }
        enum MemberTypes
        { Constructor = 1, Event = 2, Field = 4, Method = 8, Property = 16, TypeInfo = 32, Custom = 64, NestedType = 128, All = 191 }
        class Module extends System.Object implements System.Reflection.ICustomAttributeProvider, System.Runtime.Serialization.ISerializable
        {
            protected [__keep_incompatibility]: never;
        }
        class CustomAttributeData extends System.Object
        {
            protected [__keep_incompatibility]: never;
        }
        class ParameterInfo extends System.Object implements System.Reflection.ICustomAttributeProvider, System.Runtime.Serialization.IObjectReference
        {
            protected [__keep_incompatibility]: never;
        }
        class TypeInfo extends System.Type implements System.Reflection.ICustomAttributeProvider, System.Reflection.IReflect, System.Reflection.IReflectableType
        {
            protected [__keep_incompatibility]: never;
            public get GenericTypeParameters(): System.Array$1<System.Type>;
            public get DeclaredConstructors(): System.Collections.Generic.IEnumerable$1<System.Reflection.ConstructorInfo>;
            public get DeclaredEvents(): System.Collections.Generic.IEnumerable$1<System.Reflection.EventInfo>;
            public get DeclaredFields(): System.Collections.Generic.IEnumerable$1<System.Reflection.FieldInfo>;
            public get DeclaredMembers(): System.Collections.Generic.IEnumerable$1<System.Reflection.MemberInfo>;
            public get DeclaredMethods(): System.Collections.Generic.IEnumerable$1<System.Reflection.MethodInfo>;
            public get DeclaredNestedTypes(): System.Collections.Generic.IEnumerable$1<System.Reflection.TypeInfo>;
            public get DeclaredProperties(): System.Collections.Generic.IEnumerable$1<System.Reflection.PropertyInfo>;
            public get ImplementedInterfaces(): System.Collections.Generic.IEnumerable$1<System.Type>;
            public AsType () : System.Type
            public GetDeclaredEvent ($name: string) : System.Reflection.EventInfo
            public GetDeclaredField ($name: string) : System.Reflection.FieldInfo
            public GetDeclaredMethod ($name: string) : System.Reflection.MethodInfo
            public GetDeclaredNestedType ($name: string) : System.Reflection.TypeInfo
            public GetDeclaredProperty ($name: string) : System.Reflection.PropertyInfo
            public GetDeclaredMethods ($name: string) : System.Collections.Generic.IEnumerable$1<System.Reflection.MethodInfo>
            public IsAssignableFrom ($typeInfo: System.Reflection.TypeInfo) : boolean
            public IsAssignableFrom ($c: System.Type) : boolean
        }
        interface IReflectableType
        {
        }
        class EventInfo extends System.Reflection.MemberInfo implements System.Reflection.ICustomAttributeProvider
        {
            protected [__keep_incompatibility]: never;
        }
        class FieldInfo extends System.Reflection.MemberInfo implements System.Reflection.ICustomAttributeProvider
        {
            protected [__keep_incompatibility]: never;
        }
        class PropertyInfo extends System.Reflection.MemberInfo implements System.Reflection.ICustomAttributeProvider
        {
            protected [__keep_incompatibility]: never;
        }
        class ConstructorInfo extends System.Reflection.MethodBase implements System.Reflection.ICustomAttributeProvider
        {
            protected [__keep_incompatibility]: never;
        }
        interface MemberFilter
        { 
        (m: System.Reflection.MemberInfo, filterCriteria: any) : boolean; 
        Invoke?: (m: System.Reflection.MemberInfo, filterCriteria: any) => boolean;
        }
        var MemberFilter: { new (func: (m: System.Reflection.MemberInfo, filterCriteria: any) => boolean): MemberFilter; }
        class AssemblyName extends System.Object implements System.ICloneable, System.Runtime.Serialization.IDeserializationCallback, System.Runtime.Serialization.ISerializable
        {
            protected [__keep_incompatibility]: never;
        }
        class Assembly extends System.Object implements System.Reflection.ICustomAttributeProvider, System.Runtime.Serialization.ISerializable
        {
            protected [__keep_incompatibility]: never;
        }
        enum GenericParameterAttributes
        { None = 0, VarianceMask = 3, Covariant = 1, Contravariant = 2, SpecialConstraintMask = 28, ReferenceTypeConstraint = 4, NotNullableValueTypeConstraint = 8, DefaultConstructorConstraint = 16 }
        enum TypeAttributes
        { VisibilityMask = 7, NotPublic = 0, Public = 1, NestedPublic = 2, NestedPrivate = 3, NestedFamily = 4, NestedAssembly = 5, NestedFamANDAssem = 6, NestedFamORAssem = 7, LayoutMask = 24, AutoLayout = 0, SequentialLayout = 8, ExplicitLayout = 16, ClassSemanticsMask = 32, Class = 0, Interface = 32, Abstract = 128, Sealed = 256, SpecialName = 1024, Import = 4096, Serializable = 8192, WindowsRuntime = 16384, StringFormatMask = 196608, AnsiClass = 0, UnicodeClass = 65536, AutoClass = 131072, CustomFormatClass = 196608, CustomFormatMask = 12582912, BeforeFieldInit = 1048576, RTSpecialName = 2048, HasSecurity = 262144, ReservedMask = 264192 }
        enum BindingFlags
        { Default = 0, IgnoreCase = 1, DeclaredOnly = 2, Instance = 4, Static = 8, Public = 16, NonPublic = 32, FlattenHierarchy = 64, InvokeMethod = 256, CreateInstance = 512, GetField = 1024, SetField = 2048, GetProperty = 4096, SetProperty = 8192, PutDispProperty = 16384, PutRefDispProperty = 32768, ExactBinding = 65536, SuppressChangeType = 131072, OptionalParamBinding = 262144, IgnoreReturn = 16777216, DoNotWrapExceptions = 33554432 }
        class Binder extends System.Object
        {
            protected [__keep_incompatibility]: never;
        }
        class ParameterModifier extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
        }
        enum CallingConventions
        { Standard = 1, VarArgs = 2, Any = 3, HasThis = 32, ExplicitThis = 64 }
        class InterfaceMapping extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
        }
        interface TypeFilter
        { 
        (m: System.Type, filterCriteria: any) : boolean; 
        Invoke?: (m: System.Type, filterCriteria: any) => boolean;
        }
        var TypeFilter: { new (func: (m: System.Type, filterCriteria: any) => boolean): TypeFilter; }
    }
    namespace System.Collections {
        interface IEnumerable
        {
            GetEnumerator () : System.Collections.IEnumerator
        }
        interface IList extends System.Collections.ICollection, System.Collections.IEnumerable
        {
            GetEnumerator () : System.Collections.IEnumerator
        }
        interface ICollection extends System.Collections.IEnumerable
        {
            GetEnumerator () : System.Collections.IEnumerator
        }
        interface IStructuralComparable
        {
        }
        interface IStructuralEquatable
        {
        }
        interface IEnumerator
        {
        }
        interface IDictionary extends System.Collections.ICollection, System.Collections.IEnumerable
        {
            GetEnumerator () : System.Collections.IEnumerator
        }
        interface IDictionaryEnumerator extends System.Collections.IEnumerator
        {
        }
    }
    namespace System.Collections.Generic {
        interface IEnumerable$1<T> extends System.Collections.IEnumerable
        {
            GetEnumerator () : System.Collections.IEnumerator
        }
        interface IList$1<T> extends System.Collections.Generic.ICollection$1<T>, System.Collections.Generic.IEnumerable$1<T>, System.Collections.IEnumerable
        {
            GetEnumerator () : System.Collections.IEnumerator
        }
        interface ICollection$1<T> extends System.Collections.Generic.IEnumerable$1<T>, System.Collections.IEnumerable
        {
            GetEnumerator () : System.Collections.IEnumerator
        }
        interface IReadOnlyList$1<T> extends System.Collections.Generic.IReadOnlyCollection$1<T>, System.Collections.Generic.IEnumerable$1<T>, System.Collections.IEnumerable
        {
            GetEnumerator () : System.Collections.IEnumerator
        }
        interface IReadOnlyCollection$1<T> extends System.Collections.Generic.IEnumerable$1<T>, System.Collections.IEnumerable
        {
            GetEnumerator () : System.Collections.IEnumerator
        }
        class Dictionary$2<TKey, TValue> extends System.Object implements System.Collections.Generic.IDictionary$2<TKey, TValue>, System.Collections.Generic.ICollection$1<System.Collections.Generic.KeyValuePair$2<TKey, TValue>>, System.Collections.Generic.IEnumerable$1<System.Collections.Generic.KeyValuePair$2<TKey, TValue>>, System.Collections.IEnumerable, System.Collections.IDictionary, System.Collections.ICollection, System.Collections.Generic.IReadOnlyDictionary$2<TKey, TValue>, System.Collections.Generic.IReadOnlyCollection$1<System.Collections.Generic.KeyValuePair$2<TKey, TValue>>, System.Runtime.Serialization.ISerializable, System.Runtime.Serialization.IDeserializationCallback
        {
            protected [__keep_incompatibility]: never;
            public get Comparer(): System.Collections.Generic.IEqualityComparer$1<TKey>;
            public get Count(): number;
            public get Keys(): System.Collections.Generic.Dictionary$2.KeyCollection<TKey, TValue>;
            public get Values(): System.Collections.Generic.Dictionary$2.ValueCollection<TKey, TValue>;
            public get_Item ($key: TKey) : TValue
            public set_Item ($key: TKey, $value: TValue) : void
            public Add ($key: TKey, $value: TValue) : void
            public Clear () : void
            public ContainsKey ($key: TKey) : boolean
            public ContainsValue ($value: TValue) : boolean
            public GetEnumerator () : System.Collections.Generic.Dictionary$2.Enumerator<TKey, TValue>
            public OnDeserialization ($sender: any) : void
            public Remove ($key: TKey) : boolean
            public Remove ($key: TKey, $value: $Ref<TValue>) : boolean
            public TryGetValue ($key: TKey, $value: $Ref<TValue>) : boolean
            public TryAdd ($key: TKey, $value: TValue) : boolean
            public EnsureCapacity ($capacity: number) : number
            public TrimExcess () : void
            public TrimExcess ($capacity: number) : void
            public constructor ()
            public constructor ($capacity: number)
            public constructor ($comparer: System.Collections.Generic.IEqualityComparer$1<TKey>)
            public constructor ($capacity: number, $comparer: System.Collections.Generic.IEqualityComparer$1<TKey>)
            public constructor ($dictionary: System.Collections.Generic.IDictionary$2<TKey, TValue>)
            public constructor ($dictionary: System.Collections.Generic.IDictionary$2<TKey, TValue>, $comparer: System.Collections.Generic.IEqualityComparer$1<TKey>)
            public constructor ($collection: System.Collections.Generic.IEnumerable$1<System.Collections.Generic.KeyValuePair$2<TKey, TValue>>)
            public constructor ($collection: System.Collections.Generic.IEnumerable$1<System.Collections.Generic.KeyValuePair$2<TKey, TValue>>, $comparer: System.Collections.Generic.IEqualityComparer$1<TKey>)
            public GetEnumerator () : System.Collections.IEnumerator
            public [Symbol.iterator]() : IterableIterator<System.Collections.Generic.KeyValuePair$2<TKey, TValue>>
        }
        interface IDictionary$2<TKey, TValue> extends System.Collections.Generic.ICollection$1<System.Collections.Generic.KeyValuePair$2<TKey, TValue>>, System.Collections.Generic.IEnumerable$1<System.Collections.Generic.KeyValuePair$2<TKey, TValue>>, System.Collections.IEnumerable
        {
            GetEnumerator () : System.Collections.IEnumerator
        }
        class KeyValuePair$2<TKey, TValue> extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
        }
        interface IReadOnlyDictionary$2<TKey, TValue> extends System.Collections.Generic.IReadOnlyCollection$1<System.Collections.Generic.KeyValuePair$2<TKey, TValue>>, System.Collections.Generic.IEnumerable$1<System.Collections.Generic.KeyValuePair$2<TKey, TValue>>, System.Collections.IEnumerable
        {
            GetEnumerator () : System.Collections.IEnumerator
        }
        interface IEqualityComparer$1<T>
        {
        }
        interface IEnumerator$1<T> extends System.IDisposable, System.Collections.IEnumerator
        {
        }
        class List$1<T> extends System.Object implements System.Collections.Generic.IList$1<T>, System.Collections.Generic.ICollection$1<T>, System.Collections.Generic.IEnumerable$1<T>, System.Collections.IEnumerable, System.Collections.IList, System.Collections.ICollection, System.Collections.Generic.IReadOnlyList$1<T>, System.Collections.Generic.IReadOnlyCollection$1<T>
        {
            protected [__keep_incompatibility]: never;
            public get Capacity(): number;
            public set Capacity(value: number);
            public get Count(): number;
            public get_Item ($index: number) : T
            public set_Item ($index: number, $value: T) : void
            public Add ($item: T) : void
            public AddRange ($collection: System.Collections.Generic.IEnumerable$1<T>) : void
            public AsReadOnly () : System.Collections.ObjectModel.ReadOnlyCollection$1<T>
            public BinarySearch ($index: number, $count: number, $item: T, $comparer: System.Collections.Generic.IComparer$1<T>) : number
            public BinarySearch ($item: T) : number
            public BinarySearch ($item: T, $comparer: System.Collections.Generic.IComparer$1<T>) : number
            public Clear () : void
            public Contains ($item: T) : boolean
            public CopyTo ($array: System.Array$1<T>) : void
            public CopyTo ($index: number, $array: System.Array$1<T>, $arrayIndex: number, $count: number) : void
            public CopyTo ($array: System.Array$1<T>, $arrayIndex: number) : void
            public EnsureCapacity ($capacity: number) : number
            public Exists ($match: System.Predicate$1<T>) : boolean
            public Find ($match: System.Predicate$1<T>) : T
            public FindAll ($match: System.Predicate$1<T>) : System.Collections.Generic.List$1<T>
            public FindIndex ($match: System.Predicate$1<T>) : number
            public FindIndex ($startIndex: number, $match: System.Predicate$1<T>) : number
            public FindIndex ($startIndex: number, $count: number, $match: System.Predicate$1<T>) : number
            public FindLast ($match: System.Predicate$1<T>) : T
            public FindLastIndex ($match: System.Predicate$1<T>) : number
            public FindLastIndex ($startIndex: number, $match: System.Predicate$1<T>) : number
            public FindLastIndex ($startIndex: number, $count: number, $match: System.Predicate$1<T>) : number
            public ForEach ($action: System.Action$1<T>) : void
            public GetEnumerator () : System.Collections.Generic.List$1.Enumerator<T>
            public GetRange ($index: number, $count: number) : System.Collections.Generic.List$1<T>
            public Slice ($start: number, $length: number) : System.Collections.Generic.List$1<T>
            public IndexOf ($item: T) : number
            public IndexOf ($item: T, $index: number) : number
            public IndexOf ($item: T, $index: number, $count: number) : number
            public Insert ($index: number, $item: T) : void
            public InsertRange ($index: number, $collection: System.Collections.Generic.IEnumerable$1<T>) : void
            public LastIndexOf ($item: T) : number
            public LastIndexOf ($item: T, $index: number) : number
            public LastIndexOf ($item: T, $index: number, $count: number) : number
            public Remove ($item: T) : boolean
            public RemoveAll ($match: System.Predicate$1<T>) : number
            public RemoveAt ($index: number) : void
            public RemoveRange ($index: number, $count: number) : void
            public Reverse () : void
            public Reverse ($index: number, $count: number) : void
            public Sort () : void
            public Sort ($comparer: System.Collections.Generic.IComparer$1<T>) : void
            public Sort ($index: number, $count: number, $comparer: System.Collections.Generic.IComparer$1<T>) : void
            public Sort ($comparison: System.Comparison$1<T>) : void
            public ToArray () : System.Array$1<T>
            public TrimExcess () : void
            public TrueForAll ($match: System.Predicate$1<T>) : boolean
            public constructor ()
            public constructor ($capacity: number)
            public constructor ($collection: System.Collections.Generic.IEnumerable$1<T>)
            public GetEnumerator () : System.Collections.IEnumerator
            public [Symbol.iterator]() : IterableIterator<T>
        }
        interface IComparer$1<T>
        {
        }
    }
    namespace System.Runtime.InteropServices {
        class StructLayoutAttribute extends System.Attribute
        {
            protected [__keep_incompatibility]: never;
        }
    }
    namespace System.Globalization {
        class CultureInfo extends System.Object implements System.IFormatProvider, System.ICloneable
        {
            protected [__keep_incompatibility]: never;
        }
    }
    namespace System.IO {
        class TextReader extends System.MarshalByRefObject implements System.IDisposable
        {
            protected [__keep_incompatibility]: never;
        }
        class TextWriter extends System.MarshalByRefObject implements System.IDisposable, System.IAsyncDisposable
        {
            protected [__keep_incompatibility]: never;
        }
        class Stream extends System.MarshalByRefObject implements System.IDisposable, System.IAsyncDisposable
        {
            protected [__keep_incompatibility]: never;
        }
    }
    namespace System.Text {
        class Encoding extends System.Object implements System.ICloneable
        {
            protected [__keep_incompatibility]: never;
        }
    }
    namespace System.Runtime.CompilerServices {
        interface ITuple
        {
        }
    }
    namespace System.Collections.Generic.Dictionary$2 {
        class KeyCollection<TKey, TValue> extends System.Object implements System.Collections.Generic.ICollection$1<TKey>, System.Collections.Generic.IEnumerable$1<TKey>, System.Collections.IEnumerable, System.Collections.ICollection, System.Collections.Generic.IReadOnlyCollection$1<TKey>
        {
            protected [__keep_incompatibility]: never;
            public GetEnumerator () : System.Collections.IEnumerator
            public [Symbol.iterator]() : IterableIterator<TKey>
        }
        class ValueCollection<TKey, TValue> extends System.Object implements System.Collections.Generic.ICollection$1<TValue>, System.Collections.Generic.IEnumerable$1<TValue>, System.Collections.IEnumerable, System.Collections.ICollection, System.Collections.Generic.IReadOnlyCollection$1<TValue>
        {
            protected [__keep_incompatibility]: never;
            public GetEnumerator () : System.Collections.IEnumerator
            public [Symbol.iterator]() : IterableIterator<TValue>
        }
        class Enumerator<TKey, TValue> extends System.ValueType implements System.Collections.Generic.IEnumerator$1<System.Collections.Generic.KeyValuePair$2<TKey, TValue>>, System.IDisposable, System.Collections.IEnumerator, System.Collections.IDictionaryEnumerator
        {
            protected [__keep_incompatibility]: never;
        }
    }
    namespace System.Collections.ObjectModel {
        class ReadOnlyCollection$1<T> extends System.Object implements System.Collections.Generic.IList$1<T>, System.Collections.Generic.ICollection$1<T>, System.Collections.Generic.IEnumerable$1<T>, System.Collections.IEnumerable, System.Collections.IList, System.Collections.ICollection, System.Collections.Generic.IReadOnlyList$1<T>, System.Collections.Generic.IReadOnlyCollection$1<T>
        {
            protected [__keep_incompatibility]: never;
            public GetEnumerator () : System.Collections.IEnumerator
            public [Symbol.iterator]() : IterableIterator<T>
        }
    }
    namespace System.Collections.Generic.List$1 {
        class Enumerator<T> extends System.ValueType implements System.Collections.Generic.IEnumerator$1<T>, System.IDisposable, System.Collections.IEnumerator
        {
            protected [__keep_incompatibility]: never;
        }
    }
    namespace Puerts {
        class Any$1<T> extends System.Object implements Puerts.TypedValue
        {
            protected [__keep_incompatibility]: never;
        }
        interface TypedValue
        {
        }
        class FloatValue extends Puerts.Any$1<number> implements Puerts.TypedValue
        {
            protected [__keep_incompatibility]: never;
            public constructor ($i: number)
        }
        class Int64Value extends Puerts.Any$1<bigint> implements Puerts.TypedValue
        {
            protected [__keep_incompatibility]: never;
            public constructor ($i: bigint)
            public constructor ($str: string)
        }
        interface IResolvableLoader
        {
        }
        interface ILoader
        {
        }
        interface IModuleChecker
        {
        }
        class ArrayBuffer extends System.Object
        {
            protected [__keep_incompatibility]: never;
        }
    }
    namespace ConsoleAot {
        class ScriptLoader extends System.Object implements Puerts.IResolvableLoader, Puerts.ILoader, Puerts.IModuleChecker
        {
            protected [__keep_incompatibility]: never;
            public static PathToBinDir ($appendix: string) : string
            public Resolve ($specifier: string, $referrer: string) : string
            public FileExists ($filepath: string) : boolean
            public ReadFile ($filepath: string, $debugPath: $Ref<string>) : string
            public IsESM ($filepath: string) : boolean
            public constructor ()
        }
    }
    namespace ConsoleAot.Examples {
        class CsObject extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public get Name(): string;
            public set Name(value: string);
            public constructor ()
        }
        class CsCallJsTestClass extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public Func : System.Func$2<ConsoleAot.Examples.CsObject, number>
            public static Instance : ConsoleAot.Examples.CsCallJsTestClass
            public constructor ()
        }
    }
    namespace PuertsTest {
        enum MyEnum
        { E1 = 0, E2 = 1 }
        class BaseClass extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static BSF : number
            public get BMF(): number;
            public set BMF(value: number);
            public static BSFunc () : void
            public BMFunc () : void
            public constructor ()
        }
        interface BaseClass {
            PlainExtension () : void;
            Extension1 () : PuertsTest.BaseClass;
            Extension2 ($b: string) : PuertsTest.BaseClass;
            Extension2 ($b: PuertsTest.BaseClass1) : void;
        }
        class DerivedClass extends PuertsTest.BaseClass
        {
            protected [__keep_incompatibility]: never;
            public MyCallback : PuertsTest.MyCallback
            public static DSF : number
            public get DMF(): number;
            public set DMF(value: number);
            public static DSFunc () : void
            public DMFunc () : void
            public DMFunc ($myEnum: PuertsTest.MyEnum) : PuertsTest.MyEnum
            public add_MyEvent ($value: PuertsTest.MyCallback) : void
            public remove_MyEvent ($value: PuertsTest.MyCallback) : void
            public static add_MyStaticEvent ($value: PuertsTest.MyCallback) : void
            public static remove_MyStaticEvent ($value: PuertsTest.MyCallback) : void
            public Trigger () : void
            public ParamsFunc ($a: number, ...b: string[]) : number
            public InOutArgFunc ($a: number, $b: $Ref<number>, $c: $Ref<number>) : number
            public PrintList ($lst: System.Collections.Generic.List$1<number>) : void
            public GetAb ($size: number) : ArrayBuffer
            public SumOfAb ($ab: ArrayBuffer) : number
            public GetFileLength ($path: string) : System.Threading.Tasks.Task$1<number>
            public constructor ()
        }
        interface MyCallback
        { 
        (msg: string) : void; 
        Invoke?: (msg: string) => void;
        }
        var MyCallback: { new (func: (msg: string) => void): MyCallback; }
        class BaseClassExtension extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static PlainExtension ($a: PuertsTest.BaseClass) : void
            public static Extension1 ($a: PuertsTest.BaseClass) : PuertsTest.BaseClass
            public static Extension2 ($a: PuertsTest.BaseClass, $b: string) : PuertsTest.BaseClass
            public static Extension2 ($a: PuertsTest.BaseClass, $b: PuertsTest.BaseClass1) : void
        }
        class BaseClass1 extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
        }
        class DerivedClass1 extends PuertsTest.BaseClass1
        {
            protected [__keep_incompatibility]: never;
            public constructor ()
        }
    }
    namespace System.Threading.Tasks {
        class Task extends System.Object implements System.IAsyncResult, System.IDisposable
        {
            protected [__keep_incompatibility]: never;
        }
        class Task$1<TResult> extends System.Threading.Tasks.Task implements System.IAsyncResult, System.IDisposable
        {
            protected [__keep_incompatibility]: never;
        }
    }
}
