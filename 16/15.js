function* g(){}

g.prototype.hello = function(){
    return 'hi!'
}

let obj = g()

obj instanceof g
obj.hello()

// > obj instanceof g
// true
// > obj.hello()
// 'hi!'
// >

function* g(){
    this.a = 11
}
let obj = g()
obj.a//undefined

function * F(){
    yield this.x = 2;
    yield this.y = 3;
}
new F()//报错,因为f不是构造函数