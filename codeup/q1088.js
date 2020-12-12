// 정수 1개를 입력받는다.
// (1 ~ 100)
// 1부터 입력한 정수보다 작거나 같을 때까지 1씩 증가시켜 출력하되
// 3의 배수는 출력하지 않는다.

const number = +prompt('enter number between 1-100');

let res = '';
for (let i = 0; i < number; i++) {
  if (i % 3 === 0) continue;
  res += `${i} `;
}
console.log(res);
