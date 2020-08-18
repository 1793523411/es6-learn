var target = { a: 1 };
var source1 = { b: 2 };
var source2 = { c: 3 };

Object.assign(target, source1, source2);

console.log(target);

console.log(Object(true));
console.log(Object(10));
console.log(Object("abc"));

console.log(
  Object.assign(
    { b: "c" },
    Object.defineProperty({}, "invisible", {
      enumerable: false,
      value: "Hello",
    })
  )
);
//{ b: 'c' }

//{ a: 'b', [Symbol(c)]: 'd' }
console.log(Object.assign({ a: "b" }, { [Symbol("c")]: "d" }));

//是替换而不是添加
var target = { a: { b: "c", d: "e" } };
var source = { a: { b: "hello" } };

console.log(Object.assign(target, source));

//处理数组
console.log(Object.assign([1, 2, 3], [4, 5]));
