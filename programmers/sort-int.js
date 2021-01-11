// https://programmers.co.kr/learn/courses/30/lessons/12933

function solution(n) {
  return +Array.from(n.toString()).sort((a, b) => b - a).join('');
}
