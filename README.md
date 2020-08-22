## 部署进度

哈哈哈，哈哈哈我真聪明

## babel

- .babel 文件配置解说,presets 用来设定转码规则
- 全局命令行转码，也可以在项目中安装 babel-cli,然后使用 script 来运行 babel 转码，项目中可以使用也可以 npx
  - -o 指定输出文件，-d 指定输出目录，-s 生成 source mao 文件
- babel-node 可直接运行 es6 代码，并且提供了一个支持 es6 的 REPL 环境，babel-node 不能单独安装是随着 babel 安装而安装的，也可以在项目中运行 script 使用
- babel-register 改写了 require，作用是每当加载.js,.jsx,.es,.es6 文件时，会先使用 babel 转码，只会对 require 命令加载的文件进行转码，而不会对当前的文件进行转码，由于只是实时转码，只是和在开发环境中使用
- babel-core 可以用来调用 babel 的 api 进行转码
- babel 只转换新的语法（synax）,而不转化新的 API，如迭代器，生成器，集合，map，代理，symbol，promise 等全局对象，以及一些在这之上的方法，所以需要 babel-polyfill，babel 默认不转码的 api 很多,这是 babel-polyfill 被当做垫片
- babel 也可以用在浏览器环境，，使用 babel-standalone,可使用 cdn 方式引入，但这样实时转码对性能不好，还是直接加载转好的好
- babel 配合 browserfy，有点爽，但 webpack···

> browserify 的用途是将前端用到的众多资源（css,img,js,...) 打包成一个 js 文件的技术,Browserify 可以让你使用类似于 node 的 require() 的方式来组织浏览器端的 Javascript 代码，通过预编译让前端 Javascript 可以直接使用 Node NPM 安装的一些库

- 在线转化，哈哈哈，我似乎就玩过几次
- babel 结合其他工具使用，比如 eslint，mocha
- 除了 babel，Google 公司的 Traceur 也可以转换 es6 代码，在网页使用 cdn 引入，写法与使用 babel 不同，且这个也有在线转化
- traceur 也有命令行类似于 babel 的转换，全局安装后可以使用 traceur 直接运行 es6 脚本，也可以将 es6 代码转为 es5 代码保存，为防止有些特性编译不成功，最好加上 --experimental，转换过后的可以直接在浏览器中运行
- node 环境中使用 traceur,也可以转换成功，亲测，有效

## let

- 块级作用域
- 不存在变量提升，存在暂时性死区，嘿嘿嘿，本质就是，只要进入当前作用域，所使用的变量就已经存在，但是不可获取，只有等到声明变量的那一行代码出现，才可以获取和使用该变量，这么做是为了减少运行时错误
- 同一作用域内，不允许重复声明
- 为什么需要块级作用域:1.内层变量可能覆盖外层变量，2.用来计数的变量泄露为全局变量
- 内层作用域可以定义外层作用域的同名变量
- 块级作用域的出现，实际上获得广泛应用的立即执行函数（IIFE）不再必要
- es5 标准中不允许块级作用域中声明函数，但即使使用也不会报错，因为浏览器厂商们都是大哥，es6 明确规定可以在块级作用域中声明函数，但浏览器厂商都是大哥，实际在运行时，es6 中块级作用域中声明函数会被当做 var 变量声明变量一样对待，即函数声明提升，还有一点是，必须用大括号括住
- do 表达式：本质上块级作用域是多个操作封装在一起句，没有返回值，所以可以在块前面加一个 do，使之变为表达式付给一个变量，这个变量会获得整个块级作用域的值,其实这是一个提案，哈哈哈，我现在写语法都通不过

## const

- const 与 let 具有相同的特征，暂时性死区，块级作用域，不同的是，该值一旦声明不能在发生变化，这也意味着，必须赋予初值
- const 的本质指向的内存地址不变，这说明可以改变 const 声明的对象属性，但不可以给对这个对象重新赋值，数组也是这样(毕竟数组也是对象)，但是想让属性不可变该怎么办？对象冻结，在严格模式下起作用，否则不起作用，不仅对象可以冻结，对象的属性也可以冻结，这样就可以将一个对象彻底冻结,我这里不报错，但操作不了，也算是冻结达到目的了(严格模式下)
- es6 六种声明变量的方法，var function let const import class

## 顶层对象与 global 对象

- javascript 最大的败笔之一，顶层对象的属性与全局变量相关，如果一个变量未声明，编译时无法报错，因为全局变量可能是顶层对象的属性创造的，而属性的创造是动态的，在这，这不利于模块化编程，window 对象具有实际意义，不合适
- es6 为了兼容，var 和 function 命令声明的全局变量依然是顶层对象的属性，但 let 等不属于，从此，全局变量将逐步与顶层对象属性隔离
- 默认 this 指向和顶层对象，在浏览器，node，webworker 中有差异，无法统一，很那找到一种方法在所有情况下都取到顶层对象
- 嘤嘤嘤，乱了，回顾一下总结一下
- 浏览器中，顶层对象是 window，但 node 和 web worker 没有 window
- 浏览器和 web worker 中，self 指向顶层对象，但 node 没有 self
- node 中，顶层对象是 global，但其他环境都不支持
- 同一段代码在各种环境中都取到顶层对象，一般使用 this，但也有局限性
- 全局环境中，this 会返回顶层对象，但是，node 和 es6 模块，this 返回当前模块
- 对于函数中的 this，如果函数不是作为对象的方法运行，而是单纯作为函数运行，this 会指向顶层对象，但是，严格模式下，this 会返回 undefined
- 不管是否严格，new Function('return this')(),总是会返回全局对象，但是如果浏览器使用了 CSP（内容安全策略），那么，eval， new Function，这些方法可能都无法使用
- 为解决上述问题，有一个提案，在语言层面引入 global，垫片库 system.global 模拟了这个提案

## 解构赋值

- 只要某种数据结构**具有 Iterator 接口**，都可以解构赋值
- 有关默认值，es6 内部使用严格相等判断一个位置是否有值，所以，如果一个数组成员不严格等于 undefined，默认值不会生效，也就是说，null 不会让默认值生效，只有 undefined 会让默认值生效
- 默认值是函数时，表达式惰性求值
- 对象解构赋值的简写：`let { foo:foo,bar:bar } = { foo:"aaa":bar:"bbb" }`,也就是说，对象结构内部机制是先找到同名属性，然后赋值给变量，真正被赋值的后者而不是前者，这意味着属性可以多对一
- 解构赋值注意块级作用域
- 数组本质是对象，所以你懂的(_^▽^_)，而字符串会被转为类数组，所以，哈哈哈，类数组有 length 属性，所以：可以找同名属性赋值
- 解构赋值等号右边是数字或布尔会被转为对象，这时就拥有了许多属性，其实只要右边不是对象或数组，都会被转化为对象，但 undefined 和 null 无法被转为对象，所以在对象的解构赋值中，右边不能只是这两个
- 函数进行解构赋值时，实参相当于等号右边，形参相当于等号左边
- 圆括号问题：只有一种情况可以使用圆括号，那就是非模式部分可以使用圆括号，其他的都把报错，变量声明语句，函数参数，不要使用圆括号，赋值语句小心使用
- 解构赋值用途：交换，返回多个值，函数参数定义，提取 json 数据，函数默认参数，遍历 map 结构（map 结构原生支持 Iterator），输入模块的指定方法

## 字符串拓展

