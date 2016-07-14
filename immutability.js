var myObject = {};

Object.defineProperty(myObject, "FAVORITE_NUMBER", {
  value: 42,
  writable: false,
  configurable: false
});

console.log(myObject);

myObject.FAVORITE_NUMBER = 33;

console.log(myObject);

Object.preventExtensions(myObject);

myObject.b = 3;

console.log(myObject.b);

//Object.seal makes calls preventExtensions and marks all values as configurable: false

//Object.freeze creates a calls Object.seal and marks all values as writable: false
