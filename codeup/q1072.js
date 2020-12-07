// 첫 줄에 정수의 개수 n이 입력되고,
// 두 번째 줄에 n개의 정수가 공백을 두고 입력된다.
// -2147483648 ~ +2147483647, 단 n의 최대 개수는 알 수 없다.

const repeat = +(prompt('enter total number of repeat'));

for (let i = 0; i < repeat; i++) {
  const number = +(prompt('enter number to print'));
  console.log(number);
}