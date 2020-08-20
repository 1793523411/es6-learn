function* loadUI(){
    showLoadingScreen()
    yield loadUIDataAsynchronously()
    hideLoadingScreen()
}
var loader = loadUI()
loadUI.next()
loadUI.next()

//用Generator同步表示Ajax操作
function* main(){
    var result = yield request("http://some.url")
    var resp = JSON.parse(result)
    console.log(resp.value)
}
function request(url){
    makeAjaxCall(url, function(reponse){
        it.next(reponse)
    })
}
var it = main()
it.next()


function* numbers(){
    let file = new FileReader("numbers.txt")
    try {
        while(!file.eof){
            yield parseInt(file.readLine(),10)
        }
    } finally {
        file.close()
    }
}