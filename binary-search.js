function binarySearch(array, target) {
  let start = 0;
  let end = array.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (target === array[mid]) return mid;
    if ((target > array[mid])) start = mid + 1;
    else end = mid - 1;
  }
  return -1;
}

console.log(binarySearch([1], 1)); // 0
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7], 7)); // 2
console.log(binarySearch([1, 2, 3, 4, 5, 6], 5)); // 4
console.log(binarySearch([1, 2, 3, 4, 5, 6], 6)); // 5
console.log(binarySearch([1, 2, 3, 4, 5, 6], -1)); // -1
console.log(binarySearch([1, 2, 3, 4, 5, 6], 0)); // -1
console.log(binarySearch([1, 2, 3, 4, 5, 6], 7)); // -1
