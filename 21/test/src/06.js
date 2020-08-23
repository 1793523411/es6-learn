class Person {
    @nonenumberable
    get kidCount(){return this.children.length}
}

//修改对象的可遍历属性
function nonenumberable(target, name, descriptor){
    descriptor.enumber = false
    return descriptor
}

//log修饰器起到输出日志的作用
class Math2{
    @log
    add(a,b){
        return a+b
    }
}

function log(target, name, descriptor){
    var oldValue = descriptor.value
    descriptor.value = function(){
        console.log(`Call "${name} with`,arguments)
        return oldValue.apply(null,arguments)
    }
    return descriptor
}

const math = new Math2()
math.add(2,4)
//Call "add with [Arguments] { '0': 2, '1': 4 }