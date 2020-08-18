const ages = [114,23,12,54,18,96]

const yongest = Math.min.apply(Math,ages)
const oldest = Math.max.apply(Math,ages)
const type = Object.prototype.toString.call(yongest)


const yongest = Reflect.apply(Math.min,Math,ages)
const oldest = Reflect.apply(Math.max,Math,ages)
const type = Reflect.apply(Object.prototype.toString,yongest,[])


function MyDate(){

}

//逐渐被废除，建议使用新写法
Object.defineProperty(MyDate,'now',{
    value: () => Date.now()
})

Reflect.defineProperty(MyDate,'now',{
    value: () => Date.now()
})


var myObj = {}

Object.defineProperty(myObject,'hidden',{
    value:true,
    enumerable:false
})

var theDescriptor = Object.getOwnPropertyDescriptor(myObject,'hidden')
var theDescriptor = Reflect.getOwnPropertyDescriptor(myObject,'hidden')

//若参数不是对象，前者返回undefined，后者报错，表示参数不合法

