// const properties = {
//     'width':1,
//     'height':1
// }

// if(properties[someName]){
//     //...
// }

// const properties = new Set()

// properties.add('width')
// properties.add('height')

// if(properties.has(someName)){
//     //...
// }

const items = new Set([1,2,3,4,5])
const array = Array.from(items);
console.log(array)

function dedupe(array){
    return Array.from(new Set(array))
}

dedupe([1,1,2,3])

let set  = new Set(['red','green','blue'])

for(let item of set.keys()){
    console.log(item)
}

for(let item of set.values()){
    console.log(item)
}

for(let item of set.entries()){
    console.log(item)
}

for (let x of set){
    console.log(x)
}

for(let x of [2,1,3,4,5]){
    console.log(x);
}

let set2 = new Set([1,2,3])
set2.forEach((value,key) => console.log(value*2))

console.log('-----------');

let arr = [...set]
console.log(arr)

let arr2 = [2,5,2,2,5,5]
let unique = [...new Set(arr2)]
console.log(unique);

let set3 = new Set([1,2,3,4,54,6,7,8])
set3 = new Set([...set3].map(x => x*2))
set3 = new Set([...set3].filter(x => (x%2) == 0))

//并集
let a = new Set([1,2,3])
let b = new Set([4,3,2])

let unique = new Set([...a,...b])
//交集

let insersect = new Set([...a].filter(x => b.has(x)))

//同步改变原来的Set结构

let set4 = new Set([1,2,3])
set4 = new Set([...set4].map(val => val*2))

let set5 = new Set([1,2,3])
set5 = new Set(Array.from(set5,val => val*2))