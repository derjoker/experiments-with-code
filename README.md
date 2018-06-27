# ydkjs-code

Code example / experiment (You Don't Know JS).

## 猜想

- `Object.create` -> `__proto__` vs. `new` -> `prototype`
- `foo.__proto__ === Foo.prototype`

```js
function Foo() {}
var foo = new Foo();
console.log(foo.__proto__ === Foo.prototype); // true
```
