import publish from './10'

class FooComponent {
    @publish("foo.some.message","component")
    someMethod(){
        return {
            my:"data"
        }
    }
    @publish("foo.some.other")
    anotherMethod(){}
}

let foo = new FooComponent()

console.log(foo.someMethod())
