https://programmers.co.kr/learn/courses/30/lessons/12932

function solution(n) {
  return n.toString().split('').reverse().map(v => +v)
}