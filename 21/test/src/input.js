@testable
class MyTesttableClass{

}

function testable(target){
    target.isTestable = true
}

console.log(MyTesttableClass.isTestable)

@decorator
class A{}

//等同于
// class A{}
// A = decorator(A)