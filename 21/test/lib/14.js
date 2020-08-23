'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); //不允许混入同名方法

var _traitsDecorator = require('traits-decorator');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TFoo = function () {
    function TFoo() {
        _classCallCheck(this, TFoo);
    }

    _createClass(TFoo, [{
        key: 'foo',
        value: function foo() {
            console.log('foo');
        }
    }]);

    return TFoo;
}();

var TBar = {
    bar: function bar() {
        console.log('bar');
    },
    foo: function foo() {
        console.log('foo');
    }
};

// @traits(TFoo,TBar)
// class MyClass{ }
// // Error: Method named: foo is defined twice.


// @traits(TFoo,TBar::excludes('foo'))
// class MyClass{ }


// @traits(TFoo,TBar::alias({foo:'aliasFoo'}))
// class MyClass{ }

// @traits(TExample::excludes('foo','bar')::alias({baz:'exampleBaz'}))
// class MyClass{}

// @traits(TExample::as({excludes:['foo','bar'],alias:{baz:'exampleBaz'}}))
// class MyClass{ }