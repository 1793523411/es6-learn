var fs = require('fs')
var readFile = function(fileName){
    return new Promise(function(reslove, reject){
        fs.readFile(fileName,function(error, data){
            if(error) return reject(error)
            reslove(data)
        })
    })
}

var gen = function* (){
    var f1 = yield readFile('../17/package-lock.json')
    var f2 = yield readFile('../17/08.js')
    console.log(f1.toString())
    console.log(f2.toString())
}

var asyncReadFile = async function(){
    var f1 = await readFile('../17/package-lock.json')
    var f2 = await readFile('../17/08.js')
    console.log(f1.toString())
    console.log(f2.toString())
}