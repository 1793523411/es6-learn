"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _desc, _value, _class, _desc2, _value2, _class2;

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

var Person = (_class = function () {
    function Person() {
        _classCallCheck(this, Person);
    }

    _createClass(Person, [{
        key: "kidCount",
        get: function get() {
            return this.children.length;
        }
    }]);

    return Person;
}(), (_applyDecoratedDescriptor(_class.prototype, "kidCount", [nonenumberable], Object.getOwnPropertyDescriptor(_class.prototype, "kidCount"), _class.prototype)), _class);

//修改对象的可遍历属性

function nonenumberable(target, name, descriptor) {
    descriptor.enumber = false;
    return descriptor;
}

//log修饰器起到输出日志的作用
var Math2 = (_class2 = function () {
    function Math2() {
        _classCallCheck(this, Math2);
    }

    _createClass(Math2, [{
        key: "add",
        value: function add(a, b) {
            return a + b;
        }
    }]);

    return Math2;
}(), (_applyDecoratedDescriptor(_class2.prototype, "add", [log], Object.getOwnPropertyDescriptor(_class2.prototype, "add"), _class2.prototype)), _class2);


function log(target, name, descriptor) {
    var oldValue = descriptor.value;
    descriptor.value = function () {
        console.log("Call \"" + name + " with", arguments);
        return oldValue.apply(null, arguments);
    };
    return descriptor;
}

var math = new Math2();
math.add(2, 4);
//Call "add with [Arguments] { '0': 2, '1': 4 }