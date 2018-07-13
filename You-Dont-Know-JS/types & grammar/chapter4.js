// Explicit

// toString

var a = [1, 2, 3];
console.log(a.toString());
console.log(JSON.stringify(a));

var b = { a: "a", b: "b" };
console.log(b.toString());
console.log(JSON.stringify(b));

var c = {
  a: undefined,
  b: null,
  c: Symbol("c"),
  d: function() {}
};
console.log(c.toString()); // [object Object]
console.log(JSON.stringify(c)); // {"b":null}

// toJSON

var d = {
  a: "a",
  b: "b",
  c: "c",
  toJSON: function() {
    return {
      a: this.a,
      b: this.b
    };
  }
};
console.log(JSON.stringify(d)); // {"a":"a","b":"b"}

// toNumber

var a = "11";
var b = "0b11";
var c = "0o11";
var d = "0x11";
console.log([a, b, c, d].map(v => Number(v)));

var a = {
  valueOf: function() {
    return "1";
  },
  toString: function() {
    return "2";
  }
};

var b = {
  toString: function() {
    return "2";
  }
};

console.log(Number(a), Number(b)); // 1 2
// 先valueOf，再toString

var a = new Boolean(false);
var b = new Number(0);
var c = new String("");
var d = a && b && c; // c
var e = Boolean(a && b && c);
console.log(a, b, c, d, e);

// truthy objects
console.log(Boolean(new Boolean(false))); // true
// falsy objects
console.log(Boolean(document.all)); // false
// 理论上，所有object都是truthy，出现falsy，都是浏览器的锅。

// falsy values
console.log(Boolean(undefined || null || false || 0 || +0 || -0 || NaN || "")); // false

var pi = "3.14";
var a = +pi; // 3.14
var b = -pi; // -3.14
console.log(a, b);

console.log(parseInt(Infinity, 10)); // NaN

console.log(Infinity.toString());
console.log(parseInt(Infinity, 19)); // 18
console.log(parseInt("i", 19)); // 18
// 以19为基，各位表示为0-9以及a-i

console.log(false.toString());
console.log(parseInt(false, 16)); // "fa" -> 250
console.log(parseInt("fa", 16)); // 250
console.log(parseInt("0xfa")); // 250

// Implicit

console.log([1, 2] + [3, 4]); // 1,23,4
console.log([1, 2] - [3, 4]); // NaN
console.log([1] - [3]); // -2

function onlyOne() {
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    if (arguments[i]) {
      sum += arguments[i];
    }
  }
  console.log(sum);
  return sum == 1;
}

console.log(onlyOne(true, false));
console.log(onlyOne(true, true, false));
console.log(onlyOne(true, false, NaN));
console.log(onlyOne({}, false, NaN)); // false

function onlyOne_explicit() {
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    sum += Number(!!arguments[i]);
  }
  console.log(sum);
  return sum == 1;
}

console.log(onlyOne_explicit(true, false));
console.log(onlyOne_explicit(true, true, false));
console.log(onlyOne_explicit(true, false, NaN));
console.log(onlyOne_explicit({}, false, NaN)); // true

var a = Symbol("a");
var b = {
  [a]: 1,
  b: 2
};
console.log(b, b[a], b[Symbol["a"]]);

var a = Object(null);
console.log(a, a.valueOf(), a.toString());
var b = Object(undefined);
console.log(b, b.valueOf(), b.toString());
var c = Object(NaN);
console.log(c, c.valueOf(), c.toString());

var a = [42];
var b = ["043"];
console.log(a < b); // false
console.log(42 < 043); // false, 043 = 35, 八进制
function f() {
  "use strict";
  // console.log(42 < 043); // strict mode, SyntaxError
  console.log(42 < 0o43); // false
}
f();
console.log("42" < "043"); // false, "4" > "0"
console.log(42 < "043"); // true, 42 < 43
