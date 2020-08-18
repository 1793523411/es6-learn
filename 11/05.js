const map = new Map([
    ['F','no'],
    ['T','yes']
])

for(let key of map.keys()){
    console.log(key)
}

for(let value of map.values()){
    console.log(value)
}

for(let item of map.entries()){
    console.log(item)
}

for (let [key,value] of map.entries()){
    console.log(key,value);
}
//等同于
for(let [key,value] of map){
    console.log(key,value);
}
//表明Map结构的默认遍历器接口（Symbol.iterator）就是entries方法


const map2 = new Map([
    [1,'one'],
    [2,'two'],
    [3,'three']
]);

console.log([...map2.keys()])
console.log([...map2.values()]);
console.log([...map2.entries()]);
console.log([...map2]);


const map0 = new Map()
.set(1,'a')
.set(2,'b')
.set(3,'c');

const map1 = new Map(
    [...map0].filter(([k,v]) => k<3)
)
console.log(map1)//Map { 1 => 'a', 2 => 'b' }

map0.forEach(function(value,key,map){
    console.log(("key: %s, Value: %s",key,value));
})

const reporter = {
    report: function(value,key,map){
        console.log(("key: %s, Value: %s",key,value));
    }
}

map0.forEach(function(value, key, map){
    this.report(key,value)
},reporter)
//forEach绑定回调函数的this指向reporter