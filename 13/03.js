var myObject = {
    foo:1,
    set bar(value){
        return this.foo = value
    }
}

myObject.foo//1

Reflect.set(myObject,'foo',2)
myObject.foo//2

var myReceiverObject = {
    foo:0
}

//this会改变
Reflect.set(myObject,'bar',1,myReceiverObject)
myObject.foo//4
myReceiverObject.foo//1

//第一个参数不是对象会报错

//注意Reflect.set会触发Proxy.defineProperty拦截

let p ={
    a:'a'
}
let handler = {
    set(target,key,value,receiver){
        console.log('set')
        Reflect.set(target,key,value,receiver)
    },
    defineProperty(target,key,attribute){
        console.log('defineProperty')
        console.log(key)
        console.log(target)
        console.log(attribute)
        Reflect.defineProperty(target,key,attribute)
    }
}

let obj = new Proxy(p,handler)

obj.a = 'A'
set
defineProperty
// a
// { a: 'a' }
// { value: 'A' }