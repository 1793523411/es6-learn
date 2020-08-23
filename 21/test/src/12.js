// const Foo = {
//     foo(){console.log(foo)}
// }

// class MyClass{}

// Object.assign(MyClass.prototype,Foo)

// let obj = new MyClass()

// obj.foo()


import {mixins} from './mixins'

const Foo = {
    foo(){console.log('foo')}
}

@mixins(Foo)
class MyClass{}

let obj = new MyClass()

obj.foo()

// //上面的会改写MyClass类的prototype对象，如果不喜欢这一点，可以通过继承实现
// class MyBaseClass{}

// class MyClass extends MyBaseClass{}

// let MyMixin = (superclass) => class  extends superclass{
//     foo(){
//         console.log('foo from MyMixin')
//     }
// }

// class MyClass extends MyMixin(MyBaseClass){

// }

// //混入多个方法，就生成多个混入类
// class MyClass extends MyMixin1(MyMixin2(MyBaseClass)){

// }
// //这种写法好处是可以调用super，避免在混入过程中覆盖父类同名方法

let Mixin = (superclass) => class extends superclass{
    foo(){
        console.log('foo from Mixin')
        if(super.foo) super.foo()
    }
}

let Mixin2 = (superclass) => class extends superclass{
    foo(){
        console.log('foo from Mixin2')
        if(super.foo) super.foo()
    }
}

class S{
    foo(){
        console.log('foo from S')
    }
}

class C extends Mixin(Mixin2(S)){
    foo(){
        console.log('foo from C')
        super.foo()
    }
}

new C().foo()
// foo from C
// foo from Mixin
// foo from Mixin2
// foo from S