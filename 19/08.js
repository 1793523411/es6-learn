class Foo {
    static classMethod(){
        return 'hello'
    }
}
Foo.classMethod()

var foo = new Foo()
// foo.classMethod()//报错not undefined

class Foo2{
    static classMethod(){

    }
}

class Bar extends Foo2{}

Bar.classMethod()//hello

class Foo3{
    static classMethod(){
        return 'hello'
    }
}

class Bar2 extends Foo3{
    static classMethod(){
        return super.classMethod()+',too'
    }
}

Bar2.classMethod()