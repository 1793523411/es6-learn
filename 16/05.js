function* foo(){
    yield 1
    yield 2
    yield 3
    yield 4
    yield 5
    return 6
}

for(let v of foo()){
    console.log(v)
}
//一旦done为true，循环就会终止，且不包含该返回对象，上面的return语句返回的6不包括在for···of循环中

function* fibonacci(){
    let [prev, curr] = [0,1]
    for(;;){
        [prev,curr] = [curr,prev+curr]
        yield curr
    }
}

for(let n of fibonacci()){
    if(n>1000) break
    console.log(n)
}

//遍历对象
function* objectEntries(obj){
    let propKeys = Reflect.ownKeys(obj)

    for(let propKey of propKeys){
        yield [propKey,obj[propKey]]
    }
}
let jane = {first:'Jane',last:"Done"}

for(let [key,value] of objectEntries(jane)){
    console.log(`${key}:${value}`)
}


function* objectEntries2(){
    let propKeys = Object.keys(this)
    for(let propKey of propKeys){
        yield [propKey,this[propKey]]
    }
}
let jane2 = {first:'Jane',last:"Done"}

jane2[Symbol.iterator] = objectEntries2

for(let [key,value] of jane2){
    console.log(`${key}:${value}`)
}


function* numbers(){
    yield 1;
    yield 2;
    return 3;
    yield 4;
}

console.log([...numbers()])
console.log(Array.from(numbers()))
// [ 1, 2 ]
// [ 1, 2 ]
let [x,y] = numbers()

for(let n of numbers()){
    console.log(n)
}