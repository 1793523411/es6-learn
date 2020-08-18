const myObj = {};

Object.isExtensible(myObj);

Reflect.isExtensible(myObj);

//如果参数不是对象，前者返回false，后者报错

Object.preventExtensions(myObj)
Reflect.preventExtensions(myObj)



const myObject = {
    foo:1,
    bar:2,
    [Symbol.for('baz')]:3,
    [Symbol.for('bing')]:34
}

Object.getOwnPropertyNames(myObject)
Object.getOwnPropertySymbols(myObject)

Reflect.ownKeys(myObject)

// > Object.getOwnPropertyNames(myObject)
// [ 'foo', 'bar' ]
// > Object.getOwnPropertySymbols(myObject)
// [ Symbol(baz), Symbol(bing) ]
// >
// > Reflect.ownKeys(myObject)
// [ 'foo', 'bar', Symbol(baz), Symbol(bing) ]