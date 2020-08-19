//默认调用Symbol.iterator
let set = new Set().add('a').add('b').add('c')
let [x,y] = set
//x='a';y='b'
let [first,...rest] = set
// first='a';rest=['b','c']


var str = 'hello'
console.log([...str])


let arr = ['b','c']
console.log(['a',...arr,'d'])

let generator = function* (){
    yield 1;
    yield* [2,3,4];
    yield 5;
}
var iterator = generator()

iterator.next()
iterator.next()
iterator.next()
iterator.next()
iterator.next()
iterator.next()