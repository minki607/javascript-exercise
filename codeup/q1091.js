// 시작 값(a), 곱할 값(m), 더할 값(d), 몇 번째 인지를 나타내는 정수(n)가
// 공백을 두고 입력된다.(a, m, d는 -50 ~ +50, n은 10이하의 자연수)
// n번째 수를 출력한다.

let start = +prompt('enter starting number');
let multiply = +prompt('enter number to multiply');
let add = +prompt('enter number to add')
let index = +prompt('enter index to fetch') - 1;

while( index > 0) {
  start = start * multiply + add;
  index--;
}

console.log(start);