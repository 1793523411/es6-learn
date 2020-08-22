const MyClass = class Me{
    getClassName(){
        return Me.name
    }
}
//上面定义了一个名字叫MyClass的类，Me只在Class的内部代码可用，可以省略
let inst = new MyClass()
inst.getClassName()//Me
// Me.name//报错

//class后可以省略名字可以省略，可以写出立即执行的Class
let person = new class {
    constructor(name){
        this.name = name
    }
    sayName(){
        console.log(this.name)
    }
}('张三')

person.sayName()