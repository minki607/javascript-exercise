// 빨녹파(r, g, b) 각 빛의 강약에 따른 가짓수(0 ~ 128))가 공백을 사이에 두고 입력된다.
// 예를 들어, 3 3 3 은 각 색깔 빛에 대해서 그 강약에 따라 0~2까지 3가지의 색이 있음을 의미한다.

// 만들 수 있는 rgb 색의 정보를 오름차순(계단을 올라가는 순, 12345... abcde..., 가나다라마...)으로
// 줄을 바꿔 모두 출력하고, 마지막에 그 개수를 출력한다.

let r = +prompt('enter R');
let g = +prompt('enter G');
let b = +prompt('enter B');

let count = 0;
for (let i = 0; i < r; i++) {
  for (let j = 0; j < g; j++) {
    for (let k =0; k < b; k++) {
      console.log(i,j,k);
      count++;
    }
  }
}
console.log(count);