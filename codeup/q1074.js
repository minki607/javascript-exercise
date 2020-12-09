// 정수(1 ~ 100) 1개가 입력되었을 때 카운트다운을 출력해보자.

let number = +(prompt('enter number between 1~100'));
if (number >= 1 && number <= 100) {
  while (number > 0) {
    console.log(number);
    number--;
  }
}