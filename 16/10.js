function* gen(){
    yield 1;
    yield 2;
    yield 3;
}

var g = gen()


//return不提供参数返回undefined
g.next()
g.return('foo')
g.next()
// > g.next()
// { value: 1, done: false }
// > g.return('foo')
// { value: 'foo', done: true }
// > g.next()
// { value: undefined, done: true }


function* numbers(){
    yield 1;
    try {
        yield 2;
        yield 3;
    } finally {
        yield 4;
        yield 5;
    }
    yield 6;
}
//有finally会把finally里的执行完
var g = numbers()

// > g.next()
// { value: 1, done: false }
// > g.next()
// { value: 2, done: false }
// > g.return(7)
// { value: 4, done: false }
// > g.next()
// { value: 5, done: false }
// > g.next()
// { value: 7, done: true }
// > g.next()
// { value: undefined, done: true }
// > g.next()
// { value: undefined, done: true }