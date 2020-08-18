var obj2 = {foo:'bar',baz:42}
console.log(Object.keys(obj2))

let {keys,values,entries} = Object
let obj = {a:1,b:2,c:3}

for(let key of keys(obj)){
    console.log(key)
}
for(let value of values(obj)){
    console.log(value)
}

// var obj3 = Object.create({},{p:{value:42}})
// console.log(Object.values(obj3))

var obj3 = Object.create({},{p:{value:42,enumerable:true}})
console.log(Object.values(obj3))

console.log(Object.values({[Symbol()]:123,foo:'abc'}))

let obj4 = {one:1,two:2}
for(let [k,v] of Object.entries(obj4)){
    console.log(`${JSON.stringify(k)}:${JSON.stringify(v)}`)
}

var obj5 = {foo:'bar',baz:42}
var map = new Map(Object.entries(obj5))
console.log(map)//Map { 'foo' => 'bar', 'baz' => 42 }