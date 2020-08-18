let obj = {
    [Symbol.toPrimitive](hint){
        switch(hint){
            case 'number':
                return 123
            case 'string':
                return 'str'
            case 'default':
                return 'default'
            default:
                throw new Error()
        }
    }
}

console.log(2*obj)
console.log(3+obj)
console.log(obj === 'default')
console.log(String(obj))