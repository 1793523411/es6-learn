// async function f(){
//     return 'hello world';
// }

// f().then(v => console.log(v))

// async function f(){
//     throw new Error('出错了')
// }
// f().then(
//     v => console.log(v),
//     e => console.log(e),
// )


//内部所有的await执行完，Promise的状态才会发生改变，除非遇到return或抛出错误

const fetch = require('node-fetch')
async function getTitle(url){
    let response = await fetch(url)
    let html = await response.text()
    return html.match(/<title>([\s\S]+)<\/title>/i)[1]
}
getTitle('https://tc39.github.io/ecma262/').then(console.log)
// ECMAScript® 2021 Language&nbsp;Specification

