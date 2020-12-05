// 입력된 정수에 대해
// 첫 줄에 minus 나 plus 를 출력하고,
// 두 번째 줄에 odd 나 even 을 출력한다.

let a = +(prompt('enter second number'));

if (a > 0) console.log('plus');
else console.log('minus')

if (a % 2 === 0) console.log('even');
else console.log('odd');
