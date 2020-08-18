//对象继承
const obj = {
    __proto__:prot,
    foo:123
}

const obj = Object.create(prot)
obj.foo = 123

const obj = Object.assign(
    Object.create(prot),
    {
        foo:123,
    }
)

const obj = Object.create(
    prot,
    Object.getOwnPropertyDescriptors({
        foo:123,
    })
)