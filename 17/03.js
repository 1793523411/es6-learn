function f(m){
    return m * 2
}
f(x+5)

//等同于
//传名调用实现策略
var thunk = function(){
    return x+5
}
function f(thunk){
    return thunk() * 2
}

fs.readFile(fileName, callback)

var thunk = function(fileName){
    return function(callback){
        return fs.readFile(fileName, callback)
    }
}
var readFileThunk = Thunk(fileName)
readFileThunk(callback)


//thun函数转换器例子
//es5
var thunk = function(fn){
    return function(){
        var args = Array.prototype.slice.call(arguments)
        return function(callback){
            args.push(callback)
            return fn.apply(this,args)
        }
    }
}

//es6
const Thunk = function(fn){
    return function(...args){
        return function(callback){
            return fn.call(this,...args,callback)
        }
    }
}


var readFileThunk = Thunk(fs.readFile)
readFileThunk(fileA)(callback)

function f(a,cb){
    cb(a)
}
const ft = Thunk(f)
ft(1)(console.log)