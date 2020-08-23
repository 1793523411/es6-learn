//不允许混入同名方法

import {excludes, traits,alias, as} from 'traits-decorator'

class TFoo{
    foo(){console.log('foo')}
}

const TBar = {
    bar(){console.log('bar')},
    foo(){console.log('foo')}
}

// @traits(TFoo,TBar)
// class MyClass{ }
// // Error: Method named: foo is defined twice.


// @traits(TFoo,TBar::excludes('foo'))
// class MyClass{ }


// @traits(TFoo,TBar::alias({foo:'aliasFoo'}))
// class MyClass{ }

// @traits(TExample::excludes('foo','bar')::alias({baz:'exampleBaz'}))
// class MyClass{}

// @traits(TExample::as({excludes:['foo','bar'],alias:{baz:'exampleBaz'}}))
// class MyClass{ }