- Unicode 表示字符，使用{}括住码点表示超过 0XFFF 的数值，这与四字节的 UTF-16 编码是等价的,现在有 6 种方法表示一个字符：一个字符，ASCII 码，十六进制，es5 的 Unicode 表示，es6 的{}括住码点表示
- javascript 中一个字符一般占 2 个字节，对于 Unicode 码点大于 0XFFFF 的，需要四个字节，javascript 会认为他们是两个字节， 所以 es5 的 charCodeAt 不能正确识别，占四个字节的字符，但是 es6 的 codePointAt()可以正确识别
- codePointAt()会正确返回 32 位的 utf-16 字符的码点，对于两个字节存储的常规字符，会返回和 charCodeAt()方法相同的结果，对了他们返回的结果都是十进制表示，使用 toString(16)可以转为十六进制，注意 codePointAt()的参数，与直接看到的可能不匹配
- 可以使用 codePointAt()讲一个字符转为十六进制和 0XFFFF 比较来判断是由两个字节还是四个字节组成
- 从码点返回字符串，es5：String.formCharCode(),es6: String.CodePoint()你补了 es5 不能识别 UTF-16 字符的缺陷，如果这些有多个参数，最终会被拼接为字符串；还有一点，前者方法定义在 String 对象上，而后者定义在字符串的实例对象上
- es6 为字符串添加了遍历器接口，这样做除了可以使得字符串用 for...of 遍历外，最大的优点是可以识别大于 0XFFFF 的码点
- 有一个提案提出使用字符串实例的 at 方法返回 Unicode 大于 0xFFFF 码点的字符，需要使用垫片库，与之对应的 es5： charAt()
- es6 为字符串实例提供了 normalize 方法，用来将自负的不同表示法统一为同样的形式，成为 Unicode 正规化，这里好玄学，暂且略过
- es5 有 indexOf，来返回指定字符串在另一个字符串中首次出现的位置，es6 又来了 includes，startsWith，endsWith,他们都返回布尔值，表示是否包含，第二个参数可以指定搜索位置
- repeat 返回新字符串，表示将原来的重复多少次，如果不为数字，或转换过不为数字，则会被视为 0,NaN,0~-1 也会被视为 0，其他负数会报错
- 补全字符串：padStart(),padEnd(),第一个参数指定位数，小于等于原字符串长度没返回原字符串，第二个指定要补充的内容，如果没有，补充为空格，有可能会会截取，用途：为数值补全指定位数，提示字符串格式
- 模板字符串，这个很熟悉了，来点细节，支持嵌套，还支持普通字符串里嵌套模板字符串，注意变量不声明会报错，用途：模板编译
- 标签模板，标签就是函数，模板其实不是模板，是函数调用的一种特殊形式，如果这之中有变量，就成了先处理成多个参数，在函数调用；用处：防止用户恶意输入，多语言处理(国际化)，嵌套其他语言（jsx 函数讲一个 DOM 字符串装维 React 对象），模拟模板库,对了，标签模板还有一个 raw 属性可以获取转义后的字符串
- es6 还为原生的 String 对象提供了 raw 来处理模板字符串:`String.raw`Hi\n\${2+3}``=>'Hi\\n5'，String.raw 方法也可作为正常函数使用，其参数是一个具有 raw 属性的对象，raw 属性的值也应该是一个数组:String.raw({raw:'test'},0,1,2) => String.raw({raw:['t','e','s','t']},0,1,2)
- 模板标签可以嵌套其他语言，但是模板字符串默认会将字符串转义，导致无法嵌入其他语言，有提案···

## 正则的扩展

- 这个说实话有点不太熟···
- es5 中 RegExp 构造函数的参数有两种，字符串+修饰符，正则表达式(修饰符在表达式中，不允许加第二个参数修饰符)，es6 让他可以当地一个参数为正则表达式时，第二个参数为修饰符，且可以覆盖第一个参数中的修饰符
- 字符串对象有四个方法可以使用正则表达式：，match(),replace(),search().split(),es6 使这四个方法在语言内部全部调用 RegExp 的实例方法，从而做到所有与正则相关的方法都定义在 RegExp 对象上
- es6 新增 u 修饰符，含义为 unico 模式，可以在此模式下正确识别码点大于 0xFFFF 的单个字符，如果使用了 u 模式，对与点字符，大于 0xFFFF 的会被识别为一个字符；可以使用大括号表示法(\u{20BB7})来进行正则匹配，使用量词也可以正确识别码点大于 0xFFFF 的字符，通过这个修饰符，可以写出一个返回字符串正确长度的函数
- 有些 Unicode 字符编码不同，但字形很相近，所以在 i 模式匹配大小写时，使用了 Unicode，必须加上 u 模式，否则，区分不了 Unicode 字符的大小写
- es6 新增 y 修饰符，叫做粘连匹配，是全局匹配的，与 g 修饰符的不同后一次的匹配是从上一次匹配的成功的下一个位置开始的，所以叫粘连，y 修饰符隐含了头部匹配的标志（^),在 split 方法中使用 y 修饰符，原字符串必须以分隔符开头，只要匹配成功，数组的第一个成员肯定是空字符串,replace 方法使用时有 y 修饰符会粘连匹配;单独一个 y 修饰符对 match 方法只能返回第一个匹配，必须与 hg 修饰符联用才会返回所有匹配;y 修饰符的一个应用是从字符串中提取词元，y 修饰符可以确保匹配之间不会有漏掉的字符,也就是说，g 会忽略非法字符，而 y 不会
- 可以使用 stcky 来判断是否设置了 y 修饰符
- es5 的 source 返回正则表达式的正文，es6 提供了 flag 返回正则表达式的修饰符
- 由于.修饰符不能匹配换行，回车等字符，所以有一个提案说引入 s 修饰符，让.可以匹配任意单个字符，为此，正则表达式还引入了 dotAll 属性，dotAll 模式，属性表示是否处在 dotAll 模式下(s 模式下)，/s 和/m 模式不冲突，一起使用时，.匹配所有字符，^和\$匹配每一行首尾
- es6 支持后行断言和后行否定断言，比如先行断言匹配数字后面的%，后行断言匹配数字前面的$,后行断言的实现需要先匹配/(?<=y>)x/,然后在回到左边匹配y的部分，这种操作就导致了 /(?<=(d+)(d+))$/.exec('1053) 结果为 ["","1","053"],以为第二个括号是贪婪模式，第一个是只能捕获一个字符，它的反例就是 /^(d+)(d+)\$/.exec('1053),第一个括号是贪婪模式，所以结果为["1053","105","3"],还有就是，后行断言的反斜杠引用顺序与通常的顺序相反，必须放在对应的括号之前
- unicode 属性类：写法： \p{...},\P{...},后者是前者的反向匹配，允许匹配符合 Unicode 某种属性的字符，括号内的...具体位置 unicode 属性名=属性值，或直接一个属性名，这样就可以匹配，任意十进制数字，希腊字母，罗马数字，各种文字的所有字母，各种文字的所有非字母字符，所有的箭头字符，不过需要注意，这只对 unicode 有效，所以匹配时一定要加上 u 修饰符，否则会报错
- 具名组匹配：当进行分组匹配时，只能用用索引进行获取每一组的匹配值，es6 有一个提案是说可以使用具名组匹配每一组加上名字，并且原来的索引依然起作用`const RE_DATE = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;const matchObj = RE_DATE.exec('1999-12-31')`,在 exec 方法返回结果的·groups 属性上引用该组名（名字和人索引都可）
- 有了具名组匹配，可以使用解构赋值，group 为冒号左边的属性`let {groups:{one,two}} = /^(?<one>.*):(?<two>.*)$/u.exec('foo:bar')`,做字符串替换时，使用\$<组名>引用具名匹配，作为第二个参数传入，第一个参数为正则表达式，第二个参数也可以是函数
- 如果想在正则表达式内部引用某个“具名组匹配”，可以使用\k<组名>的写法，数字引用也有效，两种语法可以同时用

