class Logger {
    printName(name = 'there'){
        this.print(`Hello ${name}`)
    }
    print(text){
        console.log(text)
    }
}

const logger = new Logger()
// const {printName} = logger
logger.printName()
// printName()//报错

//当单独取出来使用时，this指向该方法运行时所在环境
class Logger2 {
    printName(name = 'there'){
        console.log(name)
    }
}
const logger2 = new Logger2()
const {printName} = logger2
printName()//there


//解决报错

//绑定this或箭头函数
class Logger {
    constructor(){
        this.printName = this.printName.bind
    }
}
class Logger {
    constructor(){
        this.printName = (name = 'three') => {
            this.print(`hello ${name}`)
        }
    }
}

//使用Proxy解决，在获取方法的时候自动绑定this

function selfish(target){
    const cache = new WeakMap()
    const handler = {
        get(target, key){
            const value = Reflect.get(target, key)
            if(typeof value !== 'function'){
                return value
            }
            if(!cache.has(value)){
                cache.set(value,value.bind(target))
            }
            return cache.get(value)
        }
    }
    const proxy = new Proxy(target, handler)
    return proxy
}

const logger = selfish(new Logger)
