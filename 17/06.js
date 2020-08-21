var co = require("co");
const fs = require("fs");

var gen = function*(){
    var f1 = yield fs.readFile('./04.js')
    var f1 = yield fs.readFile('./03.js')
    console.log(f1.toString())
    console.log(f2.toString())
}

co(gen).then(function(){
    console.log('Generator函数执行完成')
})

var readFile = function(fileName){
    return new Promise(function(reslove, reject){
        fs.readFile(fileName, function(error, data){
            if(error) return reject(error)
            reslove(data)
        })
    })
}
var gen = function* (){
    var f1 = yield readFile('./04.js')
    var f1 = yield readFile('./03.js')
    console.log(f1.toString())
    console.log(f2.toString())
}

var g = gen()
g.next().value.then(function(data){
    g.next(data).value.then(function(data){
        g.next(data)
    })
})

function run(gen){
    var g = gen();
    function next(data){
        var result = g.next(data)
        if(result.done) return result.value;
        result.value.then(function(data){
            next(data)
        })
    }
    next()
}
run(gen)