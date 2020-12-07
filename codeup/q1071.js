// 0이 아니면 입력된 정수를 출력하고, 0이 입력되면 출력을 중단해보자.
// while( ), for( ), do~while( ) 등의 반복문을 사용할 수 없다.

let score;
while (score !== 0) {
  console.log(score);
  score = +(prompt('enter score'));
}
