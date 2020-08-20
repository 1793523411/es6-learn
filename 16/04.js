function* foo(x){
    var y = 2*(yield(x+1))
    var z = yield(y/3)
    return (x+y+z)
}
var a = foo(5)
console.log(a.next())
console.log(a.next())
console.log(a.next())
var b = foo(5)
console.log(b.next())
console.log(b.next(12))
console.log(b.next(13))


//让第一个next的参数起作用
function wrapper(generatorFunction){
    return function(...args){
        let generatorObject = generatorFunction(...args)
        generatorObject.next()
        return generatorObject
    }
}
const wrapped = wrapper(function* (){
    console.log(`First input: ${yield}`)
    return 'DONE'
})

wrapped().next('hello!')
// { value: 'DONE', done: true }