let foo = {};

let bar = function () {};

foo::bar;
//等同于
bar.bind(foo);

foo::bar(...arguments);
//等同于
bar.apply(foo, arguments);

const hasOwnProperty = Object.prototype.hasOwnProperty;

function hasOwn(obj, key) {
  return obj::hasOwnProperty(key);
}
