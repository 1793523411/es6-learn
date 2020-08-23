"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _desc, _value, _class;

var _ = require("./10");

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

var FooComponent = (_dec = (0, _2.default)("foo.some.message", "component"), _dec2 = (0, _2.default)("foo.some.other"), (_class = function () {
    function FooComponent() {
        _classCallCheck(this, FooComponent);
    }

    _createClass(FooComponent, [{
        key: "someMethod",
        value: function someMethod() {
            return {
                my: "data"
            };
        }
    }, {
        key: "anotherMethod",
        value: function anotherMethod() {}
    }]);

    return FooComponent;
}(), (_applyDecoratedDescriptor(_class.prototype, "someMethod", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "someMethod"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "anotherMethod", [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, "anotherMethod"), _class.prototype)), _class));


var foo = new FooComponent();

console.log(foo.someMethod());