// /类中定义遍历器
class RangeIterator {
    constructor(start, stop){
        this.value = start;
        this.stop = stop;
    }
    [Symbol.iterator]() {return this}
    next(){
        var value = this.value
        if(value < this.stop){
            this.value++
            return {done:false,value:value}
        }
        return {done:true,value:undefined}
    }
}
function range(start,stop) {
    return new RangeIterator(start,stop)    
}

for (var value of range(0,3)){
    console.log(value)
}
// 0
// 1
// 2


//遍历器实现指针结构
function Obj(value){
    this.value = value;
    this.next = null
}

Obj.prototype[Symbol.iterator] = function(){
    var iterator = {next:next}

    var current = this;

    function next(){
        if(current){
            var value = current.value;
            current = current.next;
            return {done:false,value:value}
        }else{
            return {done:true}
        }
    }
    return iterator
}

var one = new Obj(1)
var two = new Obj(2)
var three = new Obj(3)

one.next = two;
two.next = three
for(var i of one){
    console.log(i)
}

//为对象添加Iterator
let obj = {
    data:['hello','world'],
    [Symbol.iterator](){
        const self = this
        let index = 0;
        return {
            next(){
                if(index < self.data.length){
                    return {
                        value:self.data[index++],
                        done:false
                    }
                }else{
                    return {value: undefined,done:true}
                }
            }
        }
    }
}

//对于类似数组的对象
//修改本来就具有该接口的类似数组的对象

NodeList.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator]

NodeList.prototype[Symbol.iterator] = [][Symbol.iterator]

// [...document.querySelector('div')]


//另一个例子,类似数组的对象
let iterator = {
    0:'a',
    1:'b',
    2:'c',
    length:3,
    [Symbol.iterator]:Array.prototype[Symbol.iterator]
}
for(let item of iterator){
    console.log(item)
}

//普通对象部署数组的遍历器无效
// let iterator = {
//     a:'a',
//     b:'b',
//     c:'c',
//     length:3,
//     [Symbol.iterator]:Array.prototype[Symbol.iterator]
// }

//如果[Symbol.uterator]方法对应的不是遍历器生成器函数，解释引擎会报错


var $iterator = ITERABLE[Symbol.iterator]()
var $result = $iterator.next()
while(!$iterator.done){
    var x = $result.value
    $result = $iterator.next()
}