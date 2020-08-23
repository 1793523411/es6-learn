"use strict";

var _class, _class2;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MyTesttableClass = testable(_class = function MyTesttableClass() {
    _classCallCheck(this, MyTesttableClass);
}) || _class;

function testable(target) {
    target.isTestable = true;
}

console.log(MyTesttableClass.isTestable);

var A = decorator(_class2 = function A() {
    _classCallCheck(this, A);
}) || _class2;

//等同于
// class A{}
// A = decorator(A)