let proto = {}
let obj = {x:10}

Object.setPrototypeOf(obj, proto)

proto.y = 20;
proto.z = 40

console.log(obj.z)

function REctangle(){

}

var rec = new REctangle()

console.log(Object.getPrototypeOf(rec) === REctangle.prototype)
console.log(Object.getPrototypeOf(rec))
