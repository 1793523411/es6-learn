const obj = {
    [Symbol.iterator] : function(){
        return {
            next:function(){
                return {
                    value:1,
                    done:true
                }
            }
        }
    }
}

console.log(obj[Symbol.iterator]().next())
console.log(obj[Symbol.iterator]().next())
console.log(obj[Symbol.iterator]().next())

let arr = ['a','b','c']
let iter = arr[Symbol.iterator]()

console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())


