var index = 1;
console.log(index);
index++;

var a = {
  index: 1
};
console.log(a);
a.index++;

// shift

var a = [0, 1, 2, 3, 4];
var b = a.shift(); // shift 1 item
console.log(a, b); // [ 1, 2, 3, 4 ], 0
var c = a.splice(0, 2); // shift 2 items
console.log(a, c); // [ 3, 4 ], [ 1, 2 ]

// event loop 排到队尾
// job queue 插到队首
