// const target = {
//     m:function(){
//         console.log(this === proxy)
//     }
// }

// const handler = {}

// const proxy = new Proxy(target,handler)

// console.log(target.m())
// console.log(proxy.m())


const _name = new WeakMap()
class Person {
    constructor(name){
        _name.set(this,name)
    }
    get name(){
        return _name.get(this)
    }
}

const jane = new Person('Jane')
console.log(jane.name)

const proxy = new Proxy(jane,{})
console.log(proxy.name)



const target = new Date()
const handler = {}
const proxy = new Proxy(target,handler)

proxy.getDate()//报错，this已经指向Date，而是只想了proxy，所以会报错，getDate只能在Date对象实例上获取

const target = new Date('2015-01-01')

const handler ={
    get(taget, prop){
        if(prop == 'getDate'){
            return target.getDate.bind(target)//绑定原始对象
        }
        return Reflect.get(target,prop)
    }
}

const proxy = new Proxy(target,handler)

proxy.getDate()//1