function curry(f) {
  return function(arg1) {
    return f(arg1);
  }
}

function square(arg1) {
  return arg1 ** 2;
}

const squared = curry(square);
console.log(squared(3));