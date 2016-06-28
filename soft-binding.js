 if (!Function.prototype.softBind) {
  Function.prototype.softBind = function (obj) {
    var fn = this,
        curried = [].slice.call(arguments, 1),
        bound = function bound() {
          return fn.apply(
            (!this ||
              (typeof window !== 'undefined' &&
                this === window) ||
              (typeof global !== 'undefined' &&
                this === global)
            ) ? obj : this,
            curried.concat.apply(curried, arguments)
        );
      };
    bound.prototype = Object.create(fn.prototype);
    return bound
  };
}


function foo() {
   console.log('name: ' + this.name);
}

var obj = { name: 'obj' }, obj2 = { name: 'obj2' }, obj3 = { name: 'obj3' };

var fooObj = foo.softBind(obj);

fooObj();

obj2.foo = foo.softBind(obj);
obj2.foo();

fooObj.call(obj3);

setTimeout(obj2.foo, 20);
