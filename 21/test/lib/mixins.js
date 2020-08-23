"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.mixins = mixins;
function mixins() {
    for (var _len = arguments.length, list = Array(_len), _key = 0; _key < _len; _key++) {
        list[_key] = arguments[_key];
    }

    return function (target) {
        Object.assign.apply(Object, [target.prototype].concat(list));
    };
}