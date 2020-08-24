var buffer = ArrayBuffer(24)
var idView = new Uint32Array(buffer,0,1)
var usernameView = new Uint8Array(buffer,4,16)
var amountDueView = new Float32Array(buffer, 20,1)



var dv = new DataView(buffer)

//小端字节序
var v1 = dv.getUint8(0,true)
//大端字节序
var v2 = dv.getUint16(1,false)
//大端字节序
var v3 = dv.getUint16(3)

dv.setInt32(0,25,false)
dv.setInt32(4,25)
dv.setFloat32(8,2.5,false)

