// var jsPromise = Promise.resolve($.ajax('/whatever.json'))

// Promise.resolve('foo')
// // =>
// new Promise(resolve => resolve('foo'))

//参数分为四种情况
// 1.参数是一个Promise实例，不作任何修改
// 2.参数是一个thenable对象

//thenable对象
let thenable = {
    then: function(resolve,reject){
        resolve(42)
    }
}

let p1 = Promise.resolve(thenable)//将thenable对象转为Promise对象，并立即执行thenable对象的then的方法
p1.then(function(value){
    console.log(value)
})

//3. 参数是不具有then方法的对象或根本不是对象
var p = Promise.resolve('Hello')

p.then(function(s){
    console.log(s)
})

//4.不带任何参数，立即resolve的Promise的对象是在本轮事件循环结束时而不是在下一轮

var p = Promise.resolve()
p.then(function(){

})

setTimeout(function(){
    console.log('three')
})

Promise.resolve().then(function(){
    console.log('two')//微任务先执行，在上面的宏任务的上一轮事件循环执行
})
console.log('one')//立即执行



var p = new Promise.reject('出错了')
//=>
var p = new Promise((resolve,reject) => reject('出错了'))

p.then(null,function(s){
    console.log(s)
})


const thenable = {
    then(resolve,reject){
        reject('出错了')
    }
}
Promise.reject(thenable)
.catch(e => {
    console.log(e === thenable)//!不是'出错了'这个字符串而是thenable这个对象，这与resolve不同
})
// Promise { <pending> }
// > true