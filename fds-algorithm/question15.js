// 15. 직사각형이 되는 나머지 좌표 구하기
// 임의의 좌표 3개가 주어질 때 직사각형이 되는 나머지 1개의 좌표를 구하라. 예를 들어, [[1, 4], [3, 4], [3, 10]]가 주어지면 [1, 10]을 구한다.

// for 문은 사용하지 않도록 하자.

function getRestCoordinate(array) {
  const coords = array.flat();
  const counts = coords.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});
  // 카운트가 1인것만 배열로 뽑아내고 다시한번 맵해서 string 을 정수로 변환
  return Object.keys(counts).filter(count => counts[count] === 1).map(x => +x); 
}

console.log(getRestCoordinate([[1, 4], [3, 4], [3, 10]])); // [1, 10]