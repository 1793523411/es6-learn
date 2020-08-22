// class A{}

// class B extends A{
//     constructor(){
//         super()//调用父类构造器，但返回的是子类B的示例，即super内部的this指向B，相当于A.prototype.constructor.call(this)
//     }
// }

// class A{
//     constructor(){
//         console.log(new.target.name)
//     }
// }

// class B extends A{
//     constructor(){
//         super()
//     }
// }


// //说明子类的super指向子类
// console.log(new A())
// console.log(new B())
// A
// A {}
// B
// B {}

// class A{}
// class B extends A{
//     m(){
//         super()//报错
//     }
// }


// class A{
//     p(){
//         return 2
//     }
// }

// class B extends A{
//     constructor(){
//         super()
//         console.log(super.p())//2,相当于A.prototype.p()
//     }
// }
// let b = new B()


// class A{
//     constructor(){
//         this.p = 2
//     }
// }

// class B extends A{
//     get m(){
//         return super.p
//     }
// }

// let b = new B()
// console.log(b.m)//undefined


class A{
    // p = 2//在这里定义也是undefined
    // constructor(){
    //     // this.p = 2
    // }
}
A.prototype.x = 2

class B extends A{
    get m(){
        return super.x
    }
}

let b = new B()
console.log(b.m)//2