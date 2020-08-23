function doSomething(name){
    console.log('Hello,' +name)
}

function loggingDecoratoir(wrapped){
    return function(){
        console.log('Starting')
        const result = wrapped.apply(this,arguments)
        console.log('Finashed')
        return result
    }
}

const warpped = loggingDecoratoir(doSomething)
console.log(warpped)