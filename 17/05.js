// function* gen(){
//     //...
// }
// var g = gen()
// var res = g.next()

// while(!res.done){
//     console.log(res.value)
//     res = g.next()
// }

//上面不适合异步操作

var fs = require('fs')
var thunkify = require('thunkify')
var readFileThunk = thunkify(fs.readFile)

var gen = function* (){
    var r1 = yield readFileThunk('./04.js')
    console.log(r1.toString())
    var r2 = yield readFileThunk('./03.js')
    console.log(r2.toString())
}

//手动执行
var g = gen()
var r1 = g.next()
r1.value(function(err,data){
    if(err) throw err;
    var r2 = g.next(data)
    r2.value(function(err,data){
        if(err) throw err;
        g.next(data)
    })
})



function run(fn){
    var gen = fn()
    function next(err,data){
        var result = gen.next(data)
        if(result.done) return;
        result.value(next)
    }
    next()
}

function* g(){
    var f1 = yield readFile('fileA')
    var f2 = yield readFile('fileB')
    //...
    var fn = yield readFile('fileN')
}
run(g)