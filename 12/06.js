//使用has隐藏某些属性，使其不被in运算发现
var handler = {
    has(target, key){
        if(key[0] === '_'){
            return false
        }
        return key in target
    }
}
var target = {_prop:'foo',prop:'foo'}
var proxy = new Proxy(target, handler)
console.log('_prop' in proxy)

//使对象禁止扩展
var obj = {a:10}
Object.preventExtensions(obj)
var p = new Proxy(obj, {
    has: function(target, prop){
        return false
    }
})

// console.log('a' in p)

// *has拦截对for...in中的in失效
// has拦截的是HasProperty操作，而不是HasOwnProperty操作，即has方法不判断一个属性是对象自身属性还是继承属性

let stu1 = {name:'zhangsan',score:59}
let stu2 = {name:'lisi',score:99}

let handler2 = {
    has(target, prop){
        if(prop === 'score' && target[prop] < 60){
            console.log(`${target.name}failed`)
            return false
        }
        return prop in target
    }
}
let oproxy1 = new Proxy(stu1,handler2)
let oproxy2 = new Proxy(stu2,handler2)

console.log('score' in oproxy1)
console.log('score' in oproxy2)

for(let a in oproxy1){
    console.log(oproxy1[a])
}
for(let a in oproxy2){
    console.log(oproxy2[a])
}

