const $hour = document.querySelector('.hour');
const $minute = document.querySelector('.minute');
const $second = document.querySelector('.second');

const updateClock = () => {
  const date = new Date();
  const sec = date.getSeconds();
  const min = date.getMinutes();
  const hour = date.getHours();
  
  const secondRatio = sec / 60;
  const minuteRatio = (secondRatio + min) / 60;
  const hourRatio = (minuteRatio + hour) / 12;

  $second.style.transform = `rotate(${secondRatio * 360}deg)`;
  $minute.style.transform = `rotate(${minuteRatio * 360}deg)`;
  $hour.style.transform = `rotate(${hourRatio * 360}deg)`;
};

setInterval(updateClock, 1000);

updateClock();