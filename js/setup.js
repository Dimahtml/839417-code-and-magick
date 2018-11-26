'use strict';

var visibleDiv = document.querySelector('.setup');
visibleDiv.classList.remove('hidden');

var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var wizards = [ {}, {}, {}, {} ];

// Возвращает случайное целое число между min (включительно) и max (не включая max)
// Использование метода Math.round() даст вам неравномерное распределение!
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

var createWizards = function(wizards, NAMES, SURNAMES, COAT_COLORS, EYES_COLORS) {
  for (var i = 0; i < 4; i++) {
    wizards[i].name = NAMES[getRandom(0, 8)]  + ' ' + SURNAMES[getRandom(0, 8)];
    wizards[i].coatColor = COAT_COLORS[getRandom(0, 6)];
    wizards[i].eyesColor = EYES_COLORS[getRandom(0, 5)];
  }
};

createWizards(wizards, NAMES, SURNAMES, COAT_COLORS, EYES_COLORS);

