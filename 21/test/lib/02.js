"use strict";

var _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//添加实例属性
function testable(target) {
    target.prototype.isTestable = true;
}

var MyTestableClass = testable(_class = function MyTestableClass() {
    _classCallCheck(this, MyTestableClass);
}) || _class;

var obj = new MyTestableClass();
console.log(obj.isTestable);