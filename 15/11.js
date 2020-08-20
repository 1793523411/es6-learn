var engines = new Set(["Gecko","Trident","webkit","webkit"])
for(var e of engines){
    console.log(e)
}

var es6 = new Map()
es6.set('edition',6)
es6.set("standard","ECMA-262")
es6.set("Committee","TC39")
for(var [name,value] of es6){
    console.log(name+": "+value)
}//遍历顺序为添加顺序

//set遍历返回的是一个值，map遍历返回的是一个数组


let arr = ['a','b','c']
for(let pair of arr.entries()){
    console.log(pair)
}
// [ 0, 'a' ]
// [ 1, 'b' ]
// [ 2, 'c' ]