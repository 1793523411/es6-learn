tag`First line\nSecond line`

function tag(strings){
    //只是参数
    console.log(strings)
    console.log(strings.raw[0])
}

// String.raw的代码基本如下
String.raw = function(strings,...values){
    var output = ""
    for(var index = 0;index < values.length; index++){
        output += strings.raw[index] + values[index]
    }
    output += strings.raw[index]
    return output
}

console.log(String.raw({raw:'test'},0,1,2))

console.log(String.raw({raw:['t','e','s','t']},0,1,2))

// let bad = `bad escape sequence : \unicode`//报错，，因为对/u转义了，所以后面跟Unicode就不对
let bad = `bad escape sequence : \uFFFa`//不报错
console.log(bad)