'use strict';

// попап с настройками
var setup = document.querySelector('.setup');
// setup.classList.remove('hidden');

var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

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
// поле ввода имени персонажа
var userNameInput = document.querySelector('.setup-user-name');
var isFocused = 0;
userNameInput.addEventListener('focus', function () {
  isFocused = 1;
});
userNameInput.addEventListener('blur', function () {
  isFocused = 0;
});

var onPopupEscPress = function (evt) {
  if ((evt.keyCode === ESC_KEYCODE) && (!(isFocused === 1))) {
    closePopup();
  }
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
  // При повторном открытии/закрытии диалога, положение диалога должно сбрасываться на изначальное
  setupDialogElement.style.left = '';
  setupDialogElement.style.top = '';
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

buttonSetupOpen.addEventListener('click', function () {
  openPopup();
});

buttonSetupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

buttonSetupClose.addEventListener('click', function () {
  closePopup();
});

buttonSetupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

// функция для изменения цвета плаща или глаз (В РАЗРАБОТКЕ. нужна ли она вообще?)
// var changeColor = function (classOfElement, arrayOfData) {
//   var wizardElement = document.querySelector('.setup-wizard').querySelector('classOfElement');
//   var colorIndex = 1;
//   wizardElement.addEventListener('click', function () {
//     wizardElement.style.fill = arrayOfData[colorIndex];
//     colorIndex++;
//     if (colorIndex === arrayOfData.length) {
//       colorIndex = 0;
//     };
//   });
// };
// changeColor ('.wizard-coat', COAT_COLORS);

// меняем цвет плаща волшебника
var wizardCoat = document.querySelector('.setup-wizard').querySelector('.wizard-coat');
var colorCoatIndex = 1;
wizardCoat.addEventListener('click', function () {
  wizardCoat.style.fill = COAT_COLORS[colorCoatIndex];
  colorCoatIndex++;
  if (colorCoatIndex === COAT_COLORS.length) {
    colorCoatIndex = 0;
  }
});
// меняем цвет глаз
var wizardEyes = document.querySelector('.setup-wizard').querySelector('.wizard-eyes');
var colorEyesIndex = 1;
wizardEyes.addEventListener('click', function () {
  wizardEyes.style.fill = EYES_COLORS[colorEyesIndex];
  colorEyesIndex++;
  if (colorEyesIndex === EYES_COLORS.length) {
    colorEyesIndex = 0;
  }
});
// Изменение цвета фаерболов по нажатию. Изменение фона у блока .setup-fireball-wrap
var wizardFireball = document.querySelector('.setup-fireball-wrap');
// чтобы на сервер отправились правильные данные, при изменении параметров персонажа
// должно изменяться и значение соответствующего скрытого инпута.
var wizardFireballInput = document.querySelector('.setup-fireball-wrap').querySelector('input');
var colorFireballIndex = 1;
wizardFireball.addEventListener('click', function () {
  wizardFireball.style.background = FIREBALL_COLORS[colorFireballIndex];
  wizardFireballInput.value = FIREBALL_COLORS[colorFireballIndex];
  colorFireballIndex++;
  if (colorFireballIndex === FIREBALL_COLORS.length) {
    colorFireballIndex = 0;
  }
});
