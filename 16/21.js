//Generator可以看做数据结构，更确切是数组结构，因为它返回一系列值，这意味着它可以对任意表达式提供类似数组的接口

function* doStuff(){
    yield fs.readFile.bind(null,'hello.txt')
    yield fs.readFile.bind(null,'world.txt')
    yield fs.readFile.bind(null,'and-such.txt')
}

for(let task of doStuff()){}

//es5模拟es6的Generator

function doStuff(){
    return [
        fs.readFile.bind(null,'hello.txt'),
        fs.readFile.bind(null,'world.txt'),
        fs.readFile.bind(null,'and-such.txt')
    ]
}

