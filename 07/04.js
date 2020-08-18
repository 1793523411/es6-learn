function sortNumbers(){
    return Array.prototype.slice.call(arguments).sort()
}
//等价于
const sortNumber = (...numbers) => numbers.sort()


function push(array, ...items){
    items.forEach(function(item){
        array.push(item)
        console.log(item)
    })
}

var a = []

push(a,1,2,3)