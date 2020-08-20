//类似数组的对象
let str = 'hello'

for(let s of str){
    console.log(s)
}

let parse = document.querySelectorAll("p")

for(let p of parse){
    p.className.add("test")
}

function printArgs(){
    for(let x of arguments){
        console.log(x)
    }
}


printArgs('a','b')

//for```of对于字符串可以正确识别32位UTF-16字符
for(let x of 'a\uD83D\uDC0A'){
    console.log(x)
}
let arrayList = {length:2,0:'a',1:'b'}
//报错
// for(let x of arrayList){
//     console.log(x)
// }

for(let x of Array.from(arrayList)){
    console.log(x)
}