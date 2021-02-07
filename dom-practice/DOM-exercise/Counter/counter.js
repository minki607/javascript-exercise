const $increase = document.querySelector('.increase');
const $decrease = document.querySelector('.decrease');
const $counter = document.querySelector('.counter');

const counter = (() => {
  let count = 0;
  return {
    increase() {
      $counter.textContent = ++count;
    },
    decrease() {
      if (count > 0) {
        $counter.textContent = --count;
      }
    }
  };
})();

$increase.addEventListener('click', counter.increase);
$decrease.addEventListener('click', counter.decrease);