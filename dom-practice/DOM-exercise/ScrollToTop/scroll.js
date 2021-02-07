const $scroll = document.querySelector('.scroll-icon');

const displayScroll = () => {
  console.log(window.pageYOffset);
  if (window.pageYOffset > 100) {
    $scroll.style.display = 'block';
  } else {
    $scroll.style.display = 'none';
  }
}
window.addEventListener('scroll', _.throttle(displayScroll, 300));
