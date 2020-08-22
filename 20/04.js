class A{}
class B extends A{}

B.__proto__ === A
B.prototype.__proto__ === A.prototype
// > B.__proto__ === A
// true
// > B.prototype.__proto__ === A.prototype
// true

Object.setPrototypeOf(B.prototype,A.prototype)
Object.setPrototypeOf(B,A)

//函数的实现
Object.setPrototypeOf = function(obj,proto){
    obj.__proto__ = proto
    return obj
}