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

// obj2从obj1来(Object.create)，即obj1在obj2的原型链上
// 1. 操作obj1不会影响obj2，操作obj2不会影响obj1
// 2. 原型链上(obj1)出现`writable: false` (c)或者setter (d)，该`property`在obj1和obj2上都不能被改变/赋值
