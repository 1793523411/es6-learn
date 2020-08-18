getJson('/post.json').then(function(posts){

}).catch(function(error){
    console.log('发生错误',error)
})

p.then(val => console.log('fulfilled:',val))
.catch(err => console.log('rejected',err))
//等同于
p.then(val => console.log('fulfilled:',val))
.then(null,err => console.log('rejectde',err))


var promise = new Promise(function(reslove, reject){
    throw new Error
})

promise.catch(function(error){
    console.log(error)
})

//与下面两种写法等价
var promise = new Promise(function(reslove,reject){
    try {
        throw new Error('test')
    } catch (e) {
        reject(e)
    }
})
promise.catch(function(error){
    console.log(error)
})

var promise  = new Promise(function(reslove,reject){
    reject(new Error('test'))
})
promise.catch(function(error){
    console.log(error)
})

//当Promise的状态变为resloved，在抛出错误无效
var promise = new Promise(function(reslove,reject){
    reslove('ok')
    throw new Error('test')
})
promise
.then(function(value){console.log(value)})
    .catch(function(error){console.log(error)})


//Promise的冒泡，应该总是用catch捕获异常，而不是把reject写在then中
getJSON('/post.1.json').then(function(post){
    return getJSON(post.commentURL)
}).then(function(comments){

}).catch(function(error){
    //处理前面三个Promise产生的错误
})


var someAsycThing = function(){
    return new Promise(function(reslove,reject){
        reslove(x+2)
    })
}
//报未定义错误
someAsycThing().then(function(){
    console.log('everything is great')
})
someAsycThing().then(function(){
    console.log('everything is great')
}).catch(err => {
    console.log('err')
})


var promise = new Promise(function(reslove,reject){
    reslove('ok')//微任务
    setTimeout(function(){throw new Error('test')},3000)//宏任务
})
promise.then(function(value){console.log(value)})

