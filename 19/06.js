class MyClass {
    constructor(){

    }
    get prop(){
        return 'getter'
    }
    set prop(value){
        console.log('setter:'+value)
    }
}
let inst = new MyClass()
inst.prop = 123
console.log(inst.prop)
// setter:123
// getter

class CustomHTMLElement {
    constructor(element){
        this.element = element
    }
    get html(){
        return this.element.innerHTML
    }
    set html(value){
        this.element.innerHTML = value
    }
}

var descriptor = Object.getOwnPropertyDescriptor(
    CustomHTMLElement.prototype,"html"
)
// setter:123
// getter