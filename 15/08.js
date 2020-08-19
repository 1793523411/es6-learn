var myIterator = {}
myIterator[Symbol.iterator] = function* (){
    yield 1;
    yield 2;
    yield 3;
}
// [...myIterator]

//简介写法

let obj = {
    * [Symbol.iterator](){
        yield 'hello';
        yield 'world'
    }
}

for(let x of obj){
    console.log(x)
}