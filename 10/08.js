// String.prototype.match(regExp) 
// // ==
// regExp[Symbol.match](this)

class MyMatcher {
    [Symbol.match](string){
        return 'hello world'.indexOf(string)
    }
}

console.log('e'.match(new MyMatcher()))//1
