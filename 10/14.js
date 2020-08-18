console.log(Array.prototype[Symbol.unscopables])
// [Object: null prototype] {
//     copyWithin: true,
//     entries: true,
//     fill: true,
//     find: true,
//     findIndex: true,
//     flat: true,
//     flatMap: true,
//     includes: true,
//     keys: true,
//     values: true
//   }

console.log(Object.keys(Array.prototype[Symbol.unscopables]))

// [
//     'copyWithin', 'entries',
//     'fill',       'find',
//     'findIndex',  'flat',
//     'flatMap',    'includes',
//     'keys',       'values'
//   ]


class MyClass{
    foo(){return 1}
}

var foo = function(){return 2}

with(MyClass.prototype){
    foo()//1
}

class MyCalss2{
    foo(){return 1}
    get [Symbol.unscopables](){
        return {foo:true}
    }
}

var foo = function(){return 2}

with(MyCalss2.prototype){
    foo()//2
}

//通过指定Symbol.unscopables属性使with语法不会在当前作用域内寻找foo属性，即foo将指向外层作用域的变量

// with 语句的原本用意是为逐级的对象访问提供命名空间式的速写方式. 也就是在指定的代码区域, 直接通过节点名称调用对象。
// with 通常被当做重复引用同一个对象中的多个属性的快捷方式，可以不需要重复引用对象本身。