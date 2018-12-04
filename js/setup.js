'use strict';

// попап с настройками
var setup = document.querySelector('.setup');
// setup.classList.remove('hidden');

var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

// Возвращает случайное целое число между min (включительно) и max (не включая max)
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// функция для генерации данных
var generateWizards = function (names, surnames, coatColors, eyesColors) {
  var arrayOfWizards = [];
  for (var i = 0; i < 4; i++) {
    var wizard = {
      name: names[getRandom(0, 8)] + ' ' + surnames[getRandom(0, 8)],
      coatColor: coatColors[getRandom(0, 6)],
      eyesColor: eyesColors[getRandom(0, 5)]
    };
    arrayOfWizards.push(wizard);
  }
  return arrayOfWizards;
};

// Элемент, куда будем вставлять похожих магов
var similarListElement = document.querySelector('.setup-similar-list');
// Шаблон, который мы будем копировать
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
// заполняем массив данными, описывающими магов
var wizards = generateWizards(NAMES, SURNAMES, COAT_COLORS, EYES_COLORS);

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();

for (var j = 0; j < wizards.length; j++) {
  fragment.appendChild(renderWizard(wizards[j]));
}

similarListElement.appendChild(fragment);
setup.querySelector('.setup-similar').classList.remove('hidden');

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

// кнопки открыть и закрыть попап
var buttonSetupOpen = document.querySelector('.setup-open');
var buttonSetupClose = setup.querySelector('.setup-close');
var userNameInput = document.querySelector('.setup-user-name');

var isFocused = 0;

userNameInput.addEventListener('focus', function() {
  isFocused = 1;
  console.log(isFocused);
});

userNameInput.addEventListener('blur', function() {
  isFocused = 0;
  console.log(isFocused);
});

var onPopupEscPress = function (evt) {
  console.log(isFocused + ' escPress');
  if ((evt.keyCode === ESC_KEYCODE) && (!(isFocused === 1))) {
    closePopup ();
  }
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

buttonSetupOpen.addEventListener('click', function () {
  openPopup ();
});

buttonSetupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup ();
  }
});

buttonSetupClose.addEventListener('click', function () {
  closePopup ();
});

buttonSetupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup ();
  }
});
