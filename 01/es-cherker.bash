[admin@7a4472c6-f886-4304-b916-06ed207d13c1-7b744948dc-vr5cn /home/admin/workspace/codeup.aliyun.com/5eac1a0638076f00011bc578/repo_2020-06-09_2020060900049773]
$node node --v8-options | grep harmony
internal/modules/cjs/loader.js:583
    throw err;
    ^

Error: Cannot find module '/home/admin/workspace/codeup.aliyun.com/5eac1a0638076f00011bc578/repo_2020-06-09_2020060900049773/node'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:581:15)
    at Function.Module._load (internal/modules/cjs/loader.js:507:25)
    at Function.Module.runMain (internal/modules/cjs/loader.js:742:12)
    at startup (internal/bootstrap/node.js:283:19)
    at bootstrapNodeJSCore (internal/bootstrap/node.js:743:3)

[admin@7a4472c6-f886-4304-b916-06ed207d13c1-7b744948dc-vr5cn /home/admin/workspace/codeup.aliyun.com/5eac1a0638076f00011bc578/repo_2020-06-09_2020060900049773]
$npm install -g es-checker
/home/admin/.tnvm/versions/node/v10.15.1/bin/es-checker -> /home/admin/.tnvm/versions/node/v10.15.1/lib/node_modules/es-checker/bin/check.js
+ es-checker@1.4.2
added 13 packages from 8 contributors in 3.07s

[admin@7a4472c6-f886-4304-b916-06ed207d13c1-7b744948dc-vr5cn /home/admin/workspace/codeup.aliyun.com/5eac1a0638076f00011bc578/repo_2020-06-09_2020060900049773]
$es-ckecker
sh: es-ckecker: command not found

[admin@7a4472c6-f886-4304-b916-06ed207d13c1-7b744948dc-vr5cn /home/admin/workspace/codeup.aliyun.com/5eac1a0638076f00011bc578/repo_2020-06-09_2020060900049773]
$es-checker

ECMAScript 6 Feature Detection (v1.4.2)

Variables
  √ let and const
  √ TDZ error for too-early access of let or const declarations
  √ Redefinition of const declarations not allowed
  √ destructuring assignments/declarations for arrays and objects
  √ ... operator

Data Types
  √ For...of loop
  √ Map, Set, WeakMap, WeakSet
  √ Symbol
  √ Symbols cannot be implicitly coerced

Number
  √ Octal (e.g. 0o1 ) and binary (e.g. 0b10 ) literal forms
  √ Old octal literal invalid now (e.g. 01 )
  √ Static functions added to Math (e.g. Math.hypot(), Math.acosh(), Math.imul() )
  √ Static functions added to Number (Number.isNaN(), Number.isInteger() )

String
  √ Methods added to String.prototype (String.prototype.includes(), String.prototype.repeat() )
  √ Unicode code-point escape form in string literals (e.g. \u{20BB7} )
  √ Unicode code-point escape form in identifier names (e.g. var \u{20BB7} = 42; )
  √ Unicode code-point escape form in regular expressions (e.g. var regexp = /\u{20BB7}/u; )
  √ y flag for sticky regular expressions (e.g. /b/y )
  √ Template String Literals

Function
  √ arrow function
  √ default function parameter values
  √ destructuring for function parameters
  √ Inferences for function name property for anonymous functions
  × Tail-call optimization for function calls and recursion

Array
  √ Methods added to Array.prototype ([].fill(), [].find(), [].findIndex(), [].entries(), [].keys(), [].values() )
  √ Static functions added to Array (Array.from(), Array.of() )
  √ TypedArrays like Uint8Array, ArrayBuffer, Int8Array(), Int32Array(), Float64Array()
  √ Some Array methods (e.g. Int8Array.prototype.slice(), Int8Array.prototype.join(), Int8Array.prototype.forEach() ) added to the TypedArray prototypes
  √ Some Array statics (e.g. Uint32Array.from(), Uint32Array.of() ) added to the TypedArray constructors

Object
  √ __proto__ in object literal definition sets [[Prototype]] link
  √ Static functions added to Object (Object.getOwnPropertySymbols(), Object.assign() )
  √ Object Literal Computed Property
  √ Object Literal Property Shorthands
  √ Proxies
  √ Reflect

Generator and Promise
  √ Generator function
  √ Promises

Class
  √ Class
  √ super allowed in object methods
  √ class ABC extends Array { .. }

Module
  × Module export command
  × Module import command


=========================================
Passes 39 feature Detections
Your runtime supports 92% of ECMAScript 6
=========================================


[admin@7a4472c6-f886-4304-b916-06ed207d13c1-7b744948dc-vr5cn /home/admin/workspace/codeup.aliyun.com/5eac1a0638076f00011bc578/repo_2020-06-09_2020060900049773]
$node -v
v10.15.1

[admin@7a4472c6-f886-4304-b916-06ed207d13c1-7b744948dc-vr5cn /home/admin/workspace/codeup.aliyun.com/5eac1a0638076f00011bc578/repo_2020-06-09_2020060900049773]
$npm -v
6.4.1