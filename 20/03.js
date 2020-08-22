// class A{
//     constructor(){
//         this.x = 1
//     }
//     print(){
//         console.log(this.x)
//     }
// }

// class B extends A{
//     constructor(){
//         super()
//         this.x = 2

//     }
//     m(){
//         super.print()
//     }
// }

// let b = new B()
// b.m()

class A{
    constructor(){
        this.x = 1
    }
}
class B extends A{
    constructor(){
        super()
        this.x = 2;
        super.x = 3
        console.log(super.x)//undefined,因为此时执行的是A.prototype.x所以为undefine，但this只想当前类
        console.log(this.x)
    }
}
let b = new B()


class Parent{
    static myMethod(msg){
        console.log('static',msg)
    }
    myMethod(msg){
        console.log('instance',msg)
    }
}

class Child extends Parent{
    static myMethod(msg){
        super.myMethod(msg)//静态方法指向父类
    }
    myMethod(msg){
        super.myMethod(msg)//普通方法指向父类原型对象
    }
}
Child.myMethod(1)//static 1
var child = new Child()
child.myMethod(2)//instance 2

var obj = {
    toString(){
        return "MyObject: "+super.toString()
    }
}

obj.toString()

