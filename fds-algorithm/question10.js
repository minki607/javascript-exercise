// 배열의 요소 중 최대값/최소값을 반환하는 함수를 완성하라.

function getMaxValueFromArray(array) {
  return array.reduce((acc, cur) => {
    if (acc > cur) return acc;
    return cur;
  });
}

console.log(getMaxValueFromArray([3, 6, -2, -5, 7, 3])); // 7

function getMinValueFromArray(array) {
  return array.reduce((acc, cur) => {
    if (acc < cur) return acc;
    return cur;
  });
}
console.log(getMinValueFromArray([3, 6, -2, -5, 7, 3])); // -5