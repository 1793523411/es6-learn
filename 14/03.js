//reslove的参数可以是另一个promise

// var p1 = new Promise(function(reslove, reject){

// })

// var p2 = new Promise(function(reslove,reject){
//     reslove(p1)
// })
//p2的状态由p1决定

var p1 = new Promise(function (reslove, reject) {
  setTimeout(() => reject(new Error("fail")),3000);
});

var p2 = new Promise(function (reslove, reject) {
  setTimeout(() => reslove(p1), 3000);
});

p2.then((result) => console.log(result)).catch((r) => {
  console.log(r);
});

//调用reslove或reject并不会终结Promise的参数函数的执行
new Promise((reslove,reject) => {
    return reslove(1)//在本轮事件循环的末尾执行，总是晚于本轮循环的同步任务，一般来说reslove或reject执行后Promise的使命就完成了，最好加上return 语句，这样后面的不会执行
    console.log(2)//还是会执行，本轮事件循环执行
}).then(r => {
    console.log(r)
})
//2
//1
