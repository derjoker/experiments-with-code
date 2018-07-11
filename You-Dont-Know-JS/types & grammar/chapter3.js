// Boxing

var a = new Boolean(false);
var b = Object(false);
var c = Boolean(false);
console.log(a, b, c);
console.log(Boolean(a), Boolean(b), Boolean(c));

if (!a) console.log("a is falsy.");
else console.log("a is truthy!");

if (!b) console.log("b is falsy.");
else console.log("b is truthy!");

if (!c) console.log("c is falsy.");
else console.log("c is truthy!");

// Unboxing

console.log(a.valueOf());
console.log(b.valueOf());
console.log(c.valueOf());

// Array

var a = [1, 2, 3];
var b = new Array(1, 2, 3);
var c = Array(1, 2, 3);
console.log(a, b, c);

var d = new Array(3);
var e = Array(3);
var f = [];
f.length = 3;
var g = [undefined, undefined, undefined];
console.log(d, e, f, g);

d.map((v, i) => {
  console.log(v, i); // no logs, nothing...
});

f.map((v, i) => {
  console.log(v, i); // no logs, nothing...
});

g.map((v, i) => {
  console.log(v, i); // undefined 0, undefined 1, undefined 2
});

var h = [1, , 3];
h.map((v, i) => {
  console.log(v, i); // 1 0, 3 2
});

// array-like

// function.apply(thisArg, [argsArray])
var a = Array.apply(null, { length: 3 }); // { length: 3 }, array-like
var b = Array.from({ length: 3 });
console.log(a, b);

// Date

console.log(new Date()); // date
console.log(Date()); // string

// Error

function foo(x) {
  if (!x) {
    var e = new Error("x wasn't provided");
    console.log(e);
    throw e;
  }
}

foo();

// Symbol

var a = Symbol("a");
console.log(a);

// `String.prototype.XYZ` is shortened to `String#XYZ`
