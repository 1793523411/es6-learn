//解决办法

//1.call绑定Generator函数内部的this
function* F(){
    this.a = 1
    yield this.b = 2
    yield this.c = 3
}
var obj = {}
var f = F.call(obj)

console.log(obj)
console.log(f.next())
console.log(f.next())
console.log(f.next())
//{}
// { value: 2, done: false }
// { value: 3, done: false }
// { value: undefined, done: true }

//将obj转换成F.prototype

function* F(){
    this.a = 1;
    yield this.b = 2;
    yield this.c = 3;
}

var f = F.call(F.prototype)

console.log(f.next())
console.log(f.next())
console.log(f.next())
console.log(f.next())
// { value: 2, done: false }
// { value: 3, done: false }
// { value: undefined, done: true }
// { value: undefined, done: true }

console.log(f.a)
console.log(f.b)
console.log(f.c)
// 1
// 2
// 3

//执行new命令,将F改为构造函数
function* gen(){
    this.a = 1;
    yield this.b = 2;
    yield this.c = 3
}
function F(){
    return gen.call(gen.prototype)
}

var f = new F()

console.log(f.next())
console.log(f.next())
console.log(f.next())
console.log(f.a)
console.log(f.b)
console.log(f.c)

// { value: 2, done: false }
// { value: 3, done: false }
// { value: undefined, done: true }
// 1
// 2
// 3