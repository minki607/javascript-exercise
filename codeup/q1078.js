// 정수 1개가 입력된다.
// (0 ~ 100)
// 1부터 입력된 수까지 짝수의 합을 출력한다.

let number = prompt('enter number');

if (number >= 0 && number <= 100) {
  let sum = 0;
  for (let i = 0; i <= number; i++) {
    if (i % 2 == 0) sum += i;
  }
  console.log(sum);
}
