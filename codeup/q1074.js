// 정수(1 ~ 100) 1개가 입력되었을 때 카운트다운을 출력해보자.
// 1씩 줄이면서 한 줄에 하나씩 0이 될 때까지 출력

let number = +(prompt('enter number between 1~100'));
if (number >= 1 && number <= 100) {
  while (number > 0) {
    number--; 
    console.log(number);
  }
}