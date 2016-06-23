function identify() {
  return this.name.toUpperCase();
}

function speak() {
  var greeting = "Hello, I'm " + identify.call(this);
  console.log(greeting);
}

var me = {
  name: "Kyle"
};

var you = {
  name: "Stephen"
};

console.log('identify.call(obj)');
console.log(identify.call(me));
console.log(identify.call(you));

console.log('speak.call(obj)');
speak.call(me);
speak.call(you);



function foo(num) {
  console.log("foo: " + num);

  this.count++;
}

foo.count = 0;

var i;

for (i = 0; i < 10; i++) {
  if (i > 5) {
    foo.call(foo, i);
  }
}

console.log(foo.count);
