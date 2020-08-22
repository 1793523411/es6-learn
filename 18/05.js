async function f(){
    await new Promise(function(reslove, reject){
        throw new Error('出错了')
    })
}
f().then(console.log).catch(console.log)

async function f2(){
    try {
        await new Promise(function(reslove, reject){
            throw new Error('出错了')
        })
    } catch (e) {
        
    }
    return await('hello')
}
f2().then(console.log).catch(console.log('aaa'))

async function main(){
    try {
        var val1 = await firstStep()
        var val2 = await secondStep(val1)
        var val3 = await thirdStep(val2)
        console.log('Final: ',val3)
    } catch (e) {
        console.error(err)
    }
}

const superagent = require("superagent")
const NUM_REQUEST = 3

async function test(){
    let i 
    for(i=0; i< NUM_REQUEST; i++){
        try {
            await superagent.get('http://...')
            break
        } catch (e) {
            
        }
    }
    console.log(i)//3
}