import {mixins} from './03'

const Foo = {
    foo(){console.log('foo')}
}
const Bar = {
    bar(){console.log('bar')}
}

@mixins(Foo,Bar)
class MyClass{}

let obj = new MyClass()
console.log(obj.foo())
console.log(obj.bar())
// foo
// undefined
// bar
// undefined


// // 在React和Redux库结合使用时常需要写成如下形式
// class MyReactComponent extends React.Component{}

// export default connect(mapStateToProps,mapDispatchToProps)(MyReactComponent)

// //有了装饰器，我们可以写成
// @connect(mapStateToProps,mapDispatchToProps)
// export default class MyReactComponent extends React.Component{}