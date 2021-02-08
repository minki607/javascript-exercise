const $toggleBtn = document.querySelector('.toggle-button');
const $body = document.querySelector('body');

$toggleBtn.addEventListener('click', () => {
  $body.classList.toggle('dark');
  if ($body.classList.contains('dark')) {
    localStorage.setItem('Theme', 'Dark');
  } else {
    localStorage.setItem('Theme', 'Light');
  }
});

const loadTheme = () => {
  if (localStorage.getItem('Theme') === 'Dark' || window.matchMedia('(prefers-color-scheme: dark)').matches) {
    $body.classList.add('dark');
  }
};

window.addEventListener('DOMContentLoaded', loadTheme);
