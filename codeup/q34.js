// 1 또는 0의 값만 가지는 2개의 정수가 공백을 두고 입력된다.
// 참/거짓이 서로 같을 때에만 1을 출력하고, 그 외의 경우에는 0을 출력한다.

let number1 = +(prompt('enter first number'));
let number2 = +(prompt('enter second number'));

if ((!number1 && !number2) || (number1 && number2)) console.log(1);
else console.log(0);