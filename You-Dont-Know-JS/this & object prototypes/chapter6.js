// Class Design

function Foo(who) {
  this.me = who;
}
Foo.prototype.identify = function() {
  return "I am " + this.me;
};

var f = new Foo("f");
console.log(f.identify());

function Bar(who) {
  Foo.call(this, who);
}
Bar.prototype = Object.create(Foo.prototype);
Bar.prototype.speak = function() {
  return "Hello, " + this.identify() + ".";
};

var b1 = new Bar("b1");
var b2 = new Bar("b2");

console.log(b1, b1.speak());
console.log(b2, b2.speak());

// ES6

class Foo {
  constructor(who) {
    this.me = who;
  }
  identify() {
    return "I am " + this.me;
  }
}

var f = new Foo("f");
console.log(f.identify());

class Bar extends Foo {
  speak() {
    return "Hello, " + this.identify() + ".";
  }
}

var b1 = new Bar("b1");
var b2 = new Bar("b2");

console.log(b1, b1.speak());
console.log(b2, b2.speak());

// Delegation Design

var Foo = {
  init: function(who) {
    this.me = who;
  },
  identify: function() {
    return "I am " + this.me;
  }
};

var Bar = Object.create(Foo);

Bar.speak = function() {
  return "Hello, " + this.identify() + ".";
};

var b1 = Object.create(Bar);
b1.init("b1");
var b2 = Object.create(Bar);
b2.init("b2");

console.log(b1, b1.speak());
console.log(b2, b2.speak());
