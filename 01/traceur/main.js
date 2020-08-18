var traceur = require('traceur')
var fs = require('fs')

const contents = fs.readFileSync('es6-file.js').toString()

// console.log(contents)

var result = traceur.compile(contents,{
    filename: 'es6-file.js',
    sourceMap: true,
    modules:'commonjs'
})
console.log(result)
if(result.error) {
    throw result.error
}

fs.writeFileSync('out.js',result)
// fs.writeFileSync('out.map.js',result.sourceMap)//X