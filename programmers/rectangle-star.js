// https://programmers.co.kr/learn/courses/30/lessons/12969

function solution(n, m) {
  const row = "*".repeat(n) + "\n";
  const answer = row.repeat(m);
  return answer;
}

// 프로그래머스에서 통과되려면 자바스크립트 표준 입출력 사용
