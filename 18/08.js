// asyncIterator
// .next()
// .then(
//     ({value,done}) => {/*...*/}
// )

const { write } = require("fs");

const asyncIterable = createAsyncIterable(["a", "b"]);
const asyncIterator = asyncIterable[Symbol.asyncIterator]();

asyncIterator
  .next()
  .then((iteraResult) => {
    console.log(iteraResult);
    return asyncIterator.next();
  })
  .then((iteraResult2) => {
    console.log(iteraResult2);
    return asyncIterator.next();
  })
  .then((iteraResult3) => {
    console.log(iteraResult3);
  });

//上面可以这样写
async function f() {
  const asyncIterable = createAsyncIterable(["a", "b"]);
  const asyncIterator = asyncIterable[Symbol.asyncIterator]();
  console.log(await asyncIterator.next())
  console.log(await asyncIterator.next())
  console.log(await asyncIterator.next())
}


const asyncGenObj = createAsyncIterable(['a','b'])
const [{value:v1},{value: v2}] = await Promise.all([
    asyncGenObj.next(),asyncGenObj.next()
])//next方法会累积起来自动按照每一步的顺序运行下去
console.log(v1,v2)

//另一种方法一次性调用所有next方法，然后await最后一步操作
const writer = openWrite('someFile.txt')
writer.next('hello')
writer.next('hworld')
await writer.return()


//MDn示例
// const myAsyncIterable = new Object();
// myAsyncIterable[Symbol.asyncIterator] = async function*() {
//     yield "hello";
//     yield "async";
//     yield "iteration!";
// };

// (async () => {
//     for await (const x of myAsyncIterable) {
//         console.log(x);
//         // expected output:
//         //    "hello"
//         //    "async"
//         //    "iteration!"
//     }
// })();
// Promise { <pending> }
// > hello
// async
// iteration!
