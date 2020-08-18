//map与数组
const myMap = new Map()
.set(true,7)
.set({foo:3},['abc']);
console.log([...myMap])

console.log(
    new Map([
    [true,7],
    [{foo:3},['abc']]
])
)


// Map{
//     true => 7,
//     Object {foo:3} => ['abc']
// }


//map与对象
function strMapToObj(strMap){
    let obj = Object.create(null)
    for(let [k,v] of strMap){
        obj[k] = v
    }
    return obj
}

const myMap2 = new Map()
.set('yes',true)
.set('no',false)
console.log(strMapToObj(myMap2));


function objToStrMap(obj){
    let strMap = new Map()
    for(let k of Object.keys(obj)){
        strMap.set(k,obj[k])
    }
    return strMap
}

console.log(objToStrMap({yes:true,no:false}))
//Map { 'yes' => true, 'no' => false }


//JSON
//map健名都是字符串
function strMapToJson(strMap){
    return JSON.stringify(strMapToObj(strMap))
}

let myMap3 = new Map()
.set('yes',true)
.set('no',false)

console.log(strMapToJson(myMap3))

//map健名有非字符串，选择转为数组JSON
function mapToArrayJson(map){
    return JSON.stringify([...map])
}
let myMap5 = new Map()
.set(true,7)
.set({foo:3},['abc'])

console.log(mapToArrayJson(myMap5))
//[[true,7],[{"foo":3},["abc"]]]


function jsonToStrMap(jsonStr){
    return objToStrMap(JSON.parse(jsonStr))
}
console.log(jsonToStrMap('{"yes":true,"no":false}'))//Map { 'yes' => true, 'no' => false }

function jsonToMap(jsonStr){
    return new Map(JSON.parse(jsonStr))
}

console.log(jsonToMap('[[true,7],[{"foo":3},["abc"]]]'))
//Map { true => 7, { foo: 3 } => [ 'abc' ] }



/*
[ [ true, 7 ], [ { foo: 3 }, [ 'abc' ] ] ]
Map { true => 7, { foo: 3 } => [ 'abc' ] }
[Object: null prototype] { yes: true, no: false }
Map { 'yes' => true, 'no' => false }
{"yes":true,"no":false}
[[true,7],[{"foo":3},["abc"]]]
Map { 'yes' => true, 'no' => false }
Map { true => 7, { foo: 3 } => [ 'abc' ] }
*/ 