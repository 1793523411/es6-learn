const keyA = { a: 1 };
const keyB = { b: 2 };

const myObject = {
  [keyA]: "valueA",
  [keyB]: "valueB",
};

console.log(myObject)//{ '[object Object]': 'valueB' }

var foo = 'bar'
var baz = {[foo]:'abc'}

//错误写法
// var foo= 'bar'
// var bar = 'abc'
// var baz = {[foo]}

const person = {
    sayName(){
        console.log('hello')
    }
}

console.log(person.sayName.name)

//有get，set修饰
const obj = {
    get foo(){},
    set foo(x){}
}

const describe = Object.getOwnPropertyDescriptor(obj,'foo')

console.log(describe.get.name)
console.log(describe.set.name)


console.log((new Function()).name)//anonymous

var doSomething = function(){

}

console.log(doSomething.bind().name)//bound doSomething

const key1 = Symbol('description')
const key2 = Symbol()
let obj2 = {
    [key1](){},
    [key2](){}
}
console.log(obj2[key1].name)//"[description]"
console.log(obj2[key2].name)//""

