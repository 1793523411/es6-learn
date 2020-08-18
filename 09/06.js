var obj= {
    method: function(){console.log('111')}
}

let someOtherObj = {
    a:1,
    b:2
}

obj.__proto__ = someOtherObj

console.log(obj.a)


Object.defineProperty(Object.prototype,'__proto__',{
    get() {
        let _thisObj = Object(this)
        return Object.getPrototypeOf(_thisObj)
    },
    set(proto){
        if(this === undefined || this === null){
            throw new TypeError
        }
        if(!isObject(this)){
            return undefined
        }
        if(!isObject(proto)){
            return undefined
        }
        let status = Reflect.setPrototypeOf(this,proto)
        if(!status){
            throw TypeError
        }
    }
})

function isObject(value){
    return Object(value) === value
}
