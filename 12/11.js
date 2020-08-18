// Object.prototype.__proto__
// Object.prototype.isPrototypeOf()
// Object.getPrototypeOf()
// Reflect.getPrototypeOf()
// instanceof

//拦截获取对象原型,返回值必须是对象或null，如果目标不可扩展，必须返回目标对象的原型对象
var proto = {}
var p = new Proxy({},{
    getPrototypeOf(target){
        return proto
    }
})

console.log(Object.getPrototypeOf(p) === proto)