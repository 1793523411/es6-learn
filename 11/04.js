// const data = {}
// const element = document.getElementById('myDiv')

// data[element] = 'metadata'
// data['[object HTMLDivElement']

const m = new Map()
const o = {
    p:'Hello World'
}

m.set(o,'content')
m.get(o)
m.has(o)
m.delete(o)
m.has(o)

const m = new Map([
    ['name','张三'],
    ['title','Author']
])

m.size
m.has('name')
m.get('name')
m.has('title')
m.get('title')

// > m.size
// 2
// > m.has('name')
// true
// > m.get('name')
// '张三'
// > m.has('title')
// true
// > m.get('title')
// 'Author'

//上面操作其实是下面这样的

const items = [
    ['name','张三'],
    ['title','Author']
]

const map = new Map()
items.forEach(
    ([key,value]) => {
        map.set(key,value)
    }
)

const set = new Set([
    ['foo',1],
    ['bar',2]
])
const m1 = new Map(set)
m1.get('foo')

const m2 = new Map([['baz',3]])
const m3 = new Map(m2)
m3.get('baz')

const map = new Map()
map.set(1,'aaa').set(1,'bbb')//bbb

new Map().get('aasff')//undefined


const map = new Map()
map.set(['a'],555)
map.get(['a'])//undefined
//内存地址不一样

const map = new Map()

const k1 = ['a']
const k2 = ['a']

map.set(k1,111).set(k2,222)

map.get(k1)
map.get(k2)


let map = new Map()

map.set(-0,123)
map.get(+0)//123

map.set(true,1)
map.set('true',2)
map.get(true)//1

map.set(undefined,3)
map.set(null,4)
map.get(undefined)//3

map.set(NaN,123)
map.get(NaN)//123