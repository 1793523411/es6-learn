var b = new ArrayBuffer(8)
var v1 = new Int32Array(b)
var v2 = new Uint8Array(b,2)
var v3 = new Int16Array(b,2,2)

var v4 = new Int16Array(b,1)//报错


//基于一段内存构造视图
var x = new Int8Array([1,11])
var y = new Int8Array(x.buffer)

//合并数组
function concatenate(resultConstructor, ...arrays){
    let totalLength = 0;
    for(let arr of arrays){
        totalLength += arr.length
    }
    let result = new resultConstructor(totalLength)
    let offset = 0
    for(let arr of arrays){
        result.set(arr, offset)
        offset += arr.length
    }
    return result
}

concatenate(Uint8Array,Uint8Array.of(1,2),Uint8Array.of(3,4))