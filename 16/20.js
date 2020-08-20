//可以再任意对象上部署遍历器接口
function* iterEntries(obj){
    let keys = Object.keys(obj)
    for(let i = 0; i< keys.length ; i++){
        let key = keys[i]
        yield [key,obj[key]]
    }
}

let myObj = {foo:3,bar:7}

for(let [key, value] of iterEntries(myObj)){
    console.log(key, value)
}


function* makeSimpleGenerator(array){
    var nextIndex = 0
    while(nextIndex < array.length){
        yield array[nextIndex++]
    }
}

var gen = makeSimpleGenerator(['yo','ya'])
console.log(gen.next()).value
console.log(gen.next()).value
console.log(gen.next()).done