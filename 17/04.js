var thunkify = require('thunkify')
var fs = require('fs')

var read = thunkify(fs.readFile)
read('./03.js','utf-8')(function(err,str){
    console.log(str)
})


function f(a,b,callback){
    var sum = a+ b
    callback(sum)
    callback(sum)
}

var ft = thunkify(f)
var print = console.log.bind(console)
ft(1,2)(print)

// 3//只执行一遍callback
// <Buffer 66 75 6e 63 74 69 6f 6e 20 66 28 6d 29 7b 0d 0a 20 20 20 20 72 65 74 75 72 6e 20 6d 20 2a 20 32 0d 0a 7d 0d 0a 66 28 78 2b 35 29 0d 0a 0d 0a 2f 2f e7 ... 957 more bytes>