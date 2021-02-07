// import ajax from './xhr.js'; (콜백함수만을 사용한 방법)
// import ajax from './promise.js'; (Promise를 사용한 방법)

// State
let todos = [];
let navState = 'all';

// DOMs
const $todos = document.querySelector('.todos');
const $inputTodo = document.querySelector('.input-todo');
const $completeAll = document.querySelector('.complete-all > .checkbox');
const $completedTodos = document.querySelector('.completed-todos');
const $activeTodos = document.querySelector('.active-todos');
const $clearCompleted = document.querySelector('.clear-completed > .btn');
const $nav = document.querySelector('.nav');

const render = () => {
  let html = '';

  const _todos = todos.filter(({ completed }) => (navState === 'completed' ? completed : navState === 'active' ? !completed : true));

  _todos.forEach(({ id, content, completed }) => {
    html += `<li id="${id}" class="todo-item">
        <input id="ck-${id}" class="checkbox" type="checkbox" ${completed ? 'checked' : ''}>
        <label for="ck-${id}">${content}</label>
        <i class="remove-todo far fa-times-circle"></i>
      </li>`;
  });

  $todos.innerHTML = html;
  $completedTodos.textContent = todos.filter(({ completed }) => completed).length;
  $activeTodos.textContent = todos.filter(({ completed }) => !completed).length;
};

const updateTodos = _todos => {
  todos = _todos;
  render();
};

const getTodos = () => {
  // ajax.get('/todos').then(updateTodos).catch(console.error);
  fetch('/todos').then(res => res.json()).then(updateTodos).catch(console.error);
};

// Generate ID by finding max and adding 1
const generateId = () => (todos.length ? Math.max(...todos.map(todo => todo.id)) + 1 : 1);
// Request
const request = (method, payload) => ({
  method,
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(payload),
});

const addTodo = content => {
  // ajax.post('/todos', { id: generateId(), content, completed: false }).then(updateTodos).catch(console.error);
  fetch('/todos', request('POST', { id: generateId(), content, completed: false }))
    .then(res => res.json()).then(updateTodos).catch(console.error);
};

const toggleTodo = id => {
  const { completed } = todos.find(todo => todo.id === +id);
  // ajax.patch(`/todos/${id}`, { completed }).then(updateTodos).catch(console.error);
  fetch(`/todos/${id}`, request('PATCH', { completed })).then(res => res.json()).then(updateTodos).catch(console.error);
};

const removeTodo = id => {
  // ajax.delete(`/todos/${id}`).then(updateTodos).catch(console.error);
  fetch(`/todos/${id}`, request('DELETE')).then(res => res.json()).then(updateTodos).catch(console.error);
};

const toggleCompleteAll = completed => {
  fetch('/todos', request('PATCH', { completed })).then(res => res.json()).then(updateTodos).catch(console.error);
};

const removeCompleted = () => {
  // ajax.delete('/todos/completed').then(updateTodos).catch(console.error);
  fetch('/todos/completed', request('DELETE')).then(res => res.json()).then(updateTodos).catch(console.error);
};

const changeNavState = id => {
  [...$nav.children].forEach($navItem => {
    $navItem.classList.toggle('active', $navItem.id === id);
  });

  navState = id;

  console.log('[changeNavState]', navState);
  render();
};

// Event bindings
window.onload = getTodos;

$inputTodo.onkeyup = ({ keyCode, target }) => {
  const content = target.value.trim();
  if (keyCode !== 13 || content === '') return;
  addTodo(content);
  target.value = '';
};

$todos.onchange = e => {
  toggleTodo(e.target.parentNode.id);
};

$todos.onclick = e => {
  if (!e.target.matches('.todos > li > .remove-todo')) return;
  removeTodo(e.target.parentNode.id);
};

$completeAll.onchange = e => {
  toggleCompleteAll(e.target.checked);
};

$clearCompleted.onclick = removeCompleted;

$nav.onclick = ({ target }) => {
  if (target === $nav) return;
  // if (!target.matches('.nav > li:not(.active)')) return;

  changeNavState(target.id);
};
