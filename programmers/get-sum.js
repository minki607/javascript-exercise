https://programmers.co.kr/learn/courses/30/lessons/68644

function solution(numbers) {
  const answer = [];
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (j === i) continue;
      answer.push(numbers[i] + numbers[j]);
    }
  }
  const sorted = answer.sort((a, b) => a - b);
  return sorted.filter((val, index) => sorted.indexOf(val) === index);
}

console.log(solution([5, 0, 7]));
