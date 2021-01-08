let todos = [];
const $todos = document.querySelector('.todos');
const $all = document.createDocumentFragment();
const $active = document.createDocumentFragment();
const $completed = document.createDocumentFragment();
const $inputTodo = document.querySelector('.input-todo');
const $nav = document.querySelector('.nav');
const $seeAll = document.getElementById('all');
const $markAll = document.getElementById('ck-complete-all');

// change multiple attributes
const setAttributes = (element, attributes) => {
  Object.keys(attributes).forEach(key => element.setAttribute(key, attributes[key]));
};

/* eslint-disable */
const renderList = (render = 'All') => {
  $todos.innerHTML = '';
  todos.forEach(({id, content, completed}) => {
    const $li = document.createElement('li');
    const $checkbox = document.createElement('input');
    const $label = document.createElement('label');
    const $removeBtn = document.createElement('i');

    setAttributes($li, {id , class: 'todo-item'});
    setAttributes($checkbox, {id: `ck-${id}`, type: 'checkbox', class: 'checkbox'});
    $checkbox.checked = completed;
    setAttributes($label, {for: `ck-${id}`, class: completed ? 'done' : ''});
    setAttributes($removeBtn, {class: 'remove-todo far fa-times-circle'})
    $label.textContent = content;

    $li.appendChild($checkbox);
    $li.appendChild($label);
    $li.appendChild($removeBtn);

    if (render === 'All') $all.appendChild($li);
    else if (render === 'Active') !completed ? $active.appendChild($li) : '';
    else if (render === 'Completed') completed ? $completed.appendChild($li) : '';
  });

  if (render === 'All') $todos.appendChild($all);
  else if (render === 'Active') $todos.appendChild($active);
  else if (render === 'Completed') $todos.appendChild($completed);
}

const fetchList = () => {
  todos = [
    { id: 3, content: 'HTML', completed: true },
    { id: 2, content: 'CSS', completed: true },
    { id: 1, content: 'JavaScript', completed: false }
  ];
  renderList();
}

document.addEventListener('DOMContentLoaded', fetchList);

const generateID = () => {
  return todos.reduce((max, todo) => max < todo.id ? max = todo.id : max, 0 ) + 1;
};

const addTodo = (newContent) => {
  todos = [{ id: generateID(), content: newContent, completed: false } , ...todos];
  selectedRender();

};

const removeTodo = (id) => {
  todos = todos.filter(todo => todo.id !== +id);
  selectedRender();
}

const toggleTodo = id => {
  todos = todos.map(todo => todo.id === +id ? {...todo, completed: !todo.completed} : todo);
  selectedRender();
}

const selectNav = target => {
  [...target.parentNode.children].forEach(li => li.classList.contains('active') ? li.classList.toggle('active') : '');
  target.classList.toggle('active');
};

const selectedRender = () => {
  [...$nav.children].forEach(li => {
    if (li.classList.contains('active')) {
      renderList(li.textContent);
    }
  });
};

$inputTodo.onkeypress = e => {
  if (e.key !== 'Enter') return;
  [...$nav.children].forEach(li => li.classList.contains('active') ? li.classList.toggle('active') : '')  ;
  $seeAll.classList.toggle('active');
  addTodo($inputTodo.value);
  $inputTodo.value = '';
};

$todos.onclick = e => {
  if (!e.target.classList.contains('remove-todo')) return;
  removeTodo(e.target.parentNode.id);
}

$todos.onchange = e => {
  toggleTodo(e.target.parentNode.id);
}

$nav.onclick = e => {
    if (e.target === document.getElementById('all')) {
      selectNav(e.target);
      renderList();
    } else if (e.target === document.getElementById('active')) {
      selectNav(e.target);
      renderList(e.target.textContent);
    } else if (e.target === document.getElementById('completed')) {
      selectNav(e.target);
      renderList(e.target.textContent);
    }
}

$markAll.onchange = () => {
  console.log('changed');
}