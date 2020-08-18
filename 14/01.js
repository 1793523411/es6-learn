// var promise = new Promise(function(reslov, reject){
//     if(/*异步操作成功*/ ){
//         reslove(value)
//     }else{
//         reject(error)
//     }
// })
// Promise.then(function(value){
//     //success
// },function(error){
//     //failure
// })

function timeout(ms){
    return new Promise((reslove, reject) => {
        // setTimeout(reslove('done'), ms)//可以打印结果，但时间不对
        setTimeout(reslove, ms,'done')//正常
    })
}

timeout(3000).then((value) => {
    console.log(value)
})


let promise = new Promise(function(reslove,reject){
    console.log('promise')
    reslove()
})

promise.then(function(){
    console.log('Resloved')
})

console.log('Hi')

// promise
// Hi
// Resloved
// done