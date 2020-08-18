let arrayLike = {
  "0": "a",
  "1": "b",
  "2": "c",
  length: 4,
};

var arr1 = [].slice.call(arrayLike);

var arr2 = Array.from(arrayLike);

console.log(arr1);
console.log(arr2);

const toArray = () => (Array.from ? Array.from : (obj) => [].slice.call(obj));

Array.from(arrayLike,x => x*x)
//=
Array.from(arrayLike).map(x => x*x)


let spans = document.querySelector('span.name')

let names1 = Array.prototype.map.call(spans,s=>s.textContent)
let names2 = Array.from(spans,s => s.textContent)

Array.from({length:2},() => 'Jack')

function countSynbols(string) {
    return Array.from(string).length
}

Array.of()
function Array(){
    return [].slice.call(arguments)
}