// ({[Symbol.toStringTag]:'Foo'}.toString())
console.log(({[Symbol.toStringTag]:'Foo'}.toString()))//[object Foo]

class Collection {
    get [Symbol.toStringTag](){
        return 'xxx'
    }
}
var x = new Collection()
console.log(Object.prototype.toString.call(x))

// > a
// { a: 1 }
// > a.toString()
// '[object Object]'