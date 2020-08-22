async function* gen(){
    yield 'hello'
}
const genObj = gen()
genObj.next().then(x => console.log(x))
// { value: 'hello', done: false }

//同步
function* map(iterable,func){
    const iter = iterable[Symbol.iterator]()
    while(true){
        const {value, done} = iter.next()
        if(done) break;
        yield func(value)
    }
}

//异步
async function* map(iterable, func){
    const iter = iterable[Symbol.asyncIterator]()
    while(true){
        const {value, done} = await iter.next()
        if(done) break;
        yield func(value)
    }
}

async function* readLines(path){
    let file = await fileOpen(path)
    try {
        while(!file.EOF){
            yield await file.readLines()
        }
    } catch (e) {
        await file.close()
    }
}

(async function(){
    for await( const line of readLines(filePath)){
        console.log(line)
    }
})

async function* prefixLines(asyncIteravle){
    for await (const line of asyncIteravle){
        yield '>'+line
    }
}

//同步数据结构也可以使用异步Generator函数
async function * createAsyncIterable(asyncIterable){
    for(const element of asyncIterable){
        yield element
    }
}