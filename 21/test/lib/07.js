'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _desc, _value, _class;

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

// //修饰器有注释的作用
// @testable
// class Person{
//     @readonly
//     @nonenumberable
//     name(){
//         return `${this.first} ${this.last}`
//     }
// }

// //person是一个可测试类，而name方法是只读且不可枚举

function dec(id) {
    console.log('evaluated', id);
    return function (target, property, descriptor) {
        return console.log('exectued', id);
    };
}

var Example = (_dec = dec(1), _dec2 = dec(2), (_class = function () {
    function Example() {
        _classCallCheck(this, Example);
    }

    _createClass(Example, [{
        key: 'methods',
        value: function methods() {}
    }]);

    return Example;
}(), (_applyDecoratedDescriptor(_class.prototype, 'methods', [_dec, _dec2], Object.getOwnPropertyDescriptor(_class.prototype, 'methods'), _class.prototype)), _class));
// evaluated 1
// evaluated 2
// exectued 2
// exectued 1