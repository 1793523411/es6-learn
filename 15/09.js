function readLinesSync(file){
    return {
        next(){
            return {done:true}
        },
        return(){
            file.close()
            return {done: true}
        }
    }
}

//return必须返回一个对象，Generator规格决定

for(let line of readLinesSync(fileName)){
    console.log(line)
    break;
}