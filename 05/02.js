// E:\desktop\start\node\es6>node
// Welcome to Node.js v12.10.0.      
// Type ".help" for more information.
// > 'x##'.split(/#/y)
// [ 'x', '', '' ]
// > '##x'.split(/#/y)
// [ '', '', 'x' ]
// > 'x##'.split(/#/g)
// [ 'x', '', '' ]
// > '##x'.split(/#/g)
// [ '', '', 'x' ]
// > '#x#'.split(/#/y)
// [ '', 'x', '' ]
// > '#x#'.split(/#/g)
// [ '', 'x', '' ]
// > '##'.split(/#/g)
// [ '', '', '' ]
// > canst REGEX = /a/gy ;
// Thrown:
// canst REGEX = /a/gy ;
//       ^^^^^

// SyntaxError: Unexpected identifier
// > canst REGEX = /a/gy
// Thrown:
// canst REGEX = /a/gy
//       ^^^^^

// SyntaxError: Unexpected identifier
// > const REGEX = /a/gy
// undefined
// > 'aaxa'.replace(REGEX , '-' )
// '--xa'
// > const REGEX2 = /a/g
// undefined
// > 'aaxa'.replace2(REGEX , '-' )
// Thrown:
// TypeError: "aaxa".replace2 is not a function
// > 'aaxa'.replace(REGEX2 , '-' )
// '--x-'
// > 'a1a2a3'.match(/a\d/y)
// [ 'a1', index: 0, input: 'a1a2a3', groups: undefined ]
// > 'a1a2a3'.match(/a\d/yg)
// [ 'a1', 'a2', 'a3' ]
// >

//s匹配任何空白字符，S匹配任何非空白字符

//匹配词元
const TOKEN_Y = /\s*(\+|[0-9]+)\s*/y
const TOKEN_G = /\s*(\+|[0-9]+)\s*/g

console.log(tokenize(TOKEN_Y,'3 + 4'))
console.log(tokenize(TOKEN_G,'3 + 4'))
console.log(tokenize(TOKEN_Y,'3x + 4'))
console.log(tokenize(TOKEN_G,'3x + 4'))

// [ '3', '+', '4' ]
// [ '3', '+', '4' ]
// [ '3' ]
// [ '3', '+', '4' ]

function tokenize(TOKEN_REGEX,str){
    let result = []
    let match;
    while(match = TOKEN_REGEX.exec(str)){
        result.push(match[1])
    }
    return result
}


