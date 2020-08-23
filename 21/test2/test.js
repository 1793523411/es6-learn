var babel = require('babel-core')
var fs = require('fs')

var str
fs.readFile('./01.js','utf-8',(err,res) => {
    // console.log(res)
    str = res
})

var res1 = babel.transform(str,{presets:['latest'],plugins:["transform-decorators"]},(err,result) => {
    // console.log(result)
})
var res = babel.transformFile('./01.js',{presets:['latest'],plugins:["transform-decorators"]},(err,result) => {
    result
})
console.log(res1)
console.log(res)