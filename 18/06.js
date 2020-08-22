// async function myFunction(){
//     await somethingThatReturnsApromise()
//     .catch(function(err){
//         console.log(err)
//     })
// }

let foo = await getFoo()
let bar = await getBar()

//上面不是同时出发，下面是同时触发
let [foo,bar] = await Promise.all([getFoo(),getBar()])//两个Promise同时触发

//同时触发
let fooPromise = getFoo()
let barPromise = getbar()
let foo = await fooPromise
let bar = await barPromise



// await只能用在async函数之中，其他地方会报错
function DBFun(db){
    let docs = [{},{},{}]
    docs.forEach(async function(doc){
        await db.post(doc)
    })
}
//上面代码可能不会正常执行，因为3个db.post并发执行即同时执行而不是继发执行

//应该使用for循环
async function dbFunc(db){
    let docs = [{},{},{}]
    for(let doc of docs){
        await db.post(doc)
    }
}


//如果希望并发执行
async function dbFunc(db){
    let docs = [{},{},{}]
    let promise = docs.map((doc) => db.poster(doc))

    let results = await Promise.all(promise)
    console.log(results)
}
//或

async function dbFunc(db){
    let doc = [{},{},{}]
    let promises = doc.map(doc => db.post(doc))

    let result = []
    for(let promise of promises){
        result.push(await promise)
    }
    console.log(results)
}
