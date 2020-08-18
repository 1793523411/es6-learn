// String.prototype.replace(searchValue,replaceValue)
// //=
// searchValue[Symbol.replace](this,replaceValue)

const x = {}
x[Symbol.replace]  = (...s) => console.log(s)
'Hello'.replace(x,'World')//[ 'Hello', 'World' ]