## 数值的扩展

- es6
- 提供了二进制八进制的新表示法，扥别是 0b(0B)和 10o(0O),es5 严格模式中，八进制不允许使用用前缀 0 表示，es6 进一步表示，要是用 0o 表示，可以使用 Number 方法将其转为十进制
- Number.isFinite(),Number.isNaN(),分别判断是有限和是否为 NaN，这与原来 es5 的全局方法 isFinite()和 isNaN()的不同在于，传统方法会将非数值转为数值，而新方法不会进行转换
- es6 讲全局方法 parseInt()和 parseFloat()移植到了 Number 对象上，行为保持不变，这样做是为了减少全局方法，始于颜逐步模块化
- Number.isInteger()判断一个是是否为整数，js 内，整数和浮点数用同样的方法存储，所以 3 和 3.0 被视为同一个数
- es6 在 Number 上新增一个极小的常量:Number.EPSILON，用来为浮点数设置一个误差范围，小于这个误差，即可认为是得到了正确结果，这个数的实质是一个可接受的误差范围
- 安全整数：es6 引入了 Number.MAX_SAFE_INTEGER 和 Number.MIN_SAFE_INTEGER 两个常量，表示范围上下限（js 能精确表示的整数的范围）Number.isSafeInteger()用来表示一个整数是否落在范围内，使用这个函数验证运算结果时，一定要验证参与运算的每个值，不然有可能是不正确的
- es6 在 Math 上新增了 17 个与数学相关的方法
- Math.trunce()用于去除一个整数的小数部分，对空值和无法取整的返回 NaN
- Math.sign(),用于判断一个数到底是正数还是负数，对于非数值会先将其转为数值，四种结果（+0，-0）
- Math.cbrt(),返回一个数的立方根，会进行数值转换
- Math.clz32()返回一个数的 32 位无符号整数有多少个前导 0（左移运算符与其直接相关），会进行数值转换
- Math.imul()方法返回两个数以 32 位带符号整数形式相乘的结果，返回的也是一个 32 位带符号整数，主要是为了处理超出 32 位的部分溢出，对于很大的数，低数值往往不精确，而这个方法可以返回正确的低位数值
- Math.fround()方法返回一个数的单精度浮点数形式，对于整数没有区别，主要区别在于无法用 64 个二进制位表示的小数，这是这个方法会返回最接近这个小数的单精度浮点数
- Math.hypot()返回所有参数的平方和平方根，会进行数值转换
- 对数方法和双曲线函数方法
- 有一个提案：Math.signbit()方法判断一个数的符号位是否已经设置 IEEE754 标准规定第一位是符号位，实际编程中+0.-0 非常麻烦，因为他们是相等的，有了这个提案，+0，-0 分别返回 false，true
- es6 新增指数运算符 ** 允许 **= `a **= 3 //a=a*a*a`,对于 v8 引擎，指数运算符与 Math.pow()实现不同，对于特别大的运算，两者会有细微差别
- Integer 数据类型，这个用来解决数非常大，且要求精确计算，比如，科学和金融方法的精确计算，该数据类型只表示整数，没有位数的限制，任何位数的整数都可以精确表示，与普通 number 类型区别是后缀用 n 表示，js 提供原生 Integer 对象，生成 Integer 类型的数值，转换规则与 Number()一致，除了 / 运算符，其他运算符与 Number 一样，/运算符会对舍去小数部分，返回一个整数，几乎所有的 Number 运算符在 Integer 中都可以使用，除了右移运算符，和一元的求正运算符，前者是因为 Integer 没有最高位，后者是因为 不知道，相等运算符会改变数据类型，所以两边不能一个为 Number 一个为 Integer，但精确相等运算符不会改变数据类型，所以可以，返回的结果是 false

## 函数的扩展

- 提供了函数默认参数，利于阅读和未来版本的的优化，参数变量是默认声明的，函数体中不能在使用 let 或 const 重新赋值，不能有同名参数，参数默认值是惰性求值
- 与解构赋值结合使用
- 函数参数默认值的位置在最后时，调用时可以不写，否则必须写上，不然没有效果或报错，这叫尾参数，参数为 null 不触发默认值，为 undefined 触发默认值
- 函数 length 属性返回没有指定默认值的参数个数，也就是说，指定了默认值后，length 属性将失真，默认值不是尾参数，length 属性不再计入后面的参数，reset 参数不计入 length，length 属性的含义是该函数与其传入的参数个数
- 一旦使用了默认参数，函数声明初始化时，参数就会形成一个单独的作用域，注意暂时性死区的出现
- 可以利用默认值指定某个参数不得省略，该默认值为抛出一个错误，参数默认值设为 undefined 表示可以省略
- reset 参数只能作为后一个参数出现，否则报错
- es5 规定函数内部可以使用严格模式，但 es6 规定，只要函数参数使用了默认值，解构赋值，或者扩展运算符，那么函数内部就不能显示设定为严格模式，否则就会报错，这样做是因为，函数内部的严格模式对函数体和函数参数都有效，但声明实在函数体中，两种方法规避这一限制：全局严格模式，或把函数包在一个无参立即执行函数里面
- name 属性返回函数名，对于赋值给一个变量匿名函数，es5 返回空字符串，es6 返回实际变量名，对于赋值给变一个量具名函数，都返回这个具名函数原本的名字；Function 构造函数返回函数实例，name 属性值为 anonymous；bind 返回的函数，name 属性会加上 bound 前缀
- 箭头函数返回对象时，注意括号会被解释为代码块，箭头函数可以与解构赋值结合使用，箭头函数简化回调函数
- 箭头函数注意事项：this 指向定义时所在的对象而不是使用时所在对象；不能当构造函数使用，否则报错；不可以使用 arguments 对象,该对象在函数体内不存在，可以使用 reset 参数代替；不可以使用 yield 命令，因此箭头函数不能用作 Generator 函数
- 箭头函数导致 this 总是指向函数定义生效时所在的对象，箭头函数可以让 setTimeout 里面的的 this 绑定定义时所在的作用域，而不是指向运行时所在的作用域
- this 指向固化并不是因为箭头函数内部有绑定 this 机制，实际原因是因为箭头函数没有自己的 this，导致内部的 this 就是外层代码块的 this，正是因为没有 this 所以不能做构造函数
- arguments，super，new.target 在箭头函数中指向外层函数中对应的变量,由于箭头函数没有自己的 this，当然不能用 call(),apply(),bind()这些方法去改变 this 的指向
- 箭头函数可以嵌套箭头函数,可以用来实现管道功能
- 箭头函数还有一个功能就是方便的改写写 λ 演算，从而探索科学计算
- 箭头函数并非适用于所有场合，所以 es7 提出了函数绑定，用来取代 apply，call，bind 调用，函数绑定运算符是 :: ，左边是一个对象，右边是一个函数，会自动将左边对象作为上下文环境（即 this 对象）绑定到右边的函数上，左边冒号为空，右边是一个对象的方法，则表示将该方法绑定到该对象上，`var method = obj::foo ==> var method = ::obj.foo`,因为双冒号运算符返回的还是原对象，因此可以采用链式写法
- 尾调用优化：某个函数的最后时调用另一个函数，这是函数式编程的一个重要概念，尾调用不一定出现在函数尾部，只要最后一步操作即可，且不能有额外的操作，只能是仅仅返回函数，即使语义完全一样也不行
- 尾调用优化可以做到每次执行时调用帧只有一项，这将大大节省内存，只有不再用到外层函数的内部变量，内层函数的调用帧才会取代外层函数的调用帧，否则无法进行尾调用优化
- 递归非常耗内存，尾递归只有一个调用帧，将不会发生栈溢出的错误
- 柯里化：将多参数的函数转成单参数的形式
- 递归本质是一种循环，因为在纯函数式编程语言中没有循环命令，所有的循环都用递归实现，，一旦使用递归，就最好使用尾递归
- es6 的尾调用优化只在严格模式下开启，正常模式无效，因为严格模式禁用了 func.arguments 和 func.caller
- 也可以不依赖严格模式，正常使用尾递归优化，蹦床函数
- es2017 有一个提案，允许函数最后一个参数有尾逗号

