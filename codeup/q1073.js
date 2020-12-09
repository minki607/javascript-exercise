// 정수 1개가 입력된다.
// (1 ~ 100)
// 1씩 줄이면서 한 줄에 하나씩 0이 될 때까지 출력한다. ()

let number;
while (number !== 0) {
  console.log(number);
  number = +(prompt('enter number'));
}
