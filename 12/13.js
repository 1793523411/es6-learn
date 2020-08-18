// Object.getOwnPropertyNames()
// Object.getOwnPropertySymbols()
// Object.keys()

let target = {
    a:1,
    b:2,
    c:3
}

let handler = {
    ownKeys(target){
        return ['a']
    }
}

let proxy = new Proxy(target, handler)

Object.keys(proxy)

// > Object.keys(proxy)
// [ 'a' ]
// > Object.keys(target)
// [ 'a', 'b', 'c' ]

//使用Object.key时，有三类属性会被ownKey方法自动过滤：目标对象上不存在的属性，属性名为Symbol，不可遍历属性

//ownkeys还可拦截Object.getOwnpropertyNames()

//返回值只能是字符串或Symbol值

// ······