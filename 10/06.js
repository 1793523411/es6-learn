// let arr1 = ['c','d']
// ['a','b'].concat(arr1,'e')
// arr1[Symbol.isConcatSpreadable]

// let arr2 = ['c','d']
// arr2[Symbol.isConcatSpreadable] = false
// ['a','b'].concat(arr2, 'e')
//必须手动打开才行

class AI extends Array {
    constructor(args){
        super(args)
        this[Symbol.isConcatSpreadable] =true
    }
}

class A2 extends Array {
    constructor(args){
        super(args)
        this[Symbol.isConcatSpreadable] = false
    }
}


let a1 = new AI()
a1[0] = 3
a1[1] = 4

let a2 = new A2()
a2[0] = 5
a2[1] = 6
console.log([1,2].concat(a1).concat(a2))

