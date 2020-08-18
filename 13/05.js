const myObject = { foo: "bar" };

delete myObject.foo;

Reflect.deleteProperty(myObject, "foo");

function Greeting(name) {
  this.name = name;
}
const instance = new Greeting("张三");
const instance = Reflect.construct(Greeting, ["张三"]);



const myObj = new FancyThing()

Object.getPrototypeOf(myObj) === FancyThing.prototype;

Reflect.getPrototypeOf(myObj) === FancyThing.prototype

//如果参数不是对象，Object的会先将参数转为对象，而Reflect的不会