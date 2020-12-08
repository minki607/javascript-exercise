const obj = {};
const parent = { x: 1 };

console.log(Object.getPrototypeOf(obj));
console.log(Object.setPrototypeOf(obj, parent));

console.log(obj.x);

function Circle(radius) {
  this.radius = radius;
}

const circle = new Circle(5);
console.log(circle);
console.log(Circle.hasOwnProperty('prototype'));