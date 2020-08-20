function* helloWorldGenerator(){
    yield 'hello'
    yield 'world'
    yield 'ending'
}

var hw = helloWorldGenerator()

> hw
// Object [Generator] {}
// > hw.next()
// { value: 'hello', done: false }
// > hw.next()
// { value: 'world', done: false }
// > hw.next()
// { value: 'ending', done: false }
// > hw.next()
// { value: undefined, done: true }

function* f(){
    console.log('执行了')
}
var generator = f()

setTimeout(function(){
    generator.next()
},2000)

var arr = [1,[[2,3],4],[5,6]]

var flat = function* (a){
    var length = a.length
    for(var i = 0; i<length;i++){
        var item = a[i]
        if(typeof item !== 'number'){
            yield* flat(item)
        }else{
            yield item;
        }
    }
}
for(var f of flat(arr)){
    console.log(f)
}

//yield放在另一个表达式之中，必须放在圆括号内
//yield表达式用作参数或放在赋值语句右边可不加括号
function* demo(){
    // console.log('Hello'+yield)//error
    console.log('hello'+(yield))//ok
}

function* demo(){
    foo(yield 'a', yield 'b')
    let input = yield
}