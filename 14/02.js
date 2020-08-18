//异步加载图片

function loadImageAsync(url) {
  return new Promise(function (reslove, reject) {
    var image = new Image();
    image.onload = function () {
      reslove(image);
    };
    image.onerror = function(){
        reject(new Error('Count not load'))
    },
    img.src = url
  });
}

//|promise实现ajax操作

var getJSON = function(url){
    var promise = new Promise(function(reslove,reject){
        var client = new XMLHttpRequest()
        client.open('GET',url)
        client.onreadystatechange = handler;
        client.responseType = "json"
        client.setRequestHeader("Accept","application/json")
        client.send()

        function handler(){
            if(this.readyState !== 4){
                return
            }
            if(this.readyState === 200){
                reslove(this.response)
            }else{
                reject(new Error(this.statusText))
            }
        }
    })
    return promise
}

getJSON("/posts.json").then(function(json){
    console.log('Content:'+json)
},function(error){
    console.error('error',error)
})
