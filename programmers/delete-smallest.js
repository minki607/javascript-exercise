/ /https://programmers.co.kr/learn/courses/30/lessons/12935

function solution(arr) {
  const min = Math.min(...arr);
  arr.splice(arr.indexOf(min), 1);
  return arr.length > 1 ? arr : [-1];
}