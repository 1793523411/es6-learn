let myElement = document.getElementById('logo')
let myWeakMap = new WeakMap()

myWeakMap.set(myElement, {timeClicked: 0})

myElement.addEventListener('click',function(){
    let logodata= myWeakMap.get(myElement)
    logodata.timeClicked++;
},false)

//一旦Dom节点消失，该状态自动消失，不会造成内存泄漏
//适合注册监听事件的listener对象

const listener = new WeakMap()

listener.set(element1,handler1)
listener.set(element2,handler2)

element1.addEventListener('click',listener.get(element1),false)
element2.addEventListener('click',listener.get(element2),false)

//监听函数在WeakMap中，一旦Dom消失，他绑定的监听函数也会自动消失



//部署私有属性
//下面这两个是实例的弱引用，会随着实例的消失而消失
const _counter = new WeakMap()
const _action = new WeakMap()

class Countdown {
    constructor(counter,action){
        _counter.set(this,counter)
        _action.set(this,action)
    }
    dec(){
        let counter = _counter.get(this)
        if(counter <1) return
        counter--
        _counter.set(this,counter)
        if(counter === 0){
            _action.get(this)()
        }
    }
}

const c = new Countdown(2,() => console.log('DONE'))