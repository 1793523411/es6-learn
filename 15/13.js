let es6 = {
    editor:6,
    commitee:"TC39",
    standard:"EcMA-262"
}

for(let e in es6){
    console.log(e)
}
//报错
// for(let e of es6){
//     console.log(e)
// }

for(var key of Object.keys(es6)){
    console.log(key+":"+es6[key])
}

function* entries(obj){
    for(let key of Object.keys(obj)){
        yield [key,obj[key]]
    }
}

for(let [key,value] of entries(es6)){
    console.log(key,'->',value)
}

// editor
// commitee
// standard
// editor:6
// commitee:TC39
// standard:EcMA-262
// editor -> 6
// commitee -> TC39
// standard -> EcMA-262