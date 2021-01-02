let todos = [];
const $todos = document.querySelector('.todos');
const $inputTodo = document.querySelector('.input-todo');
const $markAll = document.getElementById('ck-complete-all');
const $clearDone = document.querySelector('.clear-completed > .btn');
const $activeTodo = document.querySelector('.active-todos');

const renderList = () => {
  /* eslint-disable */
  $todos.innerHTML = todos.map(({id, content, completed}) => {
    return `<li id="${id}" class="todo-item">
    <input id="ck-${id}" class="checkbox" type="checkbox" ${completed ? 'checked' : ''}>
    <label for="ck-${id}" class="${completed ? 'done' : ''}">${content}</label>
    <i class="remove-todo far fa-times-circle"></i>
    </li>`
  }).join('');

  const completed = todos.filter(todo => todo.completed === true);
  $clearDone.innerText = `Clear completed (${completed.length})`;
  $activeTodo.innerText = todos.length - completed.length;
}

const fetchList = () => {
  // 서버에서 todo 데이터 가져온다고 가정
  todos = [
    { id: 3, content: 'HTML', completed: true },
    { id: 2, content: 'CSS', completed: true },
    { id: 1, content: 'JavaScript', completed: false }
  ];
  renderList();
}

const generateID = () => {
  return Math.max(...todos.map(todo => todo.id)) + 1;
}

const addTodo = (newContent) => {
  todos = [{id: generateID(), content: newContent, completed: false}, ...todos]
  renderList();
}

const deleteTodo = (targetID) => {
  todos = todos.filter(todo => +targetID !== todo.id)
  renderList();
};

const toggleTodo = (tagetID) => {
  todos = todos.map(todo => +tagetID === todo.id ? { ...todo, completed: !todo.completed} : todo)
  renderList();
}

const toggleAll = (status) => {
  todos = todos.map(todo => ({...todo, completed: status }))
  renderList();
}

const clearCompleted = () => {
  todos = todos.filter(todo => todo.completed === false );
  renderList();
}

document.addEventListener('DOMContentLoaded', fetchList);

$inputTodo.onkeypress = e => {
  if (e.key !== 'Enter' || e.target.value === '') return;
  $markAll.checked = false;
  addTodo($inputTodo.value);
  $inputTodo.value = '';
}

$todos.onclick = e => {
  if (!e.target.classList.contains('remove-todo')) return;
  deleteTodo(e.target.parentNode.id)
}

$todos.onchange = e => {
  $markAll.checked = false;
  toggleTodo(e.target.parentNode.id);
}

$markAll.onchange = e => {
  toggleAll(e.target.checked);
}

$clearDone.onclick = e => {
  clearCompleted();
}
