//没有对应数据结构的遍历器对象，用遍历器模拟出数据结构
//无限循环的遍历对象

var it = idMarker()

console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)

function idMarker(){
    var index = 0;
    return {
        next: function(){
            return {value:index++,done:false}
        }
    }
}