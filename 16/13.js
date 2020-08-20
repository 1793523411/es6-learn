function * foo(){
    yield 2;
    yield 3;
    return 'foo'
}
function *bar(){
    yield 1;
    var v = yield *foo()
    console.log("v:"+v)
    yield 4;
}

var it = bar()

console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())
// { value: 1, done: false }
// { value: 2, done: false }
// { value: 3, done: false }
// v:foo
// { value: 4, done: false }

function* getFuncWithReturn(){
    yield 'a';
    yield 'b';
    return 'The result';
}
function* logReturned(genObj){
    let result = yield* genObj;
    console.log(result)
}
console.log([...logReturned(getFuncWithReturn())])
// The result
// [ 'a', 'b' ]

//很方便的取出嵌套数组的所有成员
function* iterThree(tree){
    if(Array.isArray(tree)){
        for(let i = 0; i< tree.length; i++){
            yield* iterThree(tree[i])
        }
    }else{
        yield tree;
    }
}
const tree =['a',['b','c'],['d','e']]
for(let x of iterThree(tree)){
    console.log(x)
}
// a
// b
// c
// d
// e


//遍历完全二叉树
function Tree(left,babel,right){
    this.left = left
    this.babel = babel
    this.right = right
}

function * inorder(t){
    if(t){
        yield* inorder(t.left)
        yield t.babel
        yield* inorder(t.right)
    }
}

//生成二叉树
function make(array){
    if(array.length == 1) return new Tree(null,array[0],null)
    return new Tree(make(array[0]),array[1],make(array[2]))
}

let tree2 = make([[['a'],'b',['c']],'d',[['e'],'f',['g']]])

var result = []
for(let node of inorder(tree2)){
    result.push(node)
}

console.log(result)
// [
//     'a', 'b', 'c',
//     'd', 'e', 'f',
//     'g'
//   ]