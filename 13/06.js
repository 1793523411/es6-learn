const myObj = new FancyThing()

Object.setPrototypeOf(myObj,OtherThing.prototype)

Reflect.setPrototypeOf(myObj,OtherThing.prototype)

//如果参数不是对象，前者会返回本身，后者会报错，如果是undefined或null都会报错

