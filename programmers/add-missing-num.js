// https://programmers.co.kr/learn/courses/30/lessons/86051?language=javascript

// 내 풀이

function solution(numbers) {
  const answer = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (let i = 0; i < numbers.length; i++) {
    answer[numbers[i]] = 0;
  }
  return answer.reduce((acc, cum) => acc + cum, 0);
}

// 기억에 남는 다른 사람 풀이

function solution(numbers) {
  return 45 - numbers.reduce((cur, acc) => cur + acc, 0);
}

// 전체 합으로만 계산하면 따로 배열을 allocate해줄 필요가없음
