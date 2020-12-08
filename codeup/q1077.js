// 정수 1개가 입력된다.
// (0 ~ 100)
// 0부터 그 수까지 줄을 바꿔 한 개씩 출력한다.

let number = +(prompt('enter number between 1~100'));
if (number >= 1 && number <= 100) {
  for (let i = 0; i <= number; i++) {
    console.log(i);
  }
}