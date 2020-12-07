// 월 : 계절 이름
// 12, 1, 2 : winter
//   3, 4, 5 : spring
//   6, 7, 8 : summer
//   9, 10, 11 : fall

// 참고
// swtich( ).. case ... break; 제어문에서
// break;를 제거하면 멈추지 않고 다음 명령이 실행되는 특성을 이용할 수 있다.

let month = prompt('Enter month');
let season;
switch (month) {
  case '1': '2': '12': season = 'winter';
    break;
  case '3': '4': '5': season = 'spring';
    break;
  case '6': '7': '8': season = 'summer';
    break;
  case '9': '10': '11': season = 'fall';
    break;
  default: season = 'N/A';
}

console.log(season);