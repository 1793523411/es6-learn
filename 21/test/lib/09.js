'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _desc, _value, _class, _desc2, _value2, _class2, _dec, _dec2, _desc3, _value3, _class3, _desc4, _value4, _class4;

var _coreDecorators = require('core-decorators');

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
        key: 'getPerson',
        value: function getPerson() {
            return this;
        }
    }]);

    return Person;
}(), (_applyDecoratedDescriptor(_class.prototype, 'getPerson', [_coreDecorators.autobind], Object.getOwnPropertyDescriptor(_class.prototype, 'getPerson'), _class.prototype)), _class);


var person = new Person();
var getPerson = person.getPerson;

console.log(getPerson() === person);

// class Meal{
//     @readonly
//     entree = 'steak';
// }
// var dinner = new Meal()
// dinner.entree = 'salmo'


var Parent = function () {
    function Parent() {
        _classCallCheck(this, Parent);
    }

    _createClass(Parent, [{
        key: 'speak',
        value: function speak(first, second) {}
    }]);

    return Parent;
}();

//检查是否正确的覆盖了父类的方法


var Child = (_class2 = function (_Parent) {
    _inherits(Child, _Parent);

    function Child() {
        _classCallCheck(this, Child);

        return _possibleConstructorReturn(this, (Child.__proto__ || Object.getPrototypeOf(Child)).apply(this, arguments));
    }

    _createClass(Child, [{
        key: 'speak',
        value: function speak(first, second) {}
    }]);

    return Child;
}(Parent), (_applyDecoratedDescriptor(_class2.prototype, 'speak', [_coreDecorators.override], Object.getOwnPropertyDescriptor(_class2.prototype, 'speak'), _class2.prototype)), _class2);
var Person2 = (_dec = (0, _coreDecorators.deprecate)('We stopped facepalming'), _dec2 = (0, _coreDecorators.deprecate)('we stopped facepalming', { url: 'http://...' }), (_class3 = function () {
    function Person2() {
        _classCallCheck(this, Person2);
    }

    _createClass(Person2, [{
        key: 'facepalm',
        value: function facepalm() {}
    }, {
        key: 'facepalmHard',
        value: function facepalmHard() {}
    }, {
        key: 'facepalmHarder',
        value: function facepalmHarder() {}
    }]);

    return Person2;
}(), (_applyDecoratedDescriptor(_class3.prototype, 'facepalm', [_coreDecorators.deprecate], Object.getOwnPropertyDescriptor(_class3.prototype, 'facepalm'), _class3.prototype), _applyDecoratedDescriptor(_class3.prototype, 'facepalmHard', [_dec], Object.getOwnPropertyDescriptor(_class3.prototype, 'facepalmHard'), _class3.prototype), _applyDecoratedDescriptor(_class3.prototype, 'facepalmHarder', [_dec2], Object.getOwnPropertyDescriptor(_class3.prototype, 'facepalmHarder'), _class3.prototype)), _class3));


var person2 = new Person2();
person2.facepalm();
person2.facepalmHard();
person2.facepalmHarder();
// DEPRECATION Person2#facepalm: This function will be removed in future versions.
// DEPRECATION Person2#facepalmHard: We stopped facepalming
// DEPRECATION Person2#facepalmHarder: we stopped facepalming

//     See http://... for more details.


var Person3 = (_class4 = function () {
    function Person3() {
        _classCallCheck(this, Person3);
    }

    _createClass(Person3, [{
        key: 'facepalm',
        value: function facepalm() {}
    }, {
        key: 'facepalmWithoutWaring',
        value: function facepalmWithoutWaring() {
            this.facepalm();
        }
    }]);

    return Person3;
}(), (_applyDecoratedDescriptor(_class4.prototype, 'facepalm', [_coreDecorators.deprecate], Object.getOwnPropertyDescriptor(_class4.prototype, 'facepalm'), _class4.prototype), _applyDecoratedDescriptor(_class4.prototype, 'facepalmWithoutWaring', [_coreDecorators.suppressWarnings], Object.getOwnPropertyDescriptor(_class4.prototype, 'facepalmWithoutWaring'), _class4.prototype)), _class4);
//抑制decorated修饰器导致的console.warn()调用,但异步代码发出的调用外

var person3 = new Person3();
person3.facepalmWithoutWaring();
// DEPRECATION Person3#facepalm: This function will be removed in future versions.