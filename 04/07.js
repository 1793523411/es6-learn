var sender = '<script>alert("abc")</script>'
var message = SaferHTML`<p>${sender} has send you a message</p>`
console.log(message)
//防止用恶意输入
function SaferHTML(templateData){
    var s = templateData[0]
    for(var i = 1;i<arguments.length;i++){
        var arg = String(arguments[i])
        s += arg.replace(/&/g,"&amp").replace(/</g,"&lt").replace(/>/g,"&gt")

        s += templateData[i]
    }
    return s
}


//国际化处理
il8n`Welcome to ${siteName}, you are visitor number ${visitorNumber}!`
//模板字符串并不能取代Mustache之类的模板库，因为没有判断和循环处理功能，但是通过标签，可以自己添加
var libraryHtml = hashTemplate`
    <ul>
        #for book in ${myBook}
        <li><i>#{book.title}</i>by #{book.author}</li>
        #end
    </ul>
`
// 也可以用在javascript语言之中嵌套其他语言，比如，jsx函数讲一个DOM字符串装维React对象

