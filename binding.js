function foo() {
  console.log(this.a);
}

var obj = {
  a: 2,
  foo: foo
};

obj.foo();

var bar = obj.foo;

var a = "oops, global";

bar();

function doFn(fn) {
  fn();
}

doFn(obj.foo);

obj.foo.call(obj);

var bar = function () {
  foo.call(obj);
}

bar();
setTimeout(bar, 100);

var obj2 = {
  a: 3
};

bar.call(obj2);

function foo2(something) {
  console.log(this.a, something);
  return this.a + something;
}

function bind(fn, obj) {
  return function() {
    return fn.apply(obj, arguments);
  };
}

var obj = { a: 2 };

var bar = bind(foo, obj);

var b = bar(3);

console.log(b);
