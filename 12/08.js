var handler = {
    deleteProperty(target, key){
        invariant(key, 'delete')
        return true
    }
}

function invariant(key, action){
    if(key[0] === '_'){
        throw new Error('error')
    }
}

var target = {_prop:'foo'}
var proxy = new Proxy(target,handler)
delete proxy._prop