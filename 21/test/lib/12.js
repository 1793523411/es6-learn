'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _dec, _class; // const Foo = {
//     foo(){console.log(foo)}
// }

// class MyClass{}

// Object.assign(MyClass.prototype,Foo)

// let obj = new MyClass()

// obj.foo()


var _mixins = require('./mixins');

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Foo = {
    foo: function foo() {
        console.log('foo');
    }
};

var MyClass = (_dec = (0, _mixins.mixins)(Foo), _dec(_class = function MyClass() {
    _classCallCheck(this, MyClass);
}) || _class);


var obj = new MyClass();

obj.foo();

// //上面的会改写MyClass类的prototype对象，如果不喜欢这一点，可以通过继承实现
// class MyBaseClass{}

// class MyClass extends MyBaseClass{}

// let MyMixin = (superclass) => class  extends superclass{
//     foo(){
//         console.log('foo from MyMixin')
//     }
// }

// class MyClass extends MyMixin(MyBaseClass){

// }

// //混入多个方法，就生成多个混入类
// class MyClass extends MyMixin1(MyMixin2(MyBaseClass)){

// }
// //这种写法好处是可以调用super，避免在混入过程中覆盖父类同名方法

var Mixin = function Mixin(superclass) {
    return function (_superclass) {
        _inherits(_class2, _superclass);

        function _class2() {
            _classCallCheck(this, _class2);

            return _possibleConstructorReturn(this, (_class2.__proto__ || Object.getPrototypeOf(_class2)).apply(this, arguments));
        }

        _createClass(_class2, [{
            key: 'foo',
            value: function foo() {
                console.log('foo from Mixin');
                if (_get(_class2.prototype.__proto__ || Object.getPrototypeOf(_class2.prototype), 'foo', this)) _get(_class2.prototype.__proto__ || Object.getPrototypeOf(_class2.prototype), 'foo', this).call(this);
            }
        }]);

        return _class2;
    }(superclass);
};

var Mixin2 = function Mixin2(superclass) {
    return function (_superclass2) {
        _inherits(_class3, _superclass2);

        function _class3() {
            _classCallCheck(this, _class3);

            return _possibleConstructorReturn(this, (_class3.__proto__ || Object.getPrototypeOf(_class3)).apply(this, arguments));
        }

        _createClass(_class3, [{
            key: 'foo',
            value: function foo() {
                console.log('foo from Mixin2');
                if (_get(_class3.prototype.__proto__ || Object.getPrototypeOf(_class3.prototype), 'foo', this)) _get(_class3.prototype.__proto__ || Object.getPrototypeOf(_class3.prototype), 'foo', this).call(this);
            }
        }]);

        return _class3;
    }(superclass);
};

var S = function () {
    function S() {
        _classCallCheck(this, S);
    }

    _createClass(S, [{
        key: 'foo',
        value: function foo() {
            console.log('foo from S');
        }
    }]);

    return S;
}();

var C = function (_Mixin) {
    _inherits(C, _Mixin);

    function C() {
        _classCallCheck(this, C);

        return _possibleConstructorReturn(this, (C.__proto__ || Object.getPrototypeOf(C)).apply(this, arguments));
    }

    _createClass(C, [{
        key: 'foo',
        value: function foo() {
            console.log('foo from C');
            _get(C.prototype.__proto__ || Object.getPrototypeOf(C.prototype), 'foo', this).call(this);
        }
    }]);

    return C;
}(Mixin(Mixin2(S)));

new C().foo();
// foo from C
// foo from Mixin
// foo from Mixin2
// foo from S