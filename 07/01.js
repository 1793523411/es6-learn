function fetch(url,{method = 'GET'} = {}){
    console.log(method)
}

fetch('http://example.com')//GET 没有第二个参数时，函数参数的默认值就会生效，然后才是解构赋值，变量method提取到默认值get

function m1({x=0,y=0} = {}){//默认值为对象解构赋值的默认值
    return [x,y]
}

function m2({x,y} = {x:0,y:0}){//默认值为解构赋值带来的值
    return [x,y]
}

console.log(m1())
console.log(m2())

console.log(m1({x:3}))
console.log(m2({x:3}))//[ 3, undefined ]

console.log(m1({}))
console.log(m2({}))// undefined, undefined ]

console.log(m1({z:3}))
console.log(m2({z:3}))//[ undefined, undefined ]
