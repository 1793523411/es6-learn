//如果一个多部操作非常耗时，就成了下面这样，回调地狱


step1(function(value1){
    step2(value1,function(value2){
        step3(value2,function(value3){
            step4(value3,function(value4){
                //.....
            })
        })
    })
})

//采用Paomise
Promise.resolve(step1)
.then(step2)
.then(step3)
.then(step4)
.then(function(value4){
    //...   
},function(error){
    //....
})
.done()

//Generator进一步改善
function* longRunningTask(value1){
    try {
        var value2 = yield step1(value1)
        var value3 = yield step1(value2)
        var value4 = yield step1(value3)
        var value5 = yield step1(value4)
    } catch (e) {
        //...
    }
}

//以下所有都针对同步操作
//task必须是同步
scheduler(longRunningTask(initialValue))
function scheduler(task){
    var taskObj = task.next(task.value)
    if(!taskObj.done){
        task.value = taskObj.value
        scheduler(task)
    }
}



let step = [step1Func,step2Func,step3Func]

function* iterateSteps(steps){
    for(var i=0; i<steps.length; i++){
        var step = steps[i]
        yield step()
    }
}

let jobs = [job1,job2,job3]
function *itearteJobs(jobs){
    for( i= 0; j<jobs.length; i++){
        var job = jobs[i]
        yield *iterateSteps(job.steps)
    }
}

for(let step of itearteJobs(jobs)){
    console.log(step.id)
}

//for...of本质是一个while

var it = iterateJobs(jobs)
var res = it.next()

while(!res.done){
    var result = res.value
    res = it.next()
}

