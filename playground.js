function addname(value, obj) {
  obj.name = 'aang';
  return obj;
}

var person = {
  name: 'before',
  age: '28'
};

console.log(person);
var copy = addname('min', person);
console.log(copy);
console.log(person);

