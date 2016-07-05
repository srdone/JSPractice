var myObject = {};

Object.defineProperty(myObject, "a", {
  value: 2,
  writable: true,
  configurabel: true,
  enumerable: true
});

console.log(myObject.a); //2

Object.defineProperty(myObject, "b", {
  value: 2,
  writable: false,
  configurable: true,
  enumerable: true
});

myObject.b = 3;

console.log("not writeable", myObject.b);

Object.defineProperty(myObject, "c", {
  value: 2,
  writable: true,
  configurable: false,
  enumerable: true
});

console.log("before deletion", myObject.c);
delete myObject.c;
console.log("after deletion (can't be deleted)", myObject.c);
