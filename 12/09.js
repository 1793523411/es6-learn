var handler = {
    defineProperty(target, key,descriptor){
        return false
    }
}
var target = {}
var proxy = new Proxy(target,handler)
proxy.foo = 'bars'