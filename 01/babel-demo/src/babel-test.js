let a = 1
let b = 2

let c = (a,b) => a+b

console.log(c(a,b))

var text= String.fromCharCode(0x20BB7)

for (let i = 0; i < text.length; i++) {
    console.log(text[i])    
}

for(let i of text){
    console.log(i)
}

console.log(text)