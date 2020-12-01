// 영문자 1개가 입력된다.
// 다음 문자를 출력한다.

let string = prompt('enter string');
let output = string.charCodeAt(0) + 1;
console.log(String.fromCharCode(output));