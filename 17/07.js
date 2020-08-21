const co = require("co");

//并发的异步操作
co(function* (){
    var res = yield [
        Promise.resolve(1),
        Promise.resolve(12)
    ]
    console.log(res)
}).catch(onerror)

co(function* (){
    var res = yield {
        1:Promise.resolve(1),
        2:Promise.resolve(2),
    }
    console.log(res)
}).catch(onerror)

co(function* (){
    var values = [n1,n2,n3]
    yield values.map(somethingAsync)
})
function* somethingAsync(x){
    //...
    return y
}