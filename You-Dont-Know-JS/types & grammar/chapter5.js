// eval

var a = "a";
eval("a = 'b'");
console.log(a); // b

// side-effects
var a = 42;
var b = a++;
var c = 42;
var d = ++c;
console.log(a, b, c, d); // 43, 42, 43, 43

// labelel statements

foo: for (var i = 0; i < 4; i++) {
  for (var j = 0; j < 4; j++) {
    if (j === i) {
      continue foo; // continue the loop labeled 'foo'
    }

    if ((j * i) % 2 === 1) {
      continue; // continue inner loop
    }
    console.log(i, j);
  }
}

for (var i = 0; i < 4; i++) {
  for (var j = 0; j < i; j++) {
    if ((j * i) % 2 === 1) {
      continue;
    }
    console.log(i, j);
  }
}

for (var i = 0; i < 4; i++) {
  // continue next line (inner loop)
  for (var j = 0; j < 4; j++) {
    if ((j * i) % 2 === 1) {
      continue;
    }
    console.log(i, j);
  }
}
// 0 0
// 0 1
// 0 2
// 0 3
// 1 0
// 1 2
// 2 0
// 2 1
// 2 2
// 2 3
// 3 0
// 3 2

for (var i = 0; i < 4; i++) {
  // break next loop (inner loop)
  for (var j = 0; j < 4; j++) {
    if ((j * i) % 2 === 1) {
      break;
    }
    console.log(i, j);
  }
}
// 0 0
// 0 1
// 0 2
// 0 3
// 1 0
// 2 0
// 2 1
// 2 2
// 2 3
// 3 0

// ES5
function foo(a) {
  a = 42;
  console.log(a, arguments[0]);
}
foo(2); // 42, 42 (居然不是2！！！)
foo(); // 42, undefined
foo(undefined); // 42, 42 (居然不是undefined！！！)
// somehow linked

function foo(a) {
  "use strict";
  a = 42;
  console.log(a, arguments[0]);
}
foo(2); // 2, 2 (是2)
foo(); // 42, undefined
foo(undefined); // 42, undefined (是undefined)
// not linked

// ES6
function foo(a = 42) {
  console.log(a, arguments[0]);
}
foo(2); // 2, 2 (是2)
foo(); // 42, undefined
foo(undefined); // 42, undefined (是undefined)

// try...catch...finally

for (var i = 0; i < 4; i++) {
  try {
    console.log("before");
    continue;
    console.log("after"); // never run
  } finally {
    console.log(i);
  }
}
// before 0 before 1 before 2 before 3

// switch

switch (4) {
  case 2:
    console.log(2);
  case 4:
    console.log(4);
  case 8:
    console.log(8);
  default:
    console.log("default");
}
// 没有2，但是后面的都有
// 4 8 default
// 需要break

var a = "42";
switch (true) {
  case a == 2:
    console.log("2 or '2'");
    break;
  case a == 42:
    console.log("42 or '42'");
    break;
  default:
    console.log("default");
}
