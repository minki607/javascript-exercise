const $accordion = document.querySelector('.accordion');
const DEFAULT_HEIGHT = '133px';
let activeMenu = null;

const closeActive = clickedMenu => {
  [...$accordion.children].forEach($menu => {
    if ($menu.classList.contains('active') && activeMenu !== clickedMenu) {
      $menu.classList.remove('active');
    }
    const [_, $submenu] = [...$menu.children];
    $submenu.style.height = 0;
  });
};

const toggleMenu = ({ parentNode, nextElementSibling }) => {
  closeActive(parentNode);
  parentNode.classList.toggle('active');
  if (parentNode.classList.contains('active')) {
    activeMenu = parentNode;
    nextElementSibling.style.height = DEFAULT_HEIGHT;
  } else {
    activeMenu = null;
  }
};

const checkActive = () => {
  [...$accordion.children].forEach($menu => {
    if ($menu.classList.contains('active')) {
      activeMenu = $menu;
      const [_, $submenu] = [...$menu.children];
      $submenu.style.height = DEFAULT_HEIGHT;
    }
  });
}

$accordion.addEventListener('click', e => {
  toggleMenu(e.target);
});

document.addEventListener('DOMContentLoaded', checkActive)