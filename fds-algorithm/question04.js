// 4. 문자열 내 p와 y의 개수
// numPY함수는 대문자와 소문자가 섞여있는 문자열 s를 인수로 전달받는다. s에 존재하는 ‘p’의 개수와 ‘y’의 갯수를 비교해 같으면 true, 
// 다르면 false를 리턴하도록 함수를 완성하라. 대소문자를 구별하지 않으며 ‘p’, ‘y’ 모두 하나도 없는 경우는 항상 true를 리턴한다.

// 예를 들어 s가 ‘pPoooyY’면 true를 리턴하고 ‘Pyy’라면 false를 리턴한다.

function numPY(s) {
  let pcount = 0;
  let lcount = 0;
  if (s) {
    for (let i = 0; i < s.length; i++) {
      if (s[i] === 'p' || s[i] === 'P') pcount++;
      else if (s[i] === 'y' || s[i] === 'Y') lcount++;
    }
    if (pcount === lcount) return true; // 카운트 수가 같다면 true
    return false; // 카운트 수가 같지 않다면 false
  }
  return true; // 인수가 전달되지 않았을경우 true
}

console.log(numPY('pPoooyY')); // true
console.log(numPY('Pyy'));     // false
console.log(numPY('ab'));      // true
console.log(numPY(''));        // true
console.log(numPY());          // true