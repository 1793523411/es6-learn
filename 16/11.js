function * foo(){
    yield 'a';
    yield 'b'
}

// function* bar(){
//     yield 'x';
//     foo()
//     yield 'b';
// }
function* bar(){
    yield 'x';
    yield* foo()
    yield 'b';
}

// for(let x of bar()){
//     console.log(x)
// }
// x
// b

for(let v of bar()){
    console.log(v)
}
// x
// a
// b
// b