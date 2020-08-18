//使用set进行属性值校验
let validator = {
    set: function(obj, prop, value){
        if(prop == 'age'){
            if(!Number.isInteger(value)){
                throw new TypeError('The age is not integer')
            }
            if(value > 200){
                throw new RangeError('The age semms invalid')
            }
        }
        obj[prop] = value
    }
}

let person = new Proxy({},validator)

person.age = 100
// person.age = 300
// person.age = 'aaa'

//使用set设置私有属性
var handler = {
    get(target, key){
        invariant(key,'get')
        return target(key)
    },
    set(target,key,value){
        invariant(key,'set')
        target[key] = value
        return true
    }
}

function invariant(key, action){
    if(key[0] === '_'){
        throw new Error(`Invalid attempt to ${action} private "${key}" property`)
    }
}

var target = {}
var proxy = new Proxy(target,handler)
// proxy._prop
proxy._prop = 'c'
