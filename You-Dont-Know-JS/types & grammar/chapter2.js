// string

// delete -> empty slot
var a = [0, 1, 2];
delete a[1];
console.log(a, a.length);

var b = [0, , 2]; // sparse array
var c = [0, undefined, 2];
console.log(b[1] === c[1]);

// coercion: index "2" -> 2
var d = [0, 1, 2];
d["2"] = "2";
console.log(d, d.length, d["2"]);
d["10"] = "10";
console.log(d, d.length, d["10"]);

// key & value on array
var e = [0, 1, 2];
e["s"] = "s";
console.log(e, e["s"], e.s);
console.log(e.length);

// slice
var a = [0, 1, 2];
var b = a.slice();
a[0] = "0";
b[1] = "1";
console.log(a, b);

// string immutable
var s = "abc";
s[1] = "s";
console.log(s); // "abc", not "asc"

var r1 = Array.prototype.reverse.call(s); // TypeError: 0 is read-only
var r2 = s
  .split("") // ["a", "b", "c"]
  .reverse() // ["c", "b", "a"]
  .join(""); // "cba"

var complexS = "foo 𝌆 bar";
console.log(
  complexS
    .split("")
    .reverse()
    .join("")
); // "rab �� oof"

// number

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

console.log(Number.MAX_SAFE_INTEGER | 0); // -1
console.log(Math.pow(2, 52) | 0); // 0
console.log(Math.pow(2, 32) | 0); // 0
// 0 .. 31 (32位)
console.log((Math.pow(2, 31) + 1) | 0); // -2147483647
console.log(Math.pow(2, 31) | 0); // 0
console.log((Math.pow(2, 31) - 1) | 0); // 2147483647
console.log(Math.pow(2, 30) | 0); // 1073741824

// 31个1
console.log(0b1111111111111111111111111111111); // 2147483647

// NaN

console.log(isNaN(NaN)); // true
var a = "string";
console.log(isNaN(a)); // true, ehmm...
console.log(typeof a === "number" && isNaN(a)); // false
console.log(Number.isNaN(a)); // false

console.log(a !== a); // false
console.log(NaN !== NaN); // true

// Infinity

var a = 1 / 0; // Infinity
var b = 1 / a; // 0
var c = -1 / a; // -0
console.log(a, b, c);

console.log(b == c); // true
console.log(b === c); // true
console.log(Object.is(c, b)); // false
console.log(Object.is(c, -0)); // true
