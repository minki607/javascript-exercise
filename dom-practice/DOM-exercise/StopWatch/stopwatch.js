const $startStop = document.querySelectorAll('.control')[0];
const $resetLap = document.querySelectorAll('.control')[1];
const $display = document.querySelector('.display');
const $laps = document.querySelector('.laps');


let ms = 0;
let s = 0;
let m = 0;
let timerId;
let count = 0;

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

const resetTimer = () => {
  ms = 0;
  s = 0;
  m = 0;
  $display.textContent = (m < 10 ? '0' + m : m) + ':' + (s < 10 ? '0' + s : s) + ':' + (ms < 10 ? '0' + ms : ms);
  $laps.textContent = '';
  count = 0;
  $resetLap.setAttribute('disabled', true);
};

const lapTimer = () => {
  $laps.style.display = 'grid';
  const lapNum = document.createElement('div');
  const lapTime = document.createElement('div');
  lapNum.textContent = ++count;
  lapTime.textContent = $display.textContent;
  $laps.appendChild(lapNum);
  $laps.appendChild(lapTime);
}

$startStop.addEventListener('click', () => {
  if (!$startStop.classList.contains('active')) {
    $startStop.classList.add('active');
    timerId = setInterval(startTimer, 10);
    $startStop.textContent = 'Stop';
    $resetLap.removeAttribute('disabled');
    $resetLap.textContent = 'Lap';
  } else {
    $startStop.classList.remove('active');
    clearInterval(timerId);
    $startStop.textContent = 'Start';
    $resetLap.textContent = 'Reset';
  }
});

$resetLap.addEventListener('click', () => {
  if ($resetLap.textContent === 'Lap') {
    lapTimer();
  } else {
    resetTimer();
  }
});