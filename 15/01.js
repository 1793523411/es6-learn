var it = makeIterator(['a','b'])

console.log(it.next())
console.log(it.next())
console.log(it.next())

// { value: 'a', done: false }
// { value: 'b', done: false }
// { value: undefined, done: true }


function makeIterator(array){
    var nextIndex = 0;
    return {
        next:function(){
            return nextIndex < array.length?{value:array[nextIndex++],done:false}:{value:undefined,done:true}
        }
    }
}

function makeIterator(array){
    var nextIndex = 0;
    return {
        next:function(){
            return nextIndex < array.length?{value:array[nextIndex++]}:{done:true}
        }
    }
}