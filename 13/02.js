var myObject ={
    foo:1,
    bar:2,
    get baz(){
        return this.foo + this.bar
    }
}

// > Reflect.get(myObject,'foo')
// 1
// > Reflect.get(myObject,'bar')
// 2
// > Reflect.get(myObject,'baz')
// 3

var myREceiverObject = {
    foo:4,
    bar:4
}

Reflect.get(myObject,'baz',myREceiverObject)//8

//如果第一个参数不是对象，Reflect.get报错