const $accordion = document.querySelector('.accordion');
let activeMenu = null;

const closeActive = selected => {
  [...$accordion.children].forEach($menu => {
    if ($menu.classList.contains('active') && activeMenu !== selected) {
      $menu.classList.remove('active');
    }
    const [_, $submenu] = [...$menu.children];
    $submenu.style.height = 0;
  });
};

const toggleMenu = selected => {
  closeActive(selected);
  selected.classList.toggle('active');
  if (selected.classList.contains('active')) {
    activeMenu = selected;
    const [_, $submenu] = [...selected.children];
    $submenu.style.height = `${$submenu.scrollHeight}px`;
  } else {
    activeMenu = null;
  }
};

const checkActive = () => {
  [...$accordion.children].forEach($menu => {
    if ($menu.classList.contains('active')) {
      activeMenu = $menu;
      const [_, $submenu] = [...$menu.children];
      $submenu.style.height = 'auto';
      $submenu.style.height = `${$submenu.scrollHeight}px`;
    }
  });
}

$accordion.addEventListener('click', e => {
  if (!e.target.classList.contains('menu') && !e.target.classList.contains('bx')) return;
  toggleMenu(e.target.closest('.menu-container'));
});

document.addEventListener('DOMContentLoaded', checkActive);