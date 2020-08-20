function* f(){
    for(var i=0; true;i++){
        var reset = yield i;
        if(reset) {i = -1}
    }
}
var g = f()

g.next()
g.next()
g.next(true)

// > g.next()
// { value: 0, done: false }
// >
// > g.next()
// { value: 1, done: false }
// > g.next()
// { value: 2, done: false }
// > g.next()
// { value: 3, done: false }
// > g.next()
// { value: 4, done: false }
// > g.next()
// { value: 5, done: false }
// > g.next()
// { value: 6, done: false }
// > g.next()
// { value: 7, done: false }
// > g.next(true)
// { value: 0, done: false }
// > g.next(true)
// { value: 0, done: false }
// > g.next()
// { value: 1, done: false }
// > g.next(true)
// { value: 0, done: false }
// > g.next()
// { value: 1, done: false }
// > g.next()
// { value: 2, done: false }
// > g.next()
// { value: 3, done: false }
// > g.next()
// { value: 4, done: false }
// > g.next()