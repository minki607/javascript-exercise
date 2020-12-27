function countEachElement(array) {
  const res = [];

  for (let i = 0; i < array.length; i++){
    let cnt = 0;

    for (let j = 0; j <array.length; j++) {
      if (i === array[j]) ++cnt;
    }
    res[i] = cnt;
  }
  return res;
}

const target = [3,1,3,6,6,1,1];
console.log(countEachElement(target);