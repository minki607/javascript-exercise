function binarySearch(array, target) {
  var start = 0;
  var end = array.length;
  while (array) {
    var mid = Math.floor((start + end) / 2);
    if (target === array[mid]) return mid;
    if ((target > array[mid])) start = mid + 1;
    if ((target < array[mid])) end = mid - 1;
    if ((end === mid) && target !== array[mid]) return -1;
  }
}

console.log(binarySearch([2, 1], 1)); // 0
console.log(binarySearch([1, 2, 3, 4, 5, 6], 3)); // 2
console.log(binarySearch([1, 2, 3, 4, 5, 6], 5)); // 4
console.log(binarySearch([1, 2, 3, 4, 5, 6], 6)); // 5
console.log(binarySearch([1, 2, 3, 4, 5, 6], -1)); // -1
console.log(binarySearch([1, 2, 3, 4, 5, 6], 0)); // -1
console.log(binarySearch([1, 2, 3, 4, 5, 6], 7)); // -1
