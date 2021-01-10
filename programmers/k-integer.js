// k 번째 수 https://programmers.co.kr/learn/courses/30/lessons/42748

function solution(array, commands) {
  const answer = [];
  commands.forEach(command => {
    answer.push(array.slice(command[0] - 1, command[1]).sort((x, y) => x - y)[command[2] - 1])
  });
  return answer;
}

console.log(solution([1,5,2,6,3,7,4], [[2,5,3], [4,4,1], [1,7,3]]))