// apply拦截函数的调用，call，apply操作

var handler = {
    apply(target, ctx ,args){
        return Reflect.apply(...arguments)
    }
}

var target = function(){return 'I am the target'}
var handler = {
    apply: function(){
        return 'I am the proxy'
    }
}

var p = new Proxy(target, handler)
console.log(p())//I am the proxy


var twice = {
    apply(target, ctx ,args){
        return Reflect.apply(...arguments)*2
    }
}

function sum(left, right){
    return left + right
}

var proxy = new Proxy(sum,twice)
console.log(proxy(1,2))
console.log(proxy.call(null,5,6))
console.log(proxy.apply(null,[7,8]))
console.log(Reflect.apply(proxy,null,[9,10]))

// proxy.call(null,5,6)
// proxy.apply(null,[7,8])