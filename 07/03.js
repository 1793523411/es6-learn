//利用参数默认值指定某一参数不得省略，如果省略就抛出错误

function throwIfMissing(){
    throw new Error('Missing Parameter')
}

function foo(mustBeProvided = throwIfMissing()){
    return mustBeProvided
}

foo()//报错