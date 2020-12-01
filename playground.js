function foo() {
  console.log(this);
}

// 메서드로서 호출
const obj = { foo }; // ES6 프로퍼티 축약 표현
console.log(obj.foo()); // obj