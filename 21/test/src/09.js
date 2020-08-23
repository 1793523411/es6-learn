import {autobind,readonly,override,deprecate,suppressWarnings} from "core-decorators"

class Person {
    @autobind
    getPerson(){
        return this;
    }
}

let person = new Person()
let getPerson = person.getPerson;

console.log(getPerson() === person)


// class Meal{
//     @readonly
//     entree = 'steak';
// }
// var dinner = new Meal()
// dinner.entree = 'salmo'


class Parent{
    speak(first, second){}
}

//检查是否正确的覆盖了父类的方法
class Child extends Parent{
    @override
    speak(first,second){}
}

class Person2{
    @deprecate
    facepalm(){}

    @deprecate('We stopped facepalming')
    facepalmHard(){}

    @deprecate('we stopped facepalming',
    {url:'http://...'})
    facepalmHarder(){}
}

let person2 = new Person2()
person2.facepalm()
person2.facepalmHard()
person2.facepalmHarder()
// DEPRECATION Person2#facepalm: This function will be removed in future versions.
// DEPRECATION Person2#facepalmHard: We stopped facepalming
// DEPRECATION Person2#facepalmHarder: we stopped facepalming

//     See http://... for more details.


class Person3{
    @deprecate
    facepalm(){}

    @suppressWarnings
    facepalmWithoutWaring(){
        this.facepalm()
    }
}
//抑制decorated修饰器导致的console.warn()调用,但异步代码发出的调用外
let person3 = new Person3()
person3.facepalmWithoutWaring()
// DEPRECATION Person3#facepalm: This function will be removed in future versions.