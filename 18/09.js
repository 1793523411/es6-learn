const { parse } = require("path")

async function f(){
    for await (const x of createAsyncIterable('a','b')){
        console.log(x)
    }
}
f()

let body = ''
async function f(){
    for await(const data of req) body += data
    const parsed = JSON.parse(body)
    console.log('got',parsed)
}

//捕获reject的异常
async function f(){
    try {
        for await(const x of createRejectIterable()){
            console.log(x)
        }
    } catch (e) {
        console.error(e)
    }
}

// 也可用于同步遍历
(async function(){
    for await (const x of ['a','b']){
        console.log(x)
    }
})