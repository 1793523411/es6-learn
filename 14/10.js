asyncFunc()
.then(f1)
.catch(r1)
.then(f2)
.cone()

Promise.prototype.done = function(onFulfilled,onRejected){
    this.then(onFulfilled,onRejected)
    .catch(function(reason){
        //抛出一个全局错误
        setTimeout(() => {throw reason}),0
    })
}

server.listen(0)
.then(function(){
    //ruhn test
})
.finally(server.stop)

Promise.prototype.finally = function(callback){
    let p = this.constructor
    return this.then(
        value => p.resolve(callback()).then(() => value),
        reason => p.resolve(callback()).then(() => {throw reason})
    )
}