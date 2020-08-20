var g = function* (){
    while(true){
        try {
            yield;
        } catch (e) {
            if(e != 'a') throw e;
            console.log('内部捕获',e)
        }
    }
}

var i = g()
i.next()

try {
    throw new Error('a')
    throw new Error('b')
} catch (e) {
    console.log('外部错误',e)
}