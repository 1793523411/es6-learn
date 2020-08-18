'use strict';

var es6Code = 'let x =n => n+1';
var es5Code = require('babel-core').transform(es6Code, {
    presets: ['latest']
}).code;

console.log(es5Code);