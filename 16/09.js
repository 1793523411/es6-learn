// var gen = function* gen(){
//     yield console.log('hello');
//     yield console.log('world');
// }

// var g = gen()
// g.next()
// g.throw()//导致程序中断执行，因为没有捕获错误


// var gen = function* gen(){
//     try {
//         yield console.log('a')
//     } catch (e) {
//         //...
//     }
//     yield console.log('b')
//     yield console.log('c')
// }

// var g = gen()
// g.next()
// g.throw()//错误被捕获之后，会附带执行一条next()语句,且不会影响下次执行
// g.next()

// function* foo(){
//     var x = yield 3;
//     var y = x.toUpperCase()
//     yield y;
// }

// //在外部捕获错误
// var it = foo()

// console.log(it.next())

// try {
//     it.next('a')
// } catch (e) {
//     console.log(e)
// }


function* g(){
    yield 1;
    console.log('throw error')
    throw new Error('error')
    yield 2
    yield 3
}

function log(generator){
    var v;
    console.log('starting generator')
    try {
        v = generator.next()
        console.log('第一次运行next方法',v)
    } catch (e) {
        console.log('捕获错误',v)
    }

    try {
        v = generator.next()
        console.log('第二次运行next方法',v)
    } catch (e) {
        console.log('捕获错误',v)
    }
    try {
        v = generator.next()
        console.log('第3次运行next方法',v)
    } catch (e) {
        console.log('捕获错误',v)
    }
}

log(g())

// starting generator
// 第一次运行next方法 { value: 1, done: false }
// throw error
// 捕获错误 { value: 1, done: false }
// 第3次运行next方法 { value: undefined, done: true }