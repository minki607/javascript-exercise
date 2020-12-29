// nextSquare함수는 정수를 인수로 전달받는다. n이 임의의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, 
// n이 임의의 정수 x의 제곱이 아니라면 ‘no’를 리턴하는 함수를 작성하라.

// 예를 들어, n이 121이라면 이는 정수 11의 제곱이므로 (11+1)의 제곱인 144를 리턴하고, 3이라면 ‘no’을 리턴한다.


function nextSquare(n) {
  for (let i = 0; i <= n; i++) {
    if (Math.sqrt(n) === i) return (i + 1) ** 2;
  }
  return 'no';
}

console.log(nextSquare());    // no
console.log(nextSquare(0));   // 1
console.log(nextSquare(1));   // 4
console.log(nextSquare(2));   // no
console.log(nextSquare(3));   // no
console.log(nextSquare(121)); // 144
console.log(nextSquare(165)); // no
console.log(nextSquare(400)); // 441

