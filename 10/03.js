// var obj = {}
// var a = Symbol('a')
// var b = Symbol('b')

// obj[a] = 'Hello'
// obj[b] = 'World'

// var objecySymbol = Object.getOwnPropertySymbols(obj)

// console.log(objecySymbol)
// console.log(Object.getOwnPropertyNames(obj))
// console.log(Object.getOwnPropertyNames(obj[a]))
// console.log(Object.getPrototypeOf(obj[a]))


// var obj = {}
// var foo = Symbol("foo")

// Object.defineProperty(obj,foo,{
//     value:"foobar"
// })

// for(var i in obj){
//     console.log(i)
// }
// console.log(Object.getOwnPropertyNames(obj))
// console.log(Object.getOwnPropertySymbols(obj))



let obj = {
    [Symbol('my_key')]:1,
    enum:2,
    nonEnum:3
}
console.log(Reflect.ownKeys(obj))


var size = Symbol('size')

class Collection {
    constructor(){
        this[size] = 0
    }
    add(item){
        this[this[size]] = item,
        this[size]++
    }
    static sizeOf(instance){
        return instance[size]
    }
}

var x = new Collection()
console.log(Collection.sizeOf(x))

x.add('foo')
console.log(Collection.sizeOf(x))
console.log(Object.keys(x))
console.log(Object.getOwnPropertyNames(x))
console.log(Object.getOwnPropertySymbols(x))


var s1 = Symbol.for('foo')
var s2 = Symbol.for('foo')
console.log(s1===s2)
console.log(Symbol('bar') === Symbol('bar'))

console.log(Symbol.keyFor(s1))
var s3 = Symbol('foo')
console.log(Symbol.keyFor(s3))


ifram = document.createElement('iframe')
ifram.src = String(window.localtion)
document.body.appendChild(ifram)

ifram.contentWindow.Symbol.for('foo') === Symbol.for('foo')