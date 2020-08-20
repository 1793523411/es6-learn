var ticking = true
var clock = function(){
    if(ticking){
        console.log('Tick')
    }else{
        console.log('Tock')
    }
    ticking = !ticking
}

var clock = function* (){
    while(true){
        console.log('Tick')
        yield;
        console.log('Tock')
        yield
    }
}