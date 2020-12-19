makeCounter = (base = 0) => fn => {
  base = fn(base);
  return base;
};

console.log(makeCounter()(x => x + '10'));