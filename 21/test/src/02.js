//添加实例属性
function testable(target){
    target.prototype.isTestable = true
}

@testable
class MyTestableClass {}

let obj = new MyTestableClass()
console.log(obj.isTestable)
