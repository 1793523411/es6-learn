// // var p = Promise.all([p1,p2,p3])

// var promise = [2,3,5,7,11,13].map(function(id){
//     return getJSON('/post'+id+'.json')
// })

// Promise.all(promise).then(function(posts){
//     //...
// }).catch(function(reason){
//     //...
// })


// const databasePromise = connectDaatabase()

// const bookPromise = databasePromise
// .then(findAllBooks)

// const userPromise = databasePromise
// .then(getCurrentUser)

// Promise.all([
//     bookPromise,
//     userPromise
// ])
// .then(([books,user]) => pickTopRecommentations(books, user))

//如果作为参数的Promise实例自身定义了catch，那么他被rejected时并不会触发Promise.all()的catch方法

const p1 = new Promise((reslove,reject) => {
    reslove('hello')
})
.then(result => result)
.catch(e =>e)

const p2 = new Promise((reslove,reject) => {
    throw new Error('报错了')//这里的catch会被执行
})
.then(result =>result)
.catch(e => e)
// .catch(e => console.log("++++++++++"+e))

//调用p2的catchp2的状态就变为了resloved，所以下面的catch不会触发
//但若p2没有catch就会触发下面的catch
Promise.all([p1,p2])
.then(result => console.log(result))
.catch(e => console.log(e))