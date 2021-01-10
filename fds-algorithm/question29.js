// 오늘을 기준으로 YYYY-MM-DD 형식의 문자열을 요소로 갖는 배열로 일주일 간의 날짜를 구하는 함수를 완성하라. 
// 단, 함수가 반환하는 배열은 일요일부터 시작해서 토요일까지 구성한다.

function getCurrentWeek() {
  const WEEK = 7;
  const dateArr = [];
  let start = new Date();
  start.setDate(start.getDate() - new Date().getDay());
  for (let i = 0; i < WEEK; i++) {
    dateArr.push(start.toISOString().split('T')[0]);
    start.setDate(start.getDate() + 1);
  }
  return dateArr;
}

console.log(getCurrentWeek());
/*
오늘이 2020-04-21인 경우,
[
  '2020-04-19', 0
  '2020-04-20', 1
  '2020-04-21', 2
  '2020-04-22', 3
  '2020-04-23', 4
  '2020-04-24', 5
  '2020-04-25'  6
]
*/