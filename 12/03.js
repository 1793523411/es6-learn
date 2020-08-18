var person = {
    name: "张三"
}

var proxy= new Proxy(person, {
    get: function(target, property){
        if(property in target){
            return target[property]
        }else{
            // throw new ReferenceError("Property not exits")
            console.log('不存在')
        }
    }
})

console.log(proxy.name)
console.log(proxy.age)

//get方法可以继承
let proto = new Proxy({},{
    get(target, propertyKey, receiver){
        console.log('GET'+propertyKey)
        return target[propertyKey]
    }
})

let obj = Object.create(proto)
console.log(obj.xxx)

//get拦截实现读取数组负索引

function createArray(...element){
    let handler = {
        get(target, propKey,receiver){
            let index = Number(propKey)
            if(index < 0){
                propKey = String(target.length + index)
            }
            return Reflect.get(target, propKey, receiver)
        }
    }
    let target = []
    target.push(...element)
    return new Proxy(target,handler)
}

let arr = createArray('a','b','c')
console.log(arr[-1])


//利用Proxy可以将读取属性操作（get）转变为某个执行函数，从而实现属性的链式操作
var pipe = (function(){
    return function(value){
        var funcStack = []
        console.log(value)
        var oproxy = new Proxy({},{
            get: function(pipeObject,fnName){
                if(fnName === 'get'){
                    return funcStack.reduce(function(val,fn){
                        return fn(val)
                    },value);
                }
                funcStack.push(window[fnName])
                return oproxy
            }
        })
        return oproxy
    }
}())

var double = n => n*2

var pow = n => n*n

var reverseInt = n => n.toString().split("").reverse().join("")|0

var res = pipe(3).double.pow.reverseInt
console.log(res)

//拦截一个生成各种Dom节点的通用函数
const dom = new Proxy({},{
    get(target, property){
        return function(attrs = {},...children){
            const el = document.createElement(property)
            for(let prop of Object.keys(attrs)){
                el.setAttribute(prop,attrs[prop])
            }
            for(let child of children){
                if(typeof child === 'string'){
                    child = document.createElement(child)
                }
                el.appendChild(child)
            }
            return el;
        }
    }
})

// const el = dom.div({},...)

//如果一个属性不可配置或不可写，则该属性不能被代理，通过Proxy对象访问会报错
const target = Object.defineProperties({},{
    foo:{
        value:123,
        writable:false,
        configurable:false
    }
})

const handler = {
    get(target, propKey){
        return 'abc'
    }
}

const proxy = new Proxy(target,handler)

proxy.foo//X