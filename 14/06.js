// //Node中的unhandleRejection事件，专门监听未捕获的reject错误
// process.on('unhandleRejection',function(err,p){
//     console.error(err.stack)
// })

var someAsyncThing = function(){
    return new Promise(function(reslove,reject){
        reslove(x+2)
    })
}

// someAsyncThing()
// .catch(function(error){
//     console.log('oh no',error)
// })
// .then(function(){
//     console.log('carray on')
// })

// Promise.reslove()
// .catch(function(error){
//     console.log('oh no',error)
// })
// .then(function(){
//     console.log('carry on')//这里出错就与前面的catch无关了
// })

//catch里可以在抛出错误
someAsyncThing().then(function(){
    return someAsyncThing()
}).catch(function(error){
    console.log('oh no',error)
    y+2
}).then(function(){
    console.log('carry on')
})
// (node:1636) UnhandledPromiseRejectionWarning: ReferenceError: y is not defined
//     at e:\desktop\start\node\es6\14\06.js:33:5
// !(node:1636) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). (rejection id: 2)
// (node:1636) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.


someAsyncThing().then(function(){
    return someAsyncThing()
}).catch(function(error){
    console.log('oh no',error)
    y+2
}).then(function(){
    console.log('carry on')
}).catch((e) => {
    console.log('最后的error')
    console.log(e)
})