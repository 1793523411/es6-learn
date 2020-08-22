function Point(x,y){
    this.x = x;
    this.y = y
}

Point.prototype.toString = function(){
    return '(' + this.x +',' + this.y + ')'
}

var p = new Point(1,2)

console.log(p)


class Point2 {
    constructor(x,y){
        this.x = x;
        this.y = y
    }
    toString(){
        return '(' + this.x +',' + this.y + ')'
    }
}
var p2 = new Point2(2,3)

console.log(p2)

console.log(typeof Point2)
console.log(Point2 === Point2.prototype.constructor)
console.log(p2.constructor === Point2.prototype.constructor)

// Point { x: 1, y: 2 }
// Point2 { x: 2, y: 3 }
// function
// true

let methodNAme = 'getArea'

class Square {
    constructor(length){}
    [methodNAme](){}
}
