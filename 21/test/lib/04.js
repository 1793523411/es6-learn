'use strict';

var _dec, _class;

var _ = require('./03');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Foo = {
    foo: function foo() {
        console.log('foo');
    }
};
var Bar = {
    bar: function bar() {
        console.log('bar');
    }
};

var MyClass = (_dec = (0, _.mixins)(Foo, Bar), _dec(_class = function MyClass() {
    _classCallCheck(this, MyClass);
}) || _class);


var obj = new MyClass();
console.log(obj.foo());
console.log(obj.bar());
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