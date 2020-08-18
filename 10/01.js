var s1 = Symbol("foo");
var s2 = Symbol("bar");

console.log(s1);
console.log(s2);

console.log(s1.toString());
console.log(s2.toString());

const obj = {
  b: 2,
  toString() {
    return "abc";
  },
  a: 1,
};
const syn = Symbol(obj);
console.log(syn);

var mySmbol = Symbol()

//1
var a = []
a[mySmbol] = 'Hello'
//2
// var a = {
//   [mySmbol]:'Hello'
// }
// //3
var a = {}
// Object.defineProperty(a,mySmbol,{value:'Hello'})

// console.log(a[mySmbol])//Hello

a.mySmbol = 'Hello'
console.log(a[mySmbol])//undefined
console.log(a['mySmbol'])//Hello

let s = Symbol()

// let obj = {
//   [a]:function(arg){}
// }
// let obj = {
//   [a](arg){}
// }
// obj[a](123)


 log.level = {
  DEBUG:Symbol('debug'),
  INFO:Symbol('info'),
  WARN:Symbol('warn')
}

log(log.level.DEBUG,'debug message')
log(log.level.INFO,'info message')

console.log(log)

const COLOR_RED = Symbol()
const COLOR_GREEN = Symbol()

function getComplement(color){
  switch(color){
    case COLOR_RED:
      return COLOR_GREEN
    case COLOR_GREEN:
      return COLOR_RED
    default:
        throw new Error('Undefined color')
  }
}