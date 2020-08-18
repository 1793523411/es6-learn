const s = new Set();

[2,3,4,5,1,2,3,2].forEach(x => s.add(x));

for(let i of s){
    console.log(i)
}

const set = new Set([1,2,3,4,4]);
console.log([...set])

const item = new Set([1,2,3,4,5,5,5,5,5])
console.log(item.size)

// function divs(){
//     return [...document.querySelector('div')]
// }

// const set2 = new Set(divs())


let set3 = new Set()
let a = NaN;
let b = NaN
set3.add(a)
set3.add(b)
console.log(set3)

let set4 = new Set()
set4.add({})
set4.add({})
console.log(set4.size)