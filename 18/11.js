async function* gen1(){
    yield 'a'
    yield 'b'
    return 2
}
async function* gen2(){
    const result = yield* gen1()//result为2
    console.log(result)
}

(async function(){
    for await (const x of gen2()){
        console.log(x)
    }
})()

// a
// b
// 2
