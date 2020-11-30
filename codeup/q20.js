// 10진 정수 1개(0 ~ 255 범위)가 입력된다.
// 아스키코드 값을 문자로 출력한다.

let number = +(prompt('enter number (0~255)'));

if (number >= 0 && number <= 255) {
  console.log(String.fromCharCode(number));
} else {
  console.log('not in valid range');
}
