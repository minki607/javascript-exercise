const $display = document.querySelector('.display');
const [$btnStartOrStop, $btnResetOrLap] = document.querySelectorAll('.control');

let isRunning = false;
let timerId = null;
let elapedTime = { mm: 0, ss: 0, ms: 0 };

const formatElapedTime = (() => {
  const format = n => (n < 10 ? '0' + n : n + '');
  return ({ mm, ss, ms }) => `${format(mm)}:${format(ss)}:${format(ms)}`;
})();

const renderElapedTime = () => {
  $display.textContent = formatElapedTime(elapedTime);
};

const start = () => {
  let { mm, ss, ms } = elapedTime;

  timerId = setInterval(() => {
    ms += 1;

    if (ms >= 100) {
      ss += 1;
      ms = 0;
    }
    if (ss >= 60) {
      mm += 1;
      ss = 0;
    }

    elapedTime = { mm, ss, ms };
    renderElapedTime();
  }, 10);
};

const stop = () => {
  clearInterval(timerId);
};

const handleBtnStartOrStop = () => {
  isRunning ? stop() : start();
  isRunning = !isRunning;

  $btnStartOrStop.textContent = isRunning ? 'Stop' : 'Start';
  $btnResetOrLap.textContent = isRunning ? 'Lap' : 'Reset';
};

const handleBtnResetOrLap = () => {};

document.querySelector('.stopwatch').onclick = e => {
  if (!e.target.classList.contains('control')) return;

  if (e.target === $btnStartOrStop) {
    handleBtnStartOrStop();
  } else {
    handleBtnResetOrLap();
  }
};