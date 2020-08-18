let obj = { foo: 123 };
console.log(Object.getOwnPropertyDescriptor(obj, "foo"));

console.log(
  Object.getOwnPropertyDescriptor(Object.prototype, "toString").enumerable
);

console.log(Object.getOwnPropertyDescriptor([], "length").enumerable);

console.log(
  Object.getOwnPropertyDescriptor(
    class {
      foo() {}
    }.prototype,
    "foo"
  ).enumerable
);


let obj2 = {
    a:'1',
    b:'2',
    c:{
        x:1,
        y:99
    },
    length:3
}

for(i in obj2){
    console.log(i)
    // console.log(j)
}