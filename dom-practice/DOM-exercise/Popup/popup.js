const $toggle = document.querySelector('.toggle-btn');
const $popup = document.querySelector('.popup');
const $overlay = document.querySelector('.overlay');
const $popupInput = document.getElementById('popupInput');
const $popupMsg = document.querySelector('.popup-message');

const openPopup = () => {
  $popup.style.display = 'block';
  $overlay.style.display = 'block';
  $popupInput.focus();
};

const closePopup = () => {
  $popup.style.display = 'none';
  $overlay.style.display = 'none';
};

const enterInput = () => {
  closePopup();
  $popupMsg.textContent = $popupInput.value;
  $popupInput.value = '';
};

$toggle.addEventListener('click', openPopup);

$popup.addEventListener('click', e => {
  if (!e.target.tagName === 'button') return;
  if (e.target.classList.contains('close')) closePopup();
  // if (e.target.classList.contains(''))
  if (e.target.textContent === 'OK') enterInput();
  if (e.target.textContent === 'Cancel') closePopup();
});

$popupInput.addEventListener('keyup', e => {
  if (e.key !== 'Enter' || e.target.value === '') return;
  enterInput();
});

$overlay.addEventListener('click', closePopup);
