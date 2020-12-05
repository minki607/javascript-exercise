// 입력된 세 정수 a, b, c 중 가장 작은 값을 출력하는 프로그램을 작성해보자.
// 단, 조건문을 사용하지 않고 3항 연산자 ? 를 사용한다..

let a = +(prompt('enter first number'));
let b = +(prompt('enter second number'));
let c = +(prompt('enter thrid number'));

let output = a < b ? (a < c ? a : c) : (b < c ? b : c);

console.log(output);
