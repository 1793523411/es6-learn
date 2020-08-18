class MyArrsy extends Array {
    static get [Symbol.species]() {return Array}
}

class MyArray extends Array {
    static get [Symbol.species]() {return Array}
}
var a = new MyArray(1,2,3)
var mapped = a.map(x => x*x)

console.log(mapped instanceof MyArray)//false
console.log(mapped instanceof Array)//true

// // 默认Symbol.species等同于
// status get [Symbol.species]() {
//     return this
// }