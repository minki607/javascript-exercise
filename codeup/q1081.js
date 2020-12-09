// 나올 수 있는 주사위의 숫자를 한 세트씩 줄을 바꿔 모두 출력한다.
// 첫 번째 수는 n, 두 번째 수는 m으로 고정해 출력하도록 한다.

let n = +(prompt('enter n'));
let m = +(prompt('enter m'));
let res =''; 
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= m; j++) {
    res += `${i} ${j} \n`;
  }
}

console.log(res);