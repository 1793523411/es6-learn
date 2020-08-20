//数组

const arr = ['red','green','blue']

// for(let v of arr){
//     console.log(v)
// }
const obj = {}
obj[Symbol.iterator] = arr[Symbol.iterator].bind(arr)

for(let v of obj){
    console.log(v)
}
for(let v of obj){
    console.log(v)
}

arr.forEach(function(element,index){
    console.log(element)
    console.log(index)
})

var arr2 = ['a','b','c','d']
for(let a in arr2){
    console.log(a)
}//读键名
for(let a of arr2){
    console.log(a)
}//读键值，调用遍历器借口，数组的遍历器借口只返回具有数字索引的属性
// 0
// 1
// 2
// 3
// a
// b
// c
// d

let arr3 = [3,5,7]
arr3.foo = 'hello'
for(let i in arr3){
    console.log(i)
}
for(let i of arr3){
    console.log(i)
}

// 0
// 1
// 2
// foo
// 3
// 5
// 7