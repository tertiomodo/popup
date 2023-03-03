const popup = document.querySelector('.popup');
const popupWrap = document.querySelector('.popup-wrapper');
const transparent = document.querySelector('.transparent');
const showPopup = document.querySelector('.show-btn');
const hidePopup = document.querySelector('.popup__btn');
const popupInput = document.querySelector('.popup__input');

showPopup.addEventListener('click', () => {
  popupWrap.classList.add('popup-wrapper--active');
  popup.classList.add('popup--active');
  transparent.classList.add('transparent--active');
});

hidePopup.addEventListener('click', (event) => {
  event.preventDefault();
  
  popupWrap.classList.remove('popup-wrapper--active');
  popup.classList.remove('popup--active');
  transparent.classList.remove('transparent--active');
  popupInput.value = '';
});
