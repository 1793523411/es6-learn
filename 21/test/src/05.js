class Person {
    @readonly
    name(){return `${this.first}${this.last}`}
}

function readonly(target,name,descriptor){
    descriptor.writable = false
    return descriptor
}

readonly(Person.prototype,'name',descriptor)
//类似于
Object.defineProperty(Person.prototype,'name',descriptor)