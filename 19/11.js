function Person(name) {
  if (new.target !== undefined) {
    this.name = name;
  } else {
    throw new Error("必须使用new生成实例");
  }
}
//确保构造函数只能通过new调用
function Person(name) {
  if (new.target === Person) {
    this.name = name;
  }else{
    throw new Error("必须使用new生成实例");
  }
}

var person = new Person('张三')
// var notAPerson = Person.call(person,'张三')//报错

class Reactangle {
    constructor(length, width){
        console.log(new.target === Reactangle)
        this.length = length
        this.width = width
    }
}

var obj = new Reactangle(3,4)//true



//不能独立使用而必须通过继承后才能使用
class Shape{
    constructor(){
        if(new.target === Shape){
            throw new Error('本类不能实例化')
        }
    }
}

class Rectangle extends Shape{
    constructor(length,width){
        super()
    }
}

var x = new Shape()//报错
var y = new Reactangle()