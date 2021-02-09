


const counter = (() => {
  let count = 0;
  const $counter = document.querySelector('.counter');
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

document.querySelector('.increase').addEventListener('click', counter.increase);
document.querySelector('.decrease').addEventListener('click', counter.decrease);
