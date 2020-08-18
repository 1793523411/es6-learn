// 无块级作用域

var tmp = new Date()

function f(){
    console.log(tmp)
    if(false){
        var tmp = 'hello world'
    }
}

//变量声明提升，函数体会提升
f()//undefine

//计数场景

var s = 'Hello world'

var s = 'hello'

for(var i = 0; i<s.length; i++){
    console.log(s[i])
}
console.log(i)


//IIFE
// (function(){
//     var tmp = ...;
//     ...
// }())

// {
//     let tmp = ...
// }

// let x= do {
//     let t = f()
//     t t + 1
// }