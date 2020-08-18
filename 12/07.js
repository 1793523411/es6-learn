// var handler = {
//     construct(target,args,newTarget){
//         return new target(...args)
//     }
// }
var p = new Proxy(function(){},{
    construct:function(target,args){
        console.log('called: '+args.join(', '))
        return {value:args[0]*10}
    }
})

console.log((new p(1)).value)


var p = new Proxy(function(){},{
    construct:function(target,arguments){
        return 1
    }
})

new p()//报错，construct必须返回对象