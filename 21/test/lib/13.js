'use strict';

var _dec, _class;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

var Tbar = {
    bar: function bar() {
        console.log('bar');
    }
};

var MyClass = (_dec = (0, _traitsDecorator.traits)(TFoo, Tbar), _dec(_class = function MyClass() {
    _classCallCheck(this, MyClass);
}) || _class);


var obj = new MyClass();
obj.foo();
obj.bar();
// foo
// bar