## 数组的扩展

- 拓展运算符，如同 rest 参数的逆运算，用来展开数组，主要用于函数调用,若扩展运算符后面是一个空数组，则不会产生任何效果
- 替代数组的 apply 方法,扩展运算符的应用：合并数组（代替 concat），与解构赋值结合用于生成数组（用于数组赋值时，只能将其放在参数的最后一位），作为函数返回值返回多个值，将字符串转为真正的数组（能正确时识别 32 位 unicode 字符），**实现了 Iterator 接口的对象（任何实现了 Iterator 接口的对象都可以使用扩展运算符转为真正的数组）**，map 和 set 结构,Generator 函数都实现了 Iterator 接口，因此可以使用扩展运算符
- Array.form()用于将两类对象转为真正的的数组：类似数组的对象，可遍历对象（包括 es6 的 set，map）,扩展与那算符也可以将某些数据结构转为数组，类似数组的对象，即必须有 length 属性，任何有 length 属性的对象都可以通过 Array.form 方法转为数组，而这种情况扩展运算符无法转换
- Array.from，支持第二个参数，来对每个元素进行操作,支持第三个参数，绑定 this
- Array.of 用于将一组值转换为数组，可以用于替代 Array(),new Array(),且不存在由于参数不同而不同的情况（一个参数时，指定长度，多个参数返回新数组），该方法行为十分统一
- copyWithin()方法会在当前数组内部的指定位置的成员复制到其他位置，这个方法会改变当前数组
- find 和 findIndex,一个找元素，一个找元素下标，参数为回调函数，返回第一个符合条件的值，函数参数：当前值，单当前位置，原数组，可以接受第二个参数来绑定 this，都可以发现 NaN，你不了 IndexOf 方法的不足 `[NaN]`.findIndex(y => Object.is(NaN,y))
- fill 方法使用给定值来填充一个数组，会覆盖原来数组，第二参数和第三个参数指定起始位置和结束位置
- entries(),keys(),values(),用于遍历数组，与 for···of 遍历区别是，keys 遍历健明，values()遍历值，entries 遍历键值对，不使用 for···of 循环，可以手动调用遍历器对象的 next 方法进行遍历
- 数组的 includes 方法与字符串的 includes 类似，es6 引入了该方法，返回布尔值，表示某个数组中是否包含给定的值，多个参数，与 indexOf 相比，更语义化，还可以正确判断 NaN（内部没有使用====严格相等运算符），还有就是与 Map 和 Set 数据结构的 has 方法区分，Map 的 has 用来查找健名，Set 的 has 方法用来查找值
- 数组的空位，空位不是 undefined，一个位置的值等于 undefined 依然是有值的，空位是没有任何值，in 运算符可以说明这一点
- es5 的各个方法对空位的处理很不一致，大多数情况下会忽略空位，有的会跳过，有的跳过但保留该值，有的将空位视为 undefined，而 undefined 可能会被处理成空字符串，但是，es6 明确将空位转为 undefined，所以 es6 的方法会将空位视为 undefined，由于空位处理规则非常不统一，所以建议避免出现空位

## 对象的扩展

- es6 允许直接写入变量和函数作为对象的属性和方法，这样写更简洁，只写属性名，表示属性值等于属性名，除了属性可以简写，方法也可以简写，这种写法中属性名总是字符串，这会导致一些看上去比较奇怪的结果，比如 class 作为属性名如果某个方法是 Generator 函数，则其前面需要加上星号
- 表达式可以作为属性名，放在方括号内，es5 不允许，表达时还可用作方法名，但属性表达式不能与简洁表达式同时使用，如果属性表达式是一个对象，默认情况下会自动转为字符串[object][object],会发生覆盖
- 对象方法也有 name 属性，但使用 get，set 描述方法时获取方法名需要 get，set 获取
- ==和===都有缺陷，前者自动转换数据类型，后者 NaN 不等于自身，所以需要一种在所有环境中，只要两个值一样，他们就应该相等,这就是 Object.is,与严格相等运算符基本一致，不同的只是，+0 不等于-0，NaN 等与自身
- Object.assign 方法用于将源对象的所有**可枚举**属性复制到目标对象,第一个参数是目标对象，后面是源对象，若有同名属性，后面会覆盖前面，参数不是对象会进行转换，无法转换会被跳过，只有一个参数返回该参数,该方法不复制继承熟性，也不复制不可枚举属性,属性名为 Symbol 值得属性也会被复制
- 注意上面方法只能是浅复制，有些库提供了 Object.assign 的定制版本可以解决浅复制的问题，比如 Lodash
- 常见用途：为对象添加属性，为对象添加方法，克隆对象，合并多个对象，为属性指定默认值
- 属性的可枚举行：每个属性都有一个描述对象 Descriptor 用于控制该属性的行为,es5 又是那个操作会忽略不可枚举属性，for...in(遍历自身和可继承的可枚举属性),Object.keys()（返回对象自身的所有可枚举属性）,JSON.stringfy()(只串行化对象自身可枚举属性)，es6 新增 Object.assign
- es6 规定，所有 class 的原型方法都是不可枚举的，操作中引入继承的属性会让问题变复杂，大多数情况，我们只关心对象自身的属性，所以尽量不要使用 for...in,而是使用 Object.keys()代替
- es6 六种遍历对象属性的方法：for...in, Object.keys(obj), Object.getOwnPropertyNames(obj), Object.getOwnPropertySymbols(obj)（返回所有对象自身的 Symbol 属性）, Reflect.ownKeys(obj),（返回所有，不管是可枚举还是 Symbol）都遵循同样的遍历次序：先数字，后字符串，最后 Symbol
- **proto**属性用来读取或设置当前对象的 prototype 对象,Obj.setPrototypeof 的方法的作用域**proto**相同，用来设置一个对象的 prototype 对象，返回参数本身，他是 es6 正式推荐的设置原型对象的方法,会进行对象的转换，由于 undefined 和 null 无法转为对象，所以会报错，Object.getPrototypeOf()方法用来读取一个对象的 prototype 对象,转换规则和 Object.setPrototype 一样
- Object.keys,Object.values,Object.entries():都遍历可枚举属性的 key 时不含继承，values 遍历会过滤 Symbol 值得属性,参数不是对象会先转为对象，由于数组和布尔值的包装对象都不会为实例添加非继承的属性，所以这是会返回空数组，字符串会转为数组，Object.entries()返回对象自身键值对的数组，除了返回值不一样其他的跟 values 基本一样，用途：遍历对象的属性，将对象转为真正的 Map 结构
- 对象的扩展运算符，在对象的解构赋值中，是浅复制，如果键的值是一个复合类型，复制的是这个值的引用，而不是副本，不会复制原型对象的属性，扩展运算符等同于 Object.assign 方法，扩展运算符可以用于合并两个对象，自定义运算符放在扩展运算符后面，扩展运算符的同名属性被覆盖，反过来就成了设置新对象的默认属性值，扩展运算符后面可以带有表达式，若后面是一个空对象，则没有任何效果，如果是 bull 或 undefined 会被忽略，不会报错，若参数对象中有函数 get，函数会被执行
- Object.getOwnPropertyDescriptor()用来返回某个对象属性的描述对象，Object.getOwnPropertyDescriptors()用来返回对象所有属性的描述对象（非继承），该方法解决 Object.assign 无法正确复制 get，set 属性的问题，该方法还可以实现一个对象继承另一个对象
- Null 传导运算符，比如`const name = message.body.user.firstName`,安全写法：`const name = message?.body?.firstName || 'default'`,除了有对象的：obj.prop 和 obj?.[expr],还有函数或对象方法的调用:func?.(...args),构造函数调用 new C?.(...args)

## Symbol

- Symbol 的引入保证了每个属性的名字独一无二，从根本上防止属性名冲突，Symbol 是 javascript 的第七种数据类型，声明这个类型不能使用 new 因为他是一个原始数据类型，symbol 的值不是对象，不能添加属性，基本上是一种类似于字符串的数据类型
- 参数相同的 Symbol，返回结果不同，symbol 不能与其他类型的值进行运算，否则报错，但他可以显式转为字符串，可以转为布尔值，但不能转为数值
- Symbol 可以作为属性名，保证不因为同名属性覆盖，Symbol 的值作为对象属性名时不能使用点运算符，点运算符后面总是字符串，对象内部使用 Symbol 值定义属性时，Symbol 值必须放在方括号中，还可以定义一组常量，保证不相等，常量使用 Symbol 的最大好处是，其他任何值都不可能有相同的值了，因此保证 switch 语句按设计的方式工作
- Symbol 可以消除魔术字符串（在代码中出现多次，与代码形成强耦合的某一个具体数字或字符串）
- Symbol 不会被常规方法遍历到，但它也不是私有属性，Object.getOwnPropertySymbols 方法可以获取指定对象的所有 Symbol 属性名，Reflect.ownKeys 方法也可以返回所有类型的健名，包括常规健名和 Symbol 健名，利用这个特性，可以为对象指定一些非私有但又希望只用于内部的方法
- 全局搜索：Symbol.for()，没有就创建，永远是同一个,Symbol()不会全局注册，即使参数相同，返回的也是不同的结果，Symbol.for()由于登记的名字是全局环境的，可以在不同的 ifram 或 service worker 中取到同一个值，Symbol.keyFor()返回已登记的 Symbol 类型值得 key
- Singleton 模式指的是，调用一个类且在任何时候都返回同一个实例,如果不用 Symbol 使用全局的方式，容易被任何文件改写，使用 Symbol 导致每次得到不一样的结果，而是用 Symbol.for(),就好啦
- 内置的 Symbol 值：Symbol.hasInstance 该属性指向一个内部方法，对象使用 instanceof 运算符时会调用这个方法，判断该对象是否为某个构造函数的实例；Symbol.isConcatSpreadable 表示对象使用 Array.prototype.concat()时是否可以展开;Symbol.species 属性指向当前对象的构造函数，创造实例时会默认调用这个方法，即使使用这个属性当做构造函数来创造新的实例，该属性要用 get 读取器;Symbol.match 属性指向一个函数，当执行 str.match(myObject)时，如果该属性存在，会调用它返回该方法的返回值；Symbol.replace 属性指向一个方法，当对象被 String.prototype.replace 方法调用时会返回该方法的返回值;类似的还有 Symbol.search 与 String.prototypr.search,Symbol.split 和 String.prototype.split(可以重新定义字符串对象的 split 方法的行为),对象的 Symbol.iterator 属性指向该对象的默认遍历器方法,对象进行 for...of 循环时，会调用 Symbol.iterator 方法返回该对象的默认遍历器;Symbol.toPrimitive 属性指向一个方法，对象被转为原始类型时的值时会调用这个方法，返回该对象的原始类型值，三种模式：Number,String,Default;Symbol.toStringTag 属性指向一个方法，在对象上面调用 Object.prototype.toString 方法时···,这个属性可以定制[object Object]或[object,Array]中 object 后面的字符串;对象的 Symbol.unscopables 属性指向一个对象，指定了使用 with 关键字是哪些属性会被 with 环境排除

## Set 和 Map 数据结构

- Set 本身是一个构造函数，用来生成 Set 数据结构，参数可以为数组，具有 Iterable 接口的其他数据结构，向 set 加入值不会发生类型转换，数字 5 和字符 5 不一样，内部判断两个值是否相同的算法类似于===，主要区别就是 NaN 等于自身，两个空对象不是精确相等的
- Set 实例的属性：Set.prototype.constructor,Set.prototype.size, 方法主要分为，操作方法和遍历方法
- 4 个遍历方法，keys(),values(),entries(),forEach(),遍历顺序就是插入顺序，Set 没有健名只有键值，或者说健名和键值是同一个，所以 keys 和 values 行为相同
- WeakSet 与 Set 的区别：前者的内部成员只能是对象而不会能是其它数据类型，WeakSet 中的对象都是弱引用，也就是说回收垃圾机制不考虑 WeakSet 对该对象的引用，不考虑该对象是否还存在于 WeakSet 之中，这是因为垃圾回收机制依赖引用计数，而 WeakSet 里面的引用都不计入垃圾回收机制，所以 WeakSet 的成员不适合引用，因此 es6 规定 WeakSet 不可遍历
- WeakSet 参数：数组或类数组的对象（任何具有 Iterable 接口的对象都可）,参数为数组时，成为 WeakSet 的成员是数组的成员，而不是数组本身，这意味着，数组的成员只能是对象
- WeakSet 没有 size 和 forEach 属性，WeakSet 的一个用处是存储 Dom 节点，而不用担心这些节点从文档中移除而引发内存泄漏
- js 的对象本质上是键值对的集合，但是只能用字符串作为键，这带来了很大的限制,所以有了 Map 数据结构，它类似于对象，也是键值对集合，但是键不限于字符串，各种类型的值都可以当做键，也就是说，Object 结构提供了‘字符串-值’的对应，而 Map 提供了‘值-值’的对应，是一种更完善的 Hash 结构的实现，如果需要键值对，Map 更合适
- Map 的参数：数组，任何具有 Iterator 接口且每个成员都是一个双元素数组的数据结构，set 和 map 都可以用来生成新的 Map,同一个键多次赋值，后者覆盖前者，**map 内只有对同一个对象的引用，Map 结构才将其视为同一个键，这一点要非常小，注意表面看去相同但内存地址的不同的情况**.Map 的键和内存地址绑定，键若为简单类型“严格相等，+0，-0 相等，NaN 等与自身
- Map 具有 size 属性，set 方法返回自身所以可以链式调用，get 方法如果找不到 key 返回 undefined，has 方法，delete 方法删除成功返回 true 否则返回 false，clear 方法没有返回值
- 遍历方法 keys(),values(),entries(),forEach(),遍历顺序就是插入顺序
- Map 数据结构可以与其他数据结构互转：数组，对象，JSON
- WeakMap 只接受对象作为健名（null 除外），不接受其他类型作为健名，weakMap 的健名所指向的对象不计入垃圾回收机制,weakMap 只弱引用健名，键值不弱引用
- WeakMap 比支持 size，clear，不能遍历，只有四个方法可用：get(),set(),has(),delete()
- WeakMap 作用：1.以 Dom 节点作为健名的场景，2.部署私有属性

