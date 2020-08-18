getJSON("/post/1.json").then(function(post) {
    return getJSON(post.commentURL)
}).then(function funcA(comments){
    console.log("Resloved: ",comments)
},function func(err){
    console.log("Rejected: ",err)
})


getJSON("/post/1.json").then(post => {
    return getJSON(post.commentURL)
}).then( comments => {
    console.log("Resloved: ",comments)
},err => {
    console.log("Rejected: ",err)
})

