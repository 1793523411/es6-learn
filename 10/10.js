// String.prototype.search(regExp)
// regExp[Symbol.search](this)

class MySearch {
    constructor(value){
        this.value = value
    }
    [Symbol.search](string){
        return string.indexOf(this.value)
    }
}
console.log('foobar'.search(new MySearch('foo')))


// String.prototype.split(separator,limit)
// separator[Symbol.split](this.limit)

class MySplitter {
    constructor(value){
        this.value = value
    }
    [Symbol.split](string){
        var index = string.indexOf(this.value)
        if(index===-1){
            return string
        }
        return [
            string.substr(0,index),
            string.substr(index+this.value.length)
        ]
    }
}

console.log('foobar'.split(new MySplitter('foo')))
console.log('foobar'.split(new MySplitter('bar')))
console.log('foobar'.split(new MySplitter('baz')))