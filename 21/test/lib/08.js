'use strict';

function doSomething(name) {
    console.log('Hello,' + name);
}

function loggingDecoratoir(wrapped) {
    return function () {
        console.log('Starting');
        var result = wrapped.apply(this, arguments);
        console.log('Finashed');
        return result;
    };
}

var warpped = loggingDecoratoir(doSomething);
console.log(warpped);