const queueObservers = new Set()

const observe = fn => queueObservers.add(fn)
const observable = obj => new Proxy(obj,{set})

function set(target,key,value,receiver){
    const result = Reflect.set(target,key,value,receiver)
    //执行所有观察者
    queueObservers.forEach(observer => observer())
    return result
}

const person = observable({
    name:'张三',
    age:20
})

function print(){
    console.log(`${person.name},${person.age}`)
}
function print2(){
    console.log(`${person.name}`)
}

observe(print)
observe(print2)

person.name = '李四'
// 李四,20
// 李四
