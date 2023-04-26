let darkThemeButton = document.querySelector('.theme-button-dark');
let lightThemeButton = document.querySelector('.theme-button-light');
let serifFontButton = document.querySelector('.font-button-serif');
let sansSerifFontButton = document.querySelector('.font-button-sans-serif');

darkThemeButton.onclick = function () {
   document.body.classList.add('dark');
   darkThemeButton.classList.add('active');
   lightThemeButton.classList.remove('active');
 }
 
 lightThemeButton.onclick = function () {
   document.body.classList.remove('dark');
   lightThemeButton.classList.add('active');
   darkThemeButton.classList.remove('active');
 }

serifFontButton.onclick = function () {
   document.body.classList.add('serif');
   sansSerifFontButton.classList.remove('active');
   serifFontButton.classList.add('active');
}

sansSerifFontButton.onclick = function () {
 document.body.classList.remove('serif');
 sansSerifFontButton.classList.add('active');
 serifFontButton.classList.remove('active');
}

// Задание 2
let articleSections = document.querySelectorAll('.blog-article.short');

for (let articleSection of articleSections) {
  let moreButton = articleSection.querySelector('.more');
  moreButton.onclick = function () {
    articleSection.classList.remove('short');
  };
}

// Задание №3
let gridViewButton = document.querySelector('.card-view-button-grid');
let listViewButton = document.querySelector('.card-view-button-list');

/* Элемент списка карточек */
let cardsList = document.querySelector('.cards');

gridViewButton.onclick = function () {
  cardsList.classList.remove('list');
  gridViewButton.classList.add('active');
  listViewButton.classList.remove('active');
};

listViewButton.onclick = function () {
  cardsList.classList.add('list');
  gridViewButton.classList.remove('active');
  listViewButton.classList.add('active');
};

// Галерея

let mainImage = document.querySelector('.active-photo');
let previews = document.querySelectorAll('.preview-list a');


for (let activeImage of previews) {
activeImage.onclick = function (evt) {
  evt.preventDefault();
  mainImage.src = activeImage.href;

  let currentActive = document.querySelector('.preview-list .active-item');
  currentActive.classList.remove('active');
  activeImage.classList.add('active');
};
}