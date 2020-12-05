function Person(name) {
  // this = {}
  console.log(this); // Person{}
  this.name = name;
  // 생성자 함수에 메서드는 축약표현으로 쓸수 없음
  this.sayHi = function () {
    console.log(`안녕? 나는 ${this.name}야`);
  };
}

const me = new Person('Lee');
console.log(me);