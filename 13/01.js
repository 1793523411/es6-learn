//旧写法
try {
    Object.defineProperty(target,property, attributes)
} catch (e) {
    
}

name in obj
delete obj[name]

//新写法
if(Reflect.defineProperty(target,property,attributes)){

}else{

}

Reflect.has(obj,name)
Reflect.deleteProperty(obj,name)


Proxy(target,{
    set:function(target,name,value,receiver){
        var success = Reflect.set(target,name,value,receiver)
        if(success){
            log('property'+name+'on'+target+'set to'+ value)
        }
        return success
    }
})


var logger = new Proxy(obj,{
    get(target,name){
        console.log('get',target, name)
        return Reflect.get(target,name)
    },
    deleteProperty(target,name){
        console.log('delete'+name)
        return Reflect.deleteProperty(target,name)
    },
    has(target,name){
        console.log('has'+name)
        return Reflect.has(target,name)
    }
})



Function.prototype.apply.call(Math.floor,undefined,[1.75])
Reflect.apply(Math.floor,undefined,[1.75])