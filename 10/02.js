function getArea(shape, options){
    var area = 0
    switch(shape) {
        case 'Triangle':
            area = .5*options.width * options.height
            break
    }
    return area
}

getArea('Triangle',{width:100,height:200})



// var sharpType = {
//     triangle:'Triangle'
// }
var sharpType = {
    triangle:Symbol()
}
function getArea(shape, options){
    var area = 0
    switch(shape) {
        case 'Triangle':
            area = .5*options.width * options.height
            break
    }
    return area
}

getArea(sharpType.triangle,{width:100,height:200})