var Task = {
  setID: function (ID) { this.id = ID; },
  outputID: function () { console.log(this.id); }
}

var XYZ = Object.create(Task);

XYZ.prepareTask = function (ID, Label) {
  this.setID(ID);
  this.label = Label;
};

XYZ.outputTaskDetails = function () {
  this.outputID();
  console.log(this.label);
};

XYZ.prepareTask('1', 'Read Scriptures');

XYZ.outputTaskDetails();


//OO style:
function Foo(who) {
  this.me = who;
}
Foo.prototype.identify = function () {
  return "I am " + this.me;
}

function Bar(who) {
  Foo.call(this, who);
}
Bar.prototype = Object.create(Foo.prototype);

Bar.prototype.speak = function () {
  console.log("Hello, " + this.identify() + ".");
};

var b1 = new Bar("b1");
var b2 = new Bar("b2");

b1.speak();
b2.speak();

//OLOO
var OlooFoo = {
  init: function (who) {
    this.me = who;
  },
  identify: function () {
    return "I am " + this.me;
  }
};

var OlooBar = Object.create(OlooFoo);

OlooBar.speak = function () {
  console.log("Hello, " + this.identify() + ".");
};

var o1 = Object.create(OlooBar);
o1.init("o1");
var o2 = Object.create(OlooBar);
o2.init("b2");

o1.speak();
o2.speak();