## Proxy

- 属于一种元编程，对目标对象进行拦截，外界对该对象的访问都必须经过这层拦截，提供了一种机制可以对外界访问进行过滤和改写，第一个参数表示拦截对象，第二个参数表示拦截行为，`var proxy = new Proxy(target,handler)`,如果 handler 是一个空对象，没有任何拦截效果，访问 handler 就等同于 target,同一个拦截器可以拦截多个操作，proxy 可以作为其他对象的原型对象，这样当读取原型链上的属性时会进行拦截操作
  Proxy 所支持的所有拦截操作：`get(target,propKey,receiver),set(target,propKey,value,receiver),has(target,propKey),deleteProperty(target,propKsy),ownKeys(target),getOwnPropertyDescriptor(target,propKey),defineProperty(target,propKeys,propDesc),preventExtensions(target),getPrototypeOf(target),isExtensible(target),setPrototypeOf(target,proto),apply(target,object,args),construct(target,args)`

* 每个都很重要，具体用法看代码
* Proxy.revocable 方法返回一个可取消的 Proxy 实例，使用 revoke()取消，使用场景是：目标对象不允许直接访问，必须通过代理访问，一旦结束，就收回代理权，不允许再次访问
* this 问题：Proxy 可以代理对目标对象的访问，但不是目标对象的透明代理，即使不做任何拦截的情况下也无法保证与目标对象的行为一致，主要原因就是在 Proxy 代理的情况下，目标对象的内部的 this 关键字会指向 Proxy 代理
* 有些原生对象的内部属性只有通过正确的 this 才能获取，所以 Proxy 也无法代理这些原生对象属性,这是让 this 绑定原始对象就以解决这个问题
* Proxy 可以用来编写 web 服务的客户端，proxy 对对象的任意属性进行拦截操作，而不用为每一种数据写一个适配的方法，只要写一个 Proxy 代理即可
* 同理 Proxy 也可以用来实现数据库的 ORM 层

## Reflect

- 为操作对象而提供的新的 Api，目的：将 Object 对象一些明显属于语言内部的方法放到 Reflect 上，现阶段某些方法能在 Object 和 Reflect 对象上部署上部署，未来的新方法只能在 Reflect 上部署，Reflect 对象可以获取语言内部的方法；修改某些 Object 方法返回的结果，使其更合理；让 Object 操作都变为函数行为，某些 Object 操作是命令式的
- Reflect 对象和 Proxy 对象的方法一一对应，只要是 Proxy 的方法，就能在 Reflect 上找到对应的方法，无论 Proxy 怎样修改默认行为，我们总可以在 Reflect 上获取默认行为
- Reflect 一共有 13 个静态方法，参考 Proxy 因为与 Proxy 一一对应，大部分方法与 Object 的同名方法作用相同
- 开始练习这些代码

## Promise

- 简单来说，promise 是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作），从语法上，promise 是一个对象，从他可以获取一步操作的消息，promise 提供了统一的 API 各种异步操作都可以使用同样的方法进行处理
- 两个特点：状态不受外界影响，一旦状态改变就不会再变，这与事件完全不同，事件的特点是一旦错过了他，再去监听得不到这个结果，而 promise 对象可以在添加回调函数当发生改变时
- 有了 promise 就可以将异步操作以同步操作的流程表达出来，避免了层层嵌套的回调函数，promise 提供了统一的接口，使得控制异步操作更加容易
- promise 的缺点：无法取消，如果不设置回调函数，内部抛出的错误不会反映到外部，当处于 Pending 状态时无法得知目前进展到哪一个阶段（刚刚开始还是即将完成），如果某个事件不断重复的反复发生，一般来说，使用 Stream 模式好于 promise
- reject 作用：当 promise 的状态从未完成变为成功，在异步操作成功时调用，并将异步操作结果作为参数传递出去，reject 与其类似，然后使用 then 分别指定不同状态的回调函数,then 方法接收两个回调函数作为参数，顺序不可变，第二个可选，这两个参数都接受 promise 传出去的值作为参数
- Promise.prototype.then()添加状态改变时的回调函数,Promise.prototype.catch()是.then(null,rejection)的别名，用以指定错误发生时的回调函数;Promise.all 用于将多个 Promise 实例包装成新的 Promise 实例,参数必须具有 Iterator，且每个成员都时 Promise，参数中所有 Promise 都变为 Fulfilled，最终结果为 Fulfilled，只要有一个为 Reject，最终结果就为 Reject,此时，第一个被 Reject 的实例的返回值会传递给最终结果，Promise.race()同样是将多个 Promise 实例包装成一个新的 Promise 实例，只有参数中的 Promise 实例有一个率先变化，结果就跟着改变，率先改变的 Promise 实例的返回值就会传递给结果的回调函数；Promise.resolve:有时需要将现有的对象转为 Promise 对象，这是这个方法就起作用了，**注意 resolve，不是 reslove，写错了好多，我说怎么一直报 undefined 错误**；Promise.reject 类似 Promise.resolve,该方法的参数会原封不动的作为 reject 的理由变成后续方法的参数，这一点与 resolve 不同.
- es6 的 Promise API 提供的方法不是很多，可以自己部署一些有用的方法，下面部署两个不在 es6 中单很有用的方法：done(),finally()
- done:Promise 的最后一个方法抛出的错误无法被捕捉到，不论是 then 还是 catch，因为 Promise 内部的错误不会冒跑到全局，为此使用 done()总是处于回调链的尾端，保证抛出任何可能出现错误
- finally 用于指定不管 Promise 对象的最后状态如何都会执行的操作，与 done()的最大区别就是，他接受一个普通的回调函数作为参数，这个函数不管怎样都会执行
- 应用：加载图片，Generator 与 Promise 的结合
- Promise.try():提供了 try 代码块的模拟，就像 Promise.catch 模拟了 catch 代码块一样，针对代码中同步异步问题
- 最后：加入遇到一个函数不知道是同步还是异步，这是使用 Promise，该函数都会在本轮事件循环末尾执行，对于同步该如何解决，1.使用 await 写一个立即执行函，2.使用 Promise 写一个立即执行函数，3.前两个写法很笨拙，可以使用 Promise.try 处理；抛出错误的问题，对于同步抛出的错误，只能使用 try catch 单独捕获，这是可以使用 Promise.try,统一处理

## Iterator 和 for···of 循环

