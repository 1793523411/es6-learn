//await后面是一个Promise对象，如果不是，会被转为一个立即resolve的Promise对象

async function f(){
    return await 123;
}

f().then(v => console.log(v))

async function f2(){
    await Promise.reject('出错了')
}
f2()
.then(console.log)
.catch(console.log)

async function f3(){
    await Promise.reject('error')
    await Promise.resolve('这里不会执行')
}
f3().then(console.log).catch(console.log)


async function f4(){
    try {
        await Promise.reject('出错了')
    } catch (e) {
        return await Promise.resolve('hello')
    }
}
f4().then(console.log)

async function f5(){
    await Promise.reject('出错了~~')
    .catch(console.log);
    return await Promise.resolve('helloworld')
}
f5().then(console.log)