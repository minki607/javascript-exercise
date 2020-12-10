//https://codeup.kr/problem.php?id=1085 문제 참조

const hertz = +prompt('enter hertz');
const bits = +prompt('enter bit');
const channel = +prompt('enter channel');
const second = +prompt('enter second');

const byte = (hertz * bits * channel * second)/8;
const outputMB = (byte / 1048576).toFixed(1) + ' MB';
console.log(outputMB);

