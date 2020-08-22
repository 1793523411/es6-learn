class MyClass {
    myProp = 42
    constructor(){
        console.log(this.myProp)
    }
}
new MyClass()

//以前实例属性只能写在constructor方法里
class ReactCounter extends ReactCounter.Component{
    constructor(props){
        super(props)
        this.state = {
            count: 0
        }
    }
}

//有了新的写法可以不在constructor中定义
class ReactCounter extends React.Component {
    state = {
        count: 0
    }
}

//可读性更强
class ReacCounter extends React.Component{
    state;
    constructor(props){
        super(props)
        this.state = {
            count: 0
        }
    }
}