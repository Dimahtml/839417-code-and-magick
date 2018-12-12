'use strict';

(function () {

  var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

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
  var wizards = generateWizards(NAMES, SURNAMES, window.colors.COAT_COLORS, window.colors.EYES_COLORS);

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
  window.util.setup.querySelector('.setup-similar').classList.remove('hidden');

})();
