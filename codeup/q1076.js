// 영문자 1개가 입력된다.
// (a ~ z)
// a부터 입력한 문자까지 순서대로 공백을 두고 출력한다.

const alphabet = prompt('enter alphabet (a-z)');

if (alphabet.charCodeAt(0) >= 97 && alphabet.charCodeAt(0) <= 122) {
  let index = alphabet.charCodeAt(0); 
  let diff = index - 97;
  while (diff > 0) {
    console.log(String.fromCharCode(index++));
    diff--;
  }
}