//并发执行
async function loadInorder(urls){
    //并发读取远程url
    const textPromises = urls.map(async url => {
        const response = await fetch(url)
        return response.text()
    })
    //按次序输出，有await
    for(const textPromise of textPromises){
        console.log(await textPromise)
    }
}