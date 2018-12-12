'use strict';

(function () {

  // меняем цвет плаща волшебника
  var wizardCoat = document.querySelector('.setup-wizard').querySelector('.wizard-coat');
  var colorCoatIndex = 1;
  wizardCoat.addEventListener('click', function () {
    wizardCoat.style.fill = window.colors.COAT_COLORS[colorCoatIndex];
    colorCoatIndex++;
    if (colorCoatIndex === window.colors.COAT_COLORS.length) {
      colorCoatIndex = 0;
    }
  });
  // меняем цвет глаз
  var wizardEyes = document.querySelector('.setup-wizard').querySelector('.wizard-eyes');
  var colorEyesIndex = 1;
  wizardEyes.addEventListener('click', function () {
    wizardEyes.style.fill = window.colors.EYES_COLORS[colorEyesIndex];
    colorEyesIndex++;
    if (colorEyesIndex === window.colors.EYES_COLORS.length) {
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
    wizardFireball.style.background = window.colors.FIREBALL_COLORS[colorFireballIndex];
    wizardFireballInput.value = window.colors.FIREBALL_COLORS[colorFireballIndex];
    colorFireballIndex++;
    if (colorFireballIndex === window.colors.FIREBALL_COLORS.length) {
      colorFireballIndex = 0;
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

})();
