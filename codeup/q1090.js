// 시작 값(a), 등비의 값(r), 몇 번째 인지를 나타내는 정수(n)가
// 공백을 두고 입력된다.(모두 0 ~ 10)
// n번째 수를 출력한다.

let start = +prompt('enter starting number');
let ratio = +prompt('enter ratio');
let index = +prompt('enter index number') - 1;

while( index > 0) {
  start = start * ratio;
  index--;
}

console.log(start);