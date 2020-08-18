const wm1 = new WeakMap()
const key = {foo:1}
wm1.set(key, 2)
wm1.get(key)//2

const k1 = [1,2,3]
const k2 = [4,5,6]
const wm2 = new WeakMap([[k1,'foo'],[k2,'bar']])
wm2.get(k2)//'bar'

const map = new WeakMap()
map.set(1,2)//X
map.set(Symbol(),2)//X
map.set(null,2)//X


const e1 = document.getElementById('foo')
const e2 = document.getElementById('bar')
const arr = [
    [e1,'foo'],
    [e2,'bar']
]
//手动删除引用
arr[0] = null
arr[1] = null



const wm = new WeakMap()
const element = document.getElementById('example')
wm.set(element, ' some infomation')
wm.get(element)


const vm = new WeakMap()
let key = {}
let obj = {foo: 1}

//健值正常引用
wm.set(key, obj)
obj = null
wm.get(key)//）Object {foo: 1}




// E:\desktop\start\node\es6>node --expose-gc
// Welcome to Node.js v12.10.0.      
// Type ".help" for more information.
// > global.gc()
// undefined
// > process.memoryUsage()
// {
//   rss: 20860928,
//   heapTotal: 4870144,
//   heapUsed: 2618048,
//   external: 1374591
// }
// > let wm = new WeakMap()
// undefined
// > let key = new Array(5*1024*1024)
// undefined
// > wm.set(key,1)
// WeakMap { <items unknown> }
// > global.gc()
// undefined
// > process.memoryUsage()
// {
//   rss: 65433600,
//   heapTotal: 47132672,
//   heapUsed: 44717424,
//   external: 1374614
// }
// > key = null
// null
// > global.gc()
// undefined
// > process.memoryUsage()
// {
//   rss: 23089152,
//   heapTotal: 5185536,
//   heapUsed: 2710224,
//   external: 1374615
// }

// 可见WeakMap的引用没有阻止gc对内存的回收