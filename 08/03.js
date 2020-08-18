var arr = [1,2,3,4,5,6].copyWithin(0,2)//开始替换的位置，开始读取的位置（可选，默认值零），到该位置停止读取（可选，默认等于数组长度），若为负数，表示倒数
console.log(arr)

var arr2 = [1,2,3,4,5].copyWithin(0,-2,-1)
console.log(arr2)

//将三号位置复制到零号位置 
var arr3 = [].copyWithin.call({length:5,3:1},0,3)
console.log(arr3)

var i32a = new Int32Array([1,2,3,4,5])
i32a.copyWithin(0,2)
console.log(i32a)

//对于没有部署typedArray和copyWithin的平台
var arr4 = [].copyWithin.call(new Int32Array([1,2,3,4,5]),0,3,4)//包左不包右
console.log(arr4)


for(let index of ['a','b'].keys()){
    console.log(index)
}
for(let elem of ['a','b'].values()){
    console.log(elem)
}
for(let [index,elem] of ['a','b'].entries()){
    console.log(index,elem)
}

let letter = ['a','b','c']
let entries = letter.entries()
console.log(entries.next().value)
console.log(entries.next().value)
console.log(entries.next().value)
console.log(entries.next().value)