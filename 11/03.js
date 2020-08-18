// const ws = new WeakSet()
/*
const a = [[1.2],[3,4]]

const ws = new WeakSet(a)

console.log(ws)
*/

const ws = new WeakSet()
const obj = {}
const foo = {}

ws.add(window)
ws.add(obj)

ws.has(window)
ws.has(obj)

ws.delete(window)
ws.has(window)

const foos = new WeakSet()
class Foo {
    constructor(){
        foos.add(this)
    }
    methods() {
        if(!foos.has(this)){
            throw new TypeError('Foo.prototype.method只能在Foo的实例上调用！')
        }
    }
}