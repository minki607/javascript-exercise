// https://programmers.co.kr/learn/courses/30/lessons/12919

function solution(seoul) {
  var answer = '';
  for (let i = 0; i < seoul.length; i++) {
      if (seoul[i] === 'Kim') return `김서방은 ${i}에 있다`
  }
  return -1;
}