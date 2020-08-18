function f(v, w, x, y, z) {}
var arg = [0, 1];
f(-1,...args,2,...[3])

//apply讲数组转为函数参数

function f(x,y,z){}
var arg = [1,2,3]
f.apply(null,args)

function f(x,y,z){}
var args = [1,2,3]
f(...args)

//下面三个等价
Math.max.apply(null,[14,3,77])
Max.max(...[14,3,77])
Math.max(14,3,77)

// push方法参数不可以是数组，所以es5只能变通
var arr1 = [0,1,2]
var arr2 = [3,4,5]
Array.prototype.push.apply(arr1,arr2)
//=
var arr1 = [0,1,2]
var arr2 = [3,4,5]
arr1.push(...arr2)

new (Date.bind.apply(Date,[null,2015,1,1]))
new Date(...[2015,1,1])

