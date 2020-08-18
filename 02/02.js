var tmp

if(true){
    // tmp = 'abc'
    // console.log(tmp)
    
    let tmp;
    console.log(tmp)

    tmp = 123
    console.log(tmp)
}

typeof a
// let a//X

//难以发现的暂时性能死区

//书上是这么说的：调用bar函数之所以报错（某些实现可能不会报错），是因为....暂时性死区
function bar(x = y,y = 2){
    return [x,y]
}

console.log(bar())

function bar (x = 2,y = x){
    return [x,y]
}
console.log(bar())