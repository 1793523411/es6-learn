function * gen(x){
    var y = yield x + 2
    return y
}

// var g = gen(1)
// console.log(g.next())
// console.log(g.next())

var g = gen(1)
console.log(g.next())
console.log(g.next(2))
// { value: 3, done: false }
// { value: 2, done: true }



function* gen(x){
    try {
        var y = yield x+2
    } catch (e) {
        console.log(e)
    }
    return y
}

var g = gen(1)
console.log(g.next())
console.log(g.next())
console.log(g.throw('出错了'))

//出错的代码与处理错误的代码实现了时间和空间的分离，这对异步编程无疑是很重要的