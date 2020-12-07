// 점수(정수, 0 ~ 100)를 입력받아 평가를 출력해보자.


// 평가 기준
// 점수 범위 : 평가
//  90 ~ 100 : A
//  70 ~   89 : B
//  40 ~   69 : C
//    0 ~   39 : D
// 로 평가되어야 한다.

let score = +(prompt('enter score'));

if (score >= 90 && score <= 100) console.log('A');
else if (score >= 70 && score <= 89) console.log('B');
else if (score >= 40 && score <= 69) console.log('C');
else if (score >= 0 && score <= 39) console.log('D');
else console.log('Invalid Input')