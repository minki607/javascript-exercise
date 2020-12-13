// https://programmers.co.kr/learn/courses/30/lessons/12903

function solution(s) {
  const len = s.length;
  let index;
  if (len % 2 === 0) {
    index = Math.floor(len / 2);
    return (s[index - 1] + s[index]);
  }
  index = Math.floor(len / 2);
  return s[index];
}

console.log(solution('abcde'));
console.log(solution('qwer'));