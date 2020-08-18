"use strict";

var a = 1;
var b = 2;

var c = function c(a, b) {
    return a + b;
};

console.log(c(a, b));

var text = String.fromCharCode(0x20BB7);

for (var i = 0; i < text.length; i++) {
    console.log(text[i]);
}

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = text[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var _i = _step.value;

        console.log(_i);
    }
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}

console.log(text);