import {traits} from 'traits-decorator'

class TFoo {
    foo(){
        console.log('foo')
    }
}
const Tbar = {
    bar(){
        console.log('bar')
    }
}

@traits(TFoo,Tbar)
class MyClass {}

let obj = new MyClass()
obj.foo()
obj.bar()
// foo
// bar
