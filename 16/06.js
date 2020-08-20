// var g = function* (){
//     try {
//         yield;
//     } catch (e) {
//         console.log('error:',e)
//     }
// }

// var i = g()
// i.next()


// try {
//     i.throw('a')
//     i.throw('b')
// } catch (e) {
//     console.log('error2：',e)
// }

var g = function* (){
    try {
        yield;
    } catch (e) {
        console.log(e)
    }
}

var i = g()
i.next()
i.throw(new Error('出错了!'))