- es6 中有四种表示集合的数据结构，数组，对象，set，map，可以组合他们使用，这样就需要有一种统一的接口机制来处理所有的不同的数据结构：(Iterator)遍历器，它是一种接口为各种不同的数据结构提供统一的访问机制，任何数据结构只要部署该接口，就可以完成遍历操作
- Iterator 的三个作用：1.为各种数据结构提供一个统一，简便访问的接口，2.使得数据结构成员能够按照某种次序排列，3.es6 创造了一种新得遍历方式：for...of
- 遍历器对象本质是一个指针对象
- 当使用 for···of 遍历数据结构时，循环会自动寻找 Iterator 接口，只要数据结构部署了 Iterator 接口，就称之为可遍历，默认的 Iterator 部署在数据结构的 Symbol.iterator 属性，一个数据结构只要有这个属性就可以认为是可遍历
- 原生具备 Iterator 接口的数据结构：Array，Map，Set，String，TypedArray，NodeList 对象,其他数据结构（主要是对象）的 Itrator 接口都需要自己在 Symbol。iterator 属性上面部署，这样才会被 for···of 遍历（原型链上也可）
- 对象之所以没有部署是因为对象属性的顺序不是确定的需要开发者手动指定，遍历器是一种线性处理，对于非线性的数据结构，部署该接口相当于线性转换
- 什么时候默认调用 Iterator 接口：解构赋值，扩展运算符，yield，其他场合(任何接受数组作为参数的场合：for...of,Array.from(),Map(),Set(),WeakSet(),WeakMap(),Promise.all(),Promise.race())，还有 for···of
- 字符串的 Itera 接口，字符串是一个类似数组的对象，也具有原生的 Iterator 接口,自带的遍历器可以被自定义的覆盖
- Iterator 接口与 Generator 函数，Symbol.iterator 方法的最简单实现
- 遍历器对象的 return(),throw(),这两个参数是可选的，return 必须返回一个对象，Generator 规格决定，throw 配合 Generator 使用，一般的遍历器对象用不到这个方法
- for···of 内部调用是数据结构 Symbol.iterato 方法
- 计算后生成的数据结构，有些数据结构实在现有的数据结构的基础上计算生成的，比如 es6 的数组，map，set 都部署了 entries(),keys(),values(),调用后都返回一个遍历器对象

## Generator 函数的语法

- Generator 函数时 ES6 提供的一种异步编程解决方案，语法行为与传统函数完全不同，从语法上，可以把它理解成一个状态机，封装了多个内部状态；执行该函数会返回一个遍历对象，所以除了是状态机还是一个遍历对象生成函数，返回的遍历对象可以遍历 Generator 函数内部的每一个状态；形式上，是一个普通函数，两个特征：function 与函数名之间有一个\*，函数体内部使用 yield 语句定义不同的内部状态（yield 有产出的意思）
- Generator 函数返回的结果是一个指向内部状态的指针，可以使用 next 进行遍历，es6 没有规定\*的位置，所以···，但一般紧跟在 function 后面
- yield 是一种暂停标志，暂停函数的执行，还等同于提供了手动的惰性求值
- return 语句不具备记忆功能，而 yield 可以，正常函数只能返回一个值，而 Generator 返回的是一系列值，如果不使用 yield，就变成了一个单纯的暂缓执行函数,只有调用 next 才会执行，yield 只能在 Generator 中使用，其他地方会报错，forEach 参数是一个普通函数，所以不能再次使用，可以改为 for 循环
- 可以吧 Generator 赋值给对象的 Symbol.Iterator 属性，从而让对象具有遍历器借口
- yield 本身没有返回值，或者总是返回 undefined，next 方法可以带有一个参数，该采纳数被当做上一 yield 条语句的返回值,第一次 next 使用参数无效，v8 引擎直接忽略第一次 next 的参数，语法上第一个 next 用来启动遍历器，不需要参数
- for···of 循环可以自动遍历 Generator 函数生成的 Iterator 对象，且此时不再需要调用 next 方法
- Generator 函数返回的遍历对象都有一个 throw 方法，可以再函数体外抛出错误，然后在函数体内捕获,更多细节看代码里的注释
- Generator 函数返回的遍历器对象还有一个 return 方法，可以返回给定的值，并终结 Generator 函数遍历
- 如果在 Generator 函数内部调用另一个 Generator 函数，默认是没有效果的，这时就用到了 yield*,如果要在 yield 命令后面跟一个对象，需要在后面加上*，表明返回的是一个遍历器对象，这被称之为 yield*语句,`yield*` 后面可以跟任何带有遍历器接口的对象，如果被代理的 Generator 函数有 return 语句，那么便可以向他代理 Generator 函数返回数据
- 作为对象属性的 Generator 属性可以简写
- Generator 函数总是返回一个遍历器，Es6 规定这个遍历器是 Generator 函数的实例，也继承了 Generator 函数的原型对象上的方法，**返回的是遍历器对象，而不是 this 对象**，Generator 函数中在 this 对象添加一个对象，是拿不到的，Generat 函数也不能和 new 命令一起使用，因为 Generator 函数不是构造函数，但是有办法可以让 Generator 函数返回一个正常的对象实例，又可以使用 next 方法，也可以获得正常的 this，见代码
- Generator 是实现状态机的最佳结构,不需要像 es5 那样额外保存状态信息，因为本身就包含了一个状态信息
- Generator 与协程，协程可以理解为协作的线程或协作的函数，既可以用单线程实现，也可以使用多线程实现，前者是一种特殊的子例程，后者一种特殊的线程，go 中的见过一种对协程的解释（主要是执行权的交换），这里对于单线程的 javascript 又有了一种不同解释：子例程，采用后进先出的执行方式，只有当调用的子函数完全执行完，才会结束执行父函数，这也是与 go 中的协程的不同，在实现上看，在内存中子例程只使用一个栈，而协程使用多个栈，但只有一个栈在执行，也就是说协程以多占内存为代价实现多任务并行
- 由于 javascript 是单线程语言，只能保持一个调用栈，引入协程后每个任务保持自己调用栈，这样的最大好处是，当抛出错误可以找到原始的调用栈，不至于像异步操作的回调函数那样，一旦出错原始的调用栈就结束
- Generator 函数时 es6 对协程的实现，但属于不完全会实现，Generator 被称为半协程，意思是，只有 Generator 函数的调用者才能将执行权还给 Generator 函数，而完全实现是任何函数都可以让暂停的协程继续进行，如果将 Generator 函数当做协程，完全可以将多个需要相互协作的任务写成 Generator 函数，呀，他们之间互相使用 yield 语句交换执行权
- 应用：异步操作的同步化表达，控制流程管理(针对同步操作)，部署 Iterator 接口，作为数据结构

## Generator 函数的异步应用

- es6 以前的异步编程方法：回调函数，监听事件，发布订阅，Promise 对象，Generator 函数将 Javascript 带入了一个全新的阶段
- 回调函数的第一个参数为什么得是 err？因为执行分两段，第一段执行以后，执行上下文环境就已经结束了，在这以后抛出的错误其原来的上下文就已经捕获不到了，因此只能当做参数传递给第二段
- promise 解决了回调地狱的问题，但代码冗余还是存在，原来的任务被包装后，无论什么操作，一眼看去都是 then 的堆积，原来的语义变得很不清楚，Generator 提供了更好的写法：协程，使用 yield 是两个异步阶段的分界线，在这里执行权发生改变，使得代码写法非常像同步
- Generator 可以暂停执行和恢复执行是它能够封装异步操作的根本原因，除此之外，还有两个特性是他可作为异步编程的完整解决方案：函数体内外的数据交换和错误处理机制，出错的代码与处理错误的代码实现了时间和空间的分离，这对异步编程无疑是很重要的
- 虽然 Generator 函数将异步操作表示的很简洁，但流程管理确很不方便，即何时执行第一阶段，何时执行第二阶段，为此有了 Thunk 函数们可以自动执行 Genrator 函数，javascript 函数是传值调用，她的 Thunk 函数含义有所不同，在 javascript 语言中，Thunk 函数不是表达式，而是多参数函数，将其替换成一个只接受回调函数作为参数的单参数函数,生产环境中建议使用 Thunkify 模块,该模块多了一个检查机制相较于自己写的，变量 callbak 确保回调函数只运行一次，这样设计与 Generator 函数有关
- Thunk 有什么用？以前是没什么用，但 es6 有了 Generator 函数，Thunk 可以用于 Generator 函数的自动流程管理,真正的威力在与自动执行 Generator 函数
- Thunk 并不是 Generator 函数自动执行的唯一方案，因为自动执行的关键是，必须有一中机制自动控制 Generator 函数的流程，接收和交还程序的执行权，回调函数可以做到这一点，Promise 也可以做到这一点
- co 模块也可以用于 Generator 函数的自动执行,co 支持并发的异步操作，允许某些操作同时进行

## async 函数

- es6 引入 async 函数使得异步操作更加方便，async 函数就是 Generator 函数的语法糖,\*換成 async yield 換成 await
- async 函數對 Generator 函數的改进体现在以下 4 点：内置执行器（不用在 next），更好地语义，更广的实用性（可以是 Promise 也可以是可以跟原始类型，这是表示同步）返回值是 Promise 而不是 Iterator，进一步说 async 函数完全可以看做由多个异步操作包装成的一个 Promise 对象而 await 就是内部 then 的语法糖
- async 函数语法规则总体上来说比较简单，难点是错误处理机制，async 函数内部的异步操作执行完，才会执行 then 方法指定的回调函数
- 多个 await 命令后的异步操作如果不存在继发关系，最好让他们同时触发，await 只能出现在 async 函数中，其他地方会报错
- async 的实现原理就是将 Generator 和自动执行函数包装在一个函数里
- async 相比于 Promise 和 Generator 函数更简洁，更符合语义，几乎没有与与一部相关的代码，他将 Generator 写法中的自动执行函数该在语言层面提供，不暴露给用户，因此代码量最少，如果使用 Generator，自动执行器需要用户提供（自己写或引入第三方）
- async 结合 await 可以并发执行，顺序输出
- 异步遍历器：前面的 Iterator 的 next 方法隐含着一个规定：必须是同步的，对于异步的解决方案是 Generator 函数里的异步操作返回一个 Thunk 函数或 Promise 对象，即 value 属性是一个 Thunk 函数或 Promise 对象，等待以后返回真正的值，而 done 属性还是同步产生的，有一个提案就是异步操作提供原生的遍历器接口，即 value 和 done 这两个属性都是异步产生，这成为异步遍历器
- 异步遍历器最大的特点是调用 next 方法返回的是一个 Promise 对象,同步遍历器接口部署在 Symbol.iterator 上，同样的异步遍历器部署在 Symbol.asyncIterator 属性上面，不管什么对象，只有他的 Symbol.asyncIterator 属性有值，就表示应该对他进行异步遍历
- for...of 用于遍历同步的 Iterator 接口，新引入的 for await...of 循环则用于遍历异步的 Iterator 接口
- 就像 Generator 函数返回一个同步遍历器对象一样，异步 Generator 函数的作用是返回一个异步遍历器对象，语法上就是 Generator 函数就是 async 函数与 Generator 函数的结合,异步遍历器的设计目的之一就是使用 Generator 函数处理同步操作和异步操作能够使用同一套接口,异步 Generator 可以同时使用 await 和 yield，可以理解为，await 吗，命令将外部操作产生的值输入函数内部，yield 命令将函数内部的值输出
- 异步 Generator 出现以后，javascript 就有了 4 种函数形式：普通函数，async 函数，Generator 函数和异步 Generator 函数，基本上，如果是一系列按照顺序执行的异步操作，比如读取文件写入内容，可以使用 async 函数，如果是一系列产生相同数据结构的异步操作，比如一行一行读取数据，可以使用异步 Generator 函数
- 普通的 async 函数自带执行器，返回一个 Promise 对象，而异步 Generator 返回一个异步 Iterator，通过 await for···of 执行，或自己编写执行器，两者都是对异步操作的封装
- `yield*`语句也可以与一个异步遍历器一同使用，`for await···of`循环会展开 yield\*
- **异步 Generator 函数这一块第一遍看有点点迷**

## Class 基本语法

- javascript 语言的传统方法是通过构造函数定义并生成对象的，这与传统语言写法差异很大，es6 提供了更接近传统语言写法，引入了类这个概念作为对象的模板，通过 class 关键字可以定义类，class 可以看做语法糖，他的大多数功能用 es5 都可以实现，新的写法只是让对象原型的写法更加清晰,更像面向对象的写法而已,es6 的类完全可以看作构造函数的另一种写法，typeof 为 function,prototype 对象的 constructor 属性指向类本身，这与 es5 行为一致，**类的所有方法（除了 construct）都定义在 prototype 对象上**，调用类的方法就是调用原型的方法，Object.assign 方法可以很方便的一次向类添加多个方法，类内部定义的方法都是不可枚举的,这与 es5 不同，类的属性名可以采用表达式
- 类和模块的内部默认采用严格模式，所以不需要使用use strict指定运行模式，只要将代码写在类或模块中，那么就有严格模式可用，考虑到未来所有的代码其实都是运行在模块之中，所以es6实际上已经把整个语言都升级到了严格模式下
- construct默认返回实例对象，但也可以指定返回另一个对象，类必需使用new来调用。这是他跟普通构造函数的一个主要区别后者不用new也可执行
- 实例属性除非显示定义在其本身，否则都是定义在原型（即class上），所有实例都共享一个原型对象
- 与函数一样，class也可以使用表达式定义
- 类不存在变量提升，因为有继承，必须保证子类在父类后面定义，私有方法es6不提供，只能通过变通的方法来模拟实现，标记，移出模块或使用Symbol
- es6也不支持私有属性，目前有一个提案为class加了私有属性，方法是在属性名前使用#表示
- 类的方法内部如果有this，他将默认指向类的实例，但是必须非常小心，一旦单独使用该方法，很有可能报错
- 本质上，由于es6的类只是es
- 的构造函数的一层包装，所以函数许多特性都被Class继承，包括name属性
- 与es一样，可以使用get，set拦截属性的存取行为,存值取值函数是设置在属性的Descriptor对象上的,这与es5完全一致
- 某个方法前加上*就表示该方法是一个Generator函数
- class中的静态方法不会被实例继承，而是直接通过类调用，成为静态方法,可以被子类继承,也可以在子类的静态方法中从super对象上调用
- 静态属性是指class本身的属性，即class.propname,而不是定义在实例对象（this）上的属性，es6规定class内部只有静态方法没有静态属性，但目前有关于静态属性的提案，其中对实例属性和静态属性都规定了新的写法
- class的实例属性可以用等式写入类的定义中
- new.target属性用于确定构造函数是怎么调用的，返回new命令所作用的构造函数，如果构造函数不是通过new命令的调用的，那么new.target会返回undefined,类的内部调用返回当前class，子类继承父类会返回子类，利用这个特点可以写出不能独立使用而必须继承后才能使用的类

## Class的继承