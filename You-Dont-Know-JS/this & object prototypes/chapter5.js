// Setting & Shadowing Properties

var obj1 = {
  b: "b1"
};

Object.defineProperties(obj1, {
  c: { value: "c1" }, // writable default false
  // c: { value: "c1", writable: false },
  d: {
    value: "d1",
    set d(val) {
      this._d_ = val;
    }
  }
});

var obj2 = Object.create(obj1);
// Object.create将obj1置于obj2的原型链`__proto__`之中
console.log(obj1, obj2);

obj2.a = "a2";
obj2.b = "b2";
obj2.c = "c2";
obj2.d = "d2";

for (let key of ["a", "b", "c", "d"]) {
  console.log(obj1[key], obj2[key], obj1[key] === obj2[key]);
}

obj1.a = "a3";
obj1.b = "b3";
obj1.c = "c3";
obj1.d = "d3";

for (let key of ["a", "b", "c", "d"]) {
  console.log(obj1[key], obj2[key], obj1[key] === obj2[key]);
}

Object.defineProperties(obj2, {
  c: { value: "c4" },
  d: { value: "d4" }
});

for (let key of ["a", "b", "c", "d"]) {
  console.log(obj1[key], obj2[key], obj1[key] === obj2[key]);
}

// obj2从obj1来(Object.create)，即obj1在obj2的原型链上
// 1. 操作obj1不会影响obj2，操作obj2不会影响obj1
// 2. 原型链上(obj1)出现`writable: false` (c)或者setter (d)，该`property`在obj1和obj2上都不能通过赋值`=`改变，但是可以通过defineProperty改变

// "Class"

function Foo() {}
var foo = new Foo();

console.log(Foo, foo);
console.log(Object.getPrototypeOf(foo) === Foo.prototype);
console.log(Foo.prototype.constructor === Foo);

console.log(Foo.constructor); // Function
console.log(foo.constructor); // Foo

// A -copy-> B, A <-link- B (delegate)
// 方向

function Bar() {}
console.log(Bar.prototype);
Bar.prototype = {
  b: "b",
  a: "a",
  r: "r"
};
var bar = new Bar();

console.log(Bar, bar);
console.log(Object.getPrototypeOf(bar));

console.log(Bar.constructor); // Function
console.log(bar.constructor); // Object

// "(Prototypal) Inheritance"

function Foo(name) {
  this.name = name;
}

Foo.prototype.myName = function() {
  return this.name;
};

function Bar(name, label) {
  Foo.call(this, name);
  this.label = label;
}

// Bar.prototype = Foo.prototype; // NO!!!
// Bar.prototype成了Foo.prototype的又一个引用/别称
// 任何在Bar.prototype上的更改实际发生在Foo.prototype上

Bar.prototype = Object.create(Foo.prototype); // YES!!!
// 将Foo.prototype置于Bar.prototype的原型链`__proto__`中
// 任何对Bar.prototype的更改并不会影响Foo.prototype
// 同时保留Bar.prototype通过原型链对Foo.prototype的引用

// Object.setPrototypeOf(Bar.prototype, Foo.prototype); // ES6+

console.log(Foo, Bar);

Bar.prototype.myLabel = function() {
  return this.label;
};

var bar = new Bar("bar", "label bar");
console.log(bar.myName());
console.log(bar.myLabel());

// Inspecting "Class" Relationships

function Foo() {}
var obj = {};
var Bar = Foo.bind(obj);

var foo = new Foo();

console.log(Foo, Bar);
console.log(Bar.prototype); // undefined

console.log(foo instanceof Foo);
console.log(foo instanceof Bar); // Bar.prototype is undefined -> Foo.prototype (original function)

console.log(Foo.isPrototypeOf(foo)); // false
console.log(Foo.prototype.isPrototypeOf(foo)); // true

console.log(Object.getPrototypeOf(foo) === Foo.prototype);
console.log(foo.__proto__ === Foo.prototype);
