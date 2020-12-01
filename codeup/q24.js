// 합과 평균을 줄을 바꿔 출력한다.
// 평균은 소수점 이하 둘째 자리에서 반올림해서 소수점 이하 첫째 자리까지 출력한다

let number = +(prompt('enter first number'));
let number2 = +(prompt('enter second number'));
let number3 = +(prompt('enter third number'));

let sum = number + number2 + number3;
let avg = +(Math.round(sum / 3 + 'e+2') + 'e-2');
console.log(sum);
console.log(avg);
