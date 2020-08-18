var total = 30
var msg = passthru`The total is ${total} (${total*1.05} with tax)`

//讲各个参数按照原来的位置拼接回去
function passthru(literals) {
    console.log(literals)
    console.log(arguments)
    var result = ''
    var i = 0
    while(i<literals.length){
        result += literals[i++]
        if(i<arguments.length){
            result += arguments[i]
        }
    }
    return result
}

//采用rest参数写法
function passthru2(literals, ...values){
    var output = ''
    for(var index = 0;index < values.length; index++){
        output += literals[index] + values[index]
    }
    output += literals[index]
    return output
}
console.log(msg)