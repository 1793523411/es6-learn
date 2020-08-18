console.log`123`//[ '123' ]

var a= 5
var b= 10
function tag(s,v1,v2){
    console.log(s[0])
    console.log(s[1])
    console.log(s[2])
    console.log(v1)
    console.log(v2)

    return 'ok'
}

tag`Hello${a+b} World${a*b}`