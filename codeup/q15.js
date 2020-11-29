// 입력받은 연, 월, 일을 yyyy.mm.dd 형식으로 출력한다.
// (%02d를 사용하면 2칸을 사용해 출력하는데, 한 자리 수인 경우 앞에 0을 붙여 출력한다.)

var year = prompt('enter year');
var month = prompt('enter month');
var day = prompt('enter day');

day = day.length < 1 ? day : '0' + day;

console.log(`${year}.${month}.${day}`);
