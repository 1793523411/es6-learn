// function foo(){
//     setTimeout(() => {
//         console.log('id:',this.id)
//     },100)
// }

// var id = 21

// foo.call({id:42})

function foo() {
  // var _this = this
  setTimeout(function () {
    // console.log('id:',_this.id)
    //指向timeout
    console.log(this);
    console.log("id:", this.id);
  }, 100);
}

var id = 21;

foo.call({ id: 42 });

/*
function Timer() {
  this.s1 = 0;
  this.s2 = 0;
  setInterval(() => {
    this.s1++;
    console.log(this)
  }, 1000);
  setInterval(function () {
    this.s2++;
    //this指向timeout
    console.log(this)
  }, 1000);
}

var timer = new Timer();

setTimeout(() => console.log("s1", timer.s1), 3100);
setTimeout(() => console.log("s2", timer.s2), 3100);
*/

var handler = {
  id: "123456",
  init: function () {
    document.addEventListener(
      "click",
      (event) => this.doSomething(event.type),
      false
    );
  },
  doSomething: function (type) {
    console.log("Handle", type + "for", this.id);
  },
};



function foo(){
    return ()=>{
        return ()=>{
            return ()=>{
                console.log('id',this.id)
            }
        }
    }
}

var f = foo.call({id:1})

var t1 = f.call({id:2})()()//1
var t2 = f().call({id:3})()//1
var t3 = f()().call({id:2})//1

//不能用call(),apply(),bind()这些方法去改变this的指向
(function(){
    return [
        (()=>this.x).bind({x:'inner'})()
    ]
}).call({x:outer})
//[outer]


const pipeline = (...funcs) => val => funcs.reduce((a,b) => b(a),val)

const plus1 = a => a+1
const plus2 = a => a*2
const addThenMult = pipeline(plus1,plus2)

addThenMult(5)//12

//也可以这样写

const plus1 = a => a+1
const mult2 = a => a+2
mult2(plus1(5))//12