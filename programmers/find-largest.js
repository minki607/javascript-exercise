function solution(numbers) {
  const answer = numbers.map(value => value + '').sort((a,b) => (b + a) * 1 - (a + b) * 1).join('');
  return answer[0] === '0' ? '0' : answer;
}