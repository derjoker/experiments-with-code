# You-Dont-Know-JS

## 猜想

- `Object.create` -> `__proto__` vs. `new` -> `prototype`
- `foo.__proto__ === Foo.prototype`

```js
function Foo(who) {
  this.me = who;
}

Foo.prototype.identify = function() {
  return "I am " + this.me;
};

var foo = new Foo("foo");
console.log(Foo, foo);
console.log(Foo.prototype, foo.__proto__);
console.log(Foo.prototype === foo.__proto__); // true
```
