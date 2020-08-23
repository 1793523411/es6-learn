"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = publish;

var _postal = require("postal/lib/postal.lodash");

var _postal2 = _interopRequireDefault(_postal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function publish(topic, channel) {
    return function (target, name, descriptor) {
        var fn = descriptor.value;

        descriptor.value = function () {
            var value = fn.apply(this, arguments);
            _postal2.default.channel(channel || target.channel || "/").publish(topic, value);
        };
    };
}