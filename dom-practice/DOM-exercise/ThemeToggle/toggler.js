const $toggleBtn = document.querySelector('.toggle-button');
const $body = document.querySelector('body');

$toggleBtn.addEventListener('click', () => {
  $body.classList.toggle('dark');
  if ($body.classList.contains('dark')) {
    window.localStorage.setItem('Theme', 'Dark');
  } else {
    window.localStorage.setItem('Theme', 'Light');
  }
});

const loadTheme = () => {
  if (window.localStorage.getItem('Theme') === 'Dark') {
    $body.classList.add('dark');
  }
};

window.addEventListener('DOMContentLoaded', loadTheme);
