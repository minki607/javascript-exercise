// https://programmers.co.kr/learn/courses/30/lessons/12954

function solution(x, n) {
  return new Array(n).fill(0).map((_, index) => x * (index + 1));
}
