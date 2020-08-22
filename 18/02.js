// async function getStockPriceByName(name){
//     var symbol = await getStockSymbol(name);
//     var stockPrice = await getStockPriceByName(symbol)
//     return stockPrice
// }

// getStockPriceByName('goog').then(function(result){
//     console.log(result)
// })

// function timeout(ms){
//     return new Promise((reslove) => {
//         setTimeout(reslove,ms)
//     })
// }

// async function asyncPrint(value,ms){
//     await timeout(ms)
//     console.log(value)
// }

// asyncPrint('hello',5000)

//也可以这样写，async返回的是Promise对象，可作为await命令的参数
async function timeout(ms){
    await new Promise((reslove) => {
        setTimeout(reslove, ms)
    })
}

async function asyncPrint(value,ms){
    await timeout(ms)
    console.log(value)
}

asyncPrint('hello word',50)

// async函数有多种使用方式

async function foo(){}

const foo = async function(){}

let obj = {async foo(){}}
// obj.foo.then(...)

class Storage{
    constructor(){
        this.cachePromise = caches.open('avatars')
    }
    async getAvatar(name){
        const cache = await this.cachePromise;
        return cache.match(`/avator/${name}.jpg`)
    }
}

const storage = new Storage()
// storage.getAvatar('jake').then(...)

const foo = async () => {}


