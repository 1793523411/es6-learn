// var gen = function* gen(){
//     yield console.log('hello');
//     yield console.log('world');
// }

// var g = gen()
// g.next()
// g.throw()//导致程序中断执行，因为没有捕获错误


var gen = function* gen(){
    try {
        yield console.log('a')
    } catch (e) {
        //...
    }
    yield console.log('b')
    yield console.log('c')
}

var g = gen()
g.next()
g.throw()//错误被捕获之后，会附带执行一条next()语句,且不会影响下次执行
g.next()