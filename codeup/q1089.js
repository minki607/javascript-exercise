// 시작 값(a), 등차의 값(d), 몇 번째 수 인지를 의미하는 정수(n)가
// 공백을 두고 입력된다.(모두 0 ~ 100)
// n번째 수를 출력한다.

let start = +prompt('enter starting number');
let difference = +prompt('enter difference');
let index = +prompt('enter index number') - 1;

while( index > 0) {
  start += difference;
  index--;
  
}

console.log(start);