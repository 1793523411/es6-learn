const p = Promise.race([
    fetch('/resource-that-may-take-a-while'),
    new Promise(function(reslove, reject){
        setTimeout(() => reject(new Error('request timeout')),5000)
    })
])

//上面如果5秒之后无法返回结果，p的状态就会变为Reject从而触发catch方法指定的回调函数

p.then(response => console.log(response))
p.catch(error => console.log(error))