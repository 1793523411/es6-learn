var someString = 'Hi'
typeof someString[Symbol.iterator]

var iterator = someString[Symbol.iterator]()

iterator.next()
iterator.next()
iterator.next()
iterator.next()

var str = new String('Hi')
// [...str]
str[Symbol.iterator] = function(){
    return {
        next:function(){
            if(this._first){
                this._first = false
                return {value:"type",done:false}
            }else{
                return {done:true}
            }
        },
        _first:true
    }
}