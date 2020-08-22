//私有方法
//方法一
class Widget {
    foo(baz){
        this._bar(baz)
    }
    //私有方法
    _bar(baz){
        return this.snaf = baz
    }
}

//方法二,将私有方法移出模块
class Widget {
    foo(baz){
        Bar.call(this,baz)
    }
}
function bar(baz){
    return this.snaf = baz
}

//方法三使用Symbol
const bar = Symbol('bar')
const snaf = Symbol('snaf')

export default class myClass {
    foo(baz){
        this[bar](baz)
    }
    [baz](baz){
        return this[snaf] = baz
    }
}
//由于bar和snaf都是Symbol值，导致第三方无法获取他们，因此达到了私有方法和私有属性