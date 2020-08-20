var g = function* (){
    while(true){
        yield;
        components.log('内部捕获',e)
    }
}

var i =g()
i.next()

try {
    i.throw('a')
    i.throw('b')
} catch (e) {
    console.log('外部错误',e)//外部错误 a
}