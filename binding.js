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
