// 10 보다 작은 정수 1개가 입력된다.
// (1 ~ 9)

// 1 부터 그 수까지 순서대로 공백을 두고 수를 출력하는데,
// 3 또는 6 또는 9인 경우 그 수 대신 영문 대문자 X 를 출력한다.

let number = +prompt('enter number between 1~9')

let res = '';
if (number >= 1 && number <= 9) {
  for (let i = 1; i <= number; i++) {
    if (!(i % 3)) res += 'X ';
    else {
      res += i;
      res += ' ';
    }
  }
}

console.log(res);
