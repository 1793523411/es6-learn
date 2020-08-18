var obj = new Proxy({},{
    get: function(target,key,reciver){
        console.log(target)//{ count: 1 }
        console.log(reciver)//{ count: 1 }
        console.log(`getting ${key}`)
        return Reflect.get(target,key,reciver)
    },
    set: function(target, key,value,reciver){
        console.log(target)//{ count: 1 }
        console.log(reciver)//{ count: 1 }
        console.log(`setting ${key}`)
        console.log(value)//2
        return Reflect.set(target, key, value, reciver)
    }
})

//Proxy实际重载了点运算符，用自己的定义覆盖了语言的原始定义

obj.count = 1
console.log(++obj.count)
// ++obj.count

var proxy = new Proxy({},{
    get: function(target, property){
        return 35
    }
})

proxy.time=1
console.log(proxy.time)//35

var target = {}
var handler = {}

var proxy = new Proxy(target,handler)
proxy.a = 'b'
console.log(target.a)//b


var object = {proxy: new Proxy(target, handler)}

var proxy = new Proxy({},{
    get:function(target,property){
        return 50
    }
})

//在原型上拦截
var obj = Object.create(proxy)
console.log(obj.time)