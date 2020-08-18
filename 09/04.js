class Point {
  constructor(x, y) {
    Object.assign(this, { x, y });
  }
}

var point = new Point(1, 2);
console.log(point);

//为对象添加方法
Object.assign(SomeClass.prototype, {
  someMethod(arg1, arg2) {},
  anotherMethod() {},
});
//=
SomeClass.prototype.someMethod = function(arg1,arg2){}
SomeClass.prototype.anotherMethod = function(){}

//克隆对象
function clone(origin){
    return Object.assign({},origin)
}
//深层克隆
function deepclone(origin){
    let originProto = Object.getPrototypeOf(origin)
    return Object.assign(Object.create(originProto),origin)
}

//合并多个对象
const merge = (target,...source) => Object.assign(target,...source)
//返回一个新对象
const merge2 = (...source) => Object.assign({},...source)


//为属性指定默认追
const DEFAULTS = {
    logLevel: 0,
    outputFormat: 'html'
}

function processContent(options){
    options = Object.assign({},DEFAULTS,options)
    console.log(options)
}


