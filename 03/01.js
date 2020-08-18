function* fibs(){
    let a = 0
    let b = 1
    while(true){
        //?必须加分号
        yield a;
        [a,b] = [b,a+b]
    }
}

let [a,b,c,d,e,f] = fibs()
console.log(a,b,c,d,e,f)

let res = [[1,2],[3,4],[100,200]].map(([a,b]) => a+b)
let res2 = [[1,2],[3,4],[100,200]].map(([a,b]) => a)
console.log(res)
console.log(res2)