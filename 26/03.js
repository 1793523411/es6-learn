var buffer = new ArrayBuffer(16)
var int32View = new Int32Array(buffer)

for (var i = 0;i<int32View.length; i++) {
    int32View[i] = i*2+1
}
console.log(int32View)
var int16View = new Int16Array(buffer)
for(var i = 0;i<int16View.length; i++){
    console.log('Entry '+i +":" +int16View[i])
}

// Int32Array [ 1, 3, 5, 7 ]
// Entry 0:1
// Entry 1:0
// Entry 2:3
// Entry 3:0
// Entry 4:5
// Entry 5:0
// Entry 6:7
// Entry 7:0

var buffer = new ArrayBuffer(4)
var v1 = new Uint8Array(buffer)
v1[0] = 2
v1[1] = 1
v1[2] = 3
v1[3] = 7

var uInt16View = new Uint16Array(buffer)

console.log(uInt16View[0])
console.log(uInt16View[1])
// 258
// 1795

//判断是否为小端字节还是大端字节
const BIG_ENDIAN = Symbol('BIG_ENDIAN')
const LITTLE_ENDIAN = Symbol('LITTLE_ENDIAN')

function getPlatfromEndianness() {
    let arr32 = Uint32Array.of(0x123456789)
    let arr8 = new Uint8Array(arr32.buffer)
    switch ((arr8[0]*0x100000)+(arr8[1]*0x10000)+(arr8[2]*0x100)+(arr8[3])){
        case 0x12345678:
            return BIG_ENDIAN;
        case 0x78563412:
            return LITTLE_ENDIAN
        default:
            throw new Error('Unknown endianness')
    }
}