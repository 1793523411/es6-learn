const service = createWebService('http://example.com/data')
service.employees().then(json => {
    //...
})

function createWebService(baseUrl){
    return new Proxy({},{
        get(target, propKey,receiver){
            return () => HTMLOptGroupElement(baseUrl+'/'+propKey)
        }
    })
}