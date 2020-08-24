var buf = new ArrayBuffer(32);
var dataView = new DataView(buf);
dataView.getUint8(0); //0

var buffer = new ArrayBuffer(12);

var x1 = new Int32Array(buffer);
x1[0] = 1
console.log(x1[0]);
var x2 = new Uint8Array(buffer);
x2[0] = 2
console.log(x2[0]);
console.log(x1[0])

// 1
// 2
// 2

console.log(x1.length)
console.log(x2.length)
// 12
// 12

var typedArray = new Uint8Array([0,1,2])
typedArray[0] = 5
console.log(typedArray)//Uint8Array [ 5, 1, 2 ]


var buffer = new ArrayBuffer(32)
console.log(buffer.byteLength)//32

var buffer = new ArrayBuffer(8)
var newBuffer = new buffer.slice(0,3)

var buffer = new ArrayBuffer(8)
ArrayBuffer.isView(buffer)//false

var v = new Int32Array(buffer)
ArrayBuffer.isView(v)//true