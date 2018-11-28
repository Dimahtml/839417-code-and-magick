'use strict';

var visibleDiv = document.querySelector('.setup');
visibleDiv.classList.remove('hidden');

var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
// в этом массиве будут храниться данные, описывающие магов
var wizards = [{}, {}, {}, {}];

// Возвращает случайное целое число между min (включительно) и max (не включая max)
// Использование метода Math.round() даст вам неравномерное распределение!
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

var createWizards = function (arrayReturned, arrayFirst, arraySecond, arrayThird, arrayFourth) {
  for (var i = 0; i < 4; i++) {
    arrayReturned[i].name = arrayFirst[getRandom(0, 8)] + ' ' + arraySecond[getRandom(0, 8)];
    arrayReturned[i].coatColor = arrayThird[getRandom(0, 6)];
    arrayReturned[i].eyesColor = arrayFourth[getRandom(0, 5)];
  }
};

// Элемент, куда будем вставлять похожих магов
var similarListElement = document.querySelector('.setup-similar-list');
// Шаблон, который мы будем копировать
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
// заполняем массив данными, описывающими магов
createWizards(wizards, NAMES, SURNAMES, COAT_COLORS, EYES_COLORS);

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
visibleDiv.querySelector('.setup-similar').classList.remove('hidden');
