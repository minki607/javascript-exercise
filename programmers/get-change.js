// https://programmers.co.kr/learn/courses/30/lessons/82612?language=javascript

function solution(price, money, count) {
  let sum = 0;
  for (let i = 1; i <= count; i++) {
    sum += price * i;
  }
  const over = sum - money;
  return over > 0 ? over : 0;
}
