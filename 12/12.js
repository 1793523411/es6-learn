var p =new Proxy({},{
    isExtensible:function(target){
        console.log('called')
        return true
    }
})
//返回值必须与目标对象的isExtensible属性保持一致
Object.isExtensible(p)
// Object.isExtensible(proxy) === Object.isExtensible(target)

var p = new Proxy({},{
    isExtensible:function(taget){
        return false
    }
})

// > Object.isExtensible({})
// true
Object.isExtensible(p)//抛出错误