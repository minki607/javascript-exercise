// # 1 html 생성

const todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function render() {
  let html = '';

  todos.forEach(todo => {
    html += `<li id=${todo.id}>\n  <label><input type="checkbox"${todo.completed ? ' checked' : ''}>${todo.content}</label>\n</li>\n`;
  });

  return html;
}

console.log(render());
/*
<li id="3">
  <label><input type="checkbox">HTML</label>
</li>
<li id="2">
  <label><input type="checkbox" checked>CSS</label>
</li>
<li id="1">
  <label><input type="checkbox">Javascript</label>
</li>
*/

// #2 특정 프로퍼티 값 추출
// 요소의 프로퍼티(id, content, completed)를 문자열 인수로 전달하면 todos의 각 요소 중, 해당 프로퍼티의 값만을 추출한 배열을 반환하는 함수를 작성하라.
// 단, for 문이나 Array#forEach는 사용하지 않도록 하자.

function getValues(key) {
  return todos.map((val, i) => val[key])
}

console.log(getValues('id')); // [3, 2, 1]
console.log(getValues('content')); // ['HTML', 'CSS', 'Javascript']
console.log(getValues('completed')); // [false, true, false]

// #3  프로퍼티 정렬

// 요소의 프로퍼티(id, content, completed)를 문자열 인수로 전달하면 todos의 요소를 정렬하는 함수를 작성하라.
// 단, todos는 변경되지 않도록 하자.
// 참고: Array.prototype.sort

function sortBy(keys) {
  const copy = Array.from(todos);
  copy.sort((a, b) => (a[keys] < b[keys] ? -1 : (b[keys] > a[keys] ? 1 : 0)));
  return copy;
}
// console.log(sortBy('id'));
console.log(sortBy('content'));
// console.log(sortBy('completed'));

// 4. 새로운 요소 추가
// 새로운 요소(예를 들어 { id: 4, content: 'Test', completed: false })
// 를 인수로 전달하면 todos의 선두에 새로운 요소를 추가하는 함수를 작성하라.
// 단, Array#unshift나 Array#push는 사용하지 않도록 하자.

function addTodo(newTodo) {
  todos.splice(0, 0, newTodo);
  return todos;
}

addTodo({ id: 4, content: 'Test', completed: false });

console.log(todos);
/*
[
  { id: 4, content: 'Test', completed: false },
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
]
*/

// 5. 특정 요소 삭제
// todos에서 삭제할 요소의 id를 인수로 전달하면 해당 요소를 삭제하는 함수를 작성하라.

let todos5 = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function removeTodo(id) {
  todos5 = todos5.filter(value => value['id'] !== id);
}

removeTodo(2);

console.log(todos5);
/*
[
  { id: 3, content: 'HTML', completed: false },
  { id: 1, content: 'Javascript', completed: false }
]
*/

// 6. 특정 요소의 프로퍼티 값 반전
// todos에서 대상 요소의 id를 인수로 전달하면 해당 요소의 completed 프로퍼티 값을 반전하는 함수를 작성하라.

// hint) 기존 객체의 특정 프로퍼티를 변경/추가하여 새로운 객체를 생성하려면 Object.assign 또는 스프레드 문법을 사용한다.

let todos6 = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function toggleCompletedById(id) {
  todos6.forEach((val)=> {
    if(val['id'] === id) val.completed = !val.completed;
  });
}

toggleCompletedById(2);

console.log(todos6);
/*
[
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: false },
  { id: 1, content: 'Javascript', completed: false }
]
*/

// 7. 모든 요소의 completed 프로퍼티 값을 true로 설정
// todos의 모든 요소의 completed 프로퍼티 값을 true로 설정하는 함수를 작성하라.

// hint) 기존 객체의 특정 프로퍼티를 변경/추가하여 새로운 객체를 생성하려면 Object.assign 또는 스프레드 문법을 사용한다.

let todos7 = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function toggleCompletedAll() {
  todos7.forEach(val => {
    if (val.completed === false) val.completed = !val.completed;
  });
}

toggleCompletedAll();

console.log(todos7);
/*
[
  { id: 3, content: 'HTML', completed: true },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: true }
]
*/

// 8. completed 프로퍼티의 값이 true인 요소의 갯수 구하기
// todos에서 완료(completed: true)한 할일의 갯수를 구하는 함수를 작성하라.

// 단, for 문, Array#forEach는 사용하지 않도록 하자.

let todos8 = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];
console.log(todos8);
function countCompletedTodos() {
  const count = todos8.reduce((acc, cur) => (cur.completed ? acc + 1 : acc), 0);
  return count;
}

// console.log(countCompletedTodos()); // 1

// 9. id 프로퍼티의 값 중에서 최대값 구하기
// todos의 id 프로퍼티의 값 중에서 최대값을 구하는 함수를 작성하라.
// 단, for 문, Array#forEach는 사용하지 않도록 하자.

let todos9 = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function getMaxId() {
  const max = todos9.reduce((acc, cur) => (cur.id > acc ? cur.id : acc), 0);
  return max;
}

console.log(getMaxId()); // 3