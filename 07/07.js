function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}

//尾递归

function factorial2(n, total) {
  if (n === 1) return total;
  return factorial(n - 1, n * total);
}

function Fibonacci(n) {
  if (n <= 1) return 1;
  return Fibonacci(n - 1) + Fibonacci(n - 1);
}

//尾递归
function Fibonacci2(n, ac1 = 1, ac2 = 2) {
  if (n <= 1) return ac2;
  return Fibonacci2(n - 1, ac2, ac1 + ac2);
}

function tailFactorial(n, total) {
  if (n == 1) return total;
  return tailFactorial(n - 1, n * total);
}

function factorial(n) {
  return tailFactorial(n, 1);
}

//柯里化
function currying(fn, n) {
  return function (m) {
    return fn.call(this, m, n);
  };
}

function tailFactorial(n, total) {
  if (n === 1) return total;
  return tailFactorial(n - 1, n * total);
}

const factorial = currying(tailFactorial, 1);

factorial(5);

//或者使用es6默认值

function factorial(n, total = 1) {
  if (n === 1) return total;
  return factorial(n - 1, n * total);
}
factorial(5);

//自己实现尾递归
function sum(x, y) {
  if (y > 0) {
    return sum(x + 1, y - 1);
  } else {
    return x;
  }
}

//蹦床函数
function trampoline(f) {
  while (f && f instanceof Function) {
    f = f();
  }
  return f;
}

function sum(x, y) {
  if (y > 0) {
    return sum.bind(null, x + 1, y - 1);
  } else {
    return x;
  }
}

//真正的尾递归优化
function foo(f) {
  var value;
  var active = false;
  var accumulated = [];

  return function accumulator() {
    accumulated.push(arguments);
    if (!active) {
      active = true;
      while (accumulated.length) {
        value = f.apply(this, accumulated.shift());
      }
      active = false;
      return value;
    }
  };
}

var sum = foo(function (x, y) {
  if (y > 0) {
    return sum(x + 1, y - 1);
  } else {
    return x;
  }
});
