var fetch = require('node-fetch')

function * gen(){
    var url = 'https://api.github.com/users/github'
    var result = yield fetch(url)
    // console.log(result.bio)
}
var g = gen()
var result = g.next()
// console.log(result)
result.value.then(function(data){
    console.log(data)
    return data.json()
}).then(function(data){
    // console.log(data)
    g.next()
})

//因为fetch模块返回的是一个Promise对象，所以要用用then方法调用xiayigenext