// class Point{}

// class ColorPoint extends Point{
//     constructor(){

//     }
// }

// let cp = new ColorPoint()
class Point{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
}

class ColorPoint extends Point{
    constructor(x,y,color){
        super(x,y)
        this.color = color
        this.color = color
    }
}

//这与es5行为完全一致
let cp = new ColorPoint(25,8,'green')
console.log(cp instanceof Point)
console.log(cp instanceof ColorPoint)
// true
// true
