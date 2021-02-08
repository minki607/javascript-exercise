const $startStop = document.querySelectorAll('.control')[0];
const $resetLap = document.querySelectorAll('.controls')[1];
const $display = document.querySelector('.display');

let ms = 0;
let s = 0;
let m = 0;
let timerId;

const startTimer = () => {
  $display.textContent = (m < 10 ? '0' + m : m) + ':' + (s < 10 ? '0' + s : s) + ':' + (ms < 10 ? '0' + ms : ms);
  if (ms === 99) {
    ms = 0;
    s++;
  }
  if (s === 60) {
    s = 0;
    m++;
  }
  ms++;
};


const stopTimer = () => {
};

const resetTimer = () => {

};

const LapTimer = () => {

}


$startStop.addEventListener('click', e => {
  if (!$startStop.classList.contains('active')) {
    $startStop.classList.add('active');
    timerId = setInterval(startTimer, 10);
    $startStop.textContent = 'Stop';
  } else {
    $startStop.classList.remove('active');
    clearInterval(timerId);
    $startStop.textContent = 'Start';
  }
});
