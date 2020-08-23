// //修饰器有注释的作用
// @testable
// class Person{
//     @readonly
//     @nonenumberable
//     name(){
//         return `${this.first} ${this.last}`
//     }
// }

// //person是一个可测试类，而name方法是只读且不可枚举

function dec(id){
    console.log('evaluated',id)
    return (target,property,descriptor) => console.log('exectued',id)
}

class Example {
    @dec(1)
    @dec(2)
    methods() {
        
    }
}
// evaluated 1
// evaluated 2
// exectued 2
// exectued 1