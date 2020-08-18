const foo = Object.freeze({});
("use strict");
foo.prop = 123;
console.log(foo.rop);

//彻底冻结
var constantize = (obj) => {
  Object.freeze(obj);
  Object.keys(obj).forEach((key, i) => {
    if (typeof obj[key] === "object") {
      constantize(boj[key]);
    }
  });
};
