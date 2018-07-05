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
