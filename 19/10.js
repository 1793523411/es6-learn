//静态属性
class MyClass {
    static myStaticProp = 42
    constructor(){
        console.log(MyClass.myStaticProp)
    }
}
new MyClass()