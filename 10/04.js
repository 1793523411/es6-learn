function A(){
    this.foo = 'hello'
}

if(!global._foo){
    global_.foo = new A()
}
//保证了每次引用都是同一个
modules.exports = global._foo

//但是由于是全局的任何文件都可以修改，会失真

//使用Symbol可以解决这个问题

const FOO_KEY = Symbol.for('foo')

function A(){
    this.foo = 'Hello'
}

if(!global(FOO_KEY)){
    global[FOO_KEY] = new A()
}

modules.exports = global[FOO_KEY]