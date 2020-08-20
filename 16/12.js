function* inner(){
    yield 'hello'
}
function* puter1(){
    yield 'open'
    yield inner()
    yield 'close'
}
var gen = puter1()
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
// open
// Object [Generator] {}
// close
// undefined

function* outer2(){
    yield 'open'
    yield* inner()
    yield 'close'
}
var gen = outer2()
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
// open
// hello
// close
// undefined

let delegatedIterator = (function* (){
    yield 'hello';
    yield 'Bye'
}())

let delefatingIterator = (function*(){
    yield 'Greetings';
    yield* delegatedIterator;
    yield 'Ok,bye';
}())

for(let value of delefatingIterator){
    console.log(value)
}
// Greetings
// hello
// Bye
// Ok,bye

function* concat(iter1,iter2){
    yield* iter1;
    yield* iter2;
}
//等同于
function* concat(iter1,iter2){
    for(var value of iter1){
        yield value;
    }
    for(var value of iter2){
        yield value;
    }
}

function* gen(){
    yield ["a","b","c"]
}
gen().next()