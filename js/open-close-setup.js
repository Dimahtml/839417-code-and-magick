'use strict';

(function () {

  // кнопки открыть и закрыть попап
  var buttonSetupOpen = document.querySelector('.setup-open');
  var buttonSetupClose = window.util.setup.querySelector('.setup-close');
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
    if ((evt.keyCode === window.util.ESC_KEYCODE) && (!(isFocused === 1))) {
      closePopup();
    }
  };

  var closePopup = function () {
    window.util.setup.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
    // При повторном открытии/закрытии диалога, положение диалога должно сбрасываться на изначальное
    window.util.setup.style.left = '';
    window.util.setup.style.top = '';
  };

  var openPopup = function () {
    window.util.setup.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  };

  buttonSetupOpen.addEventListener('click', function () {
    openPopup();
  });

  buttonSetupOpen.addEventListener('keydown', function (evt) {
    if (evt.keyCode === window.util.ENTER_KEYCODE) {
      openPopup();
    }
  });

  buttonSetupClose.addEventListener('click', function () {
    closePopup();
  });

  buttonSetupClose.addEventListener('keydown', function (evt) {
    if (evt.keyCode === window.util.ENTER_KEYCODE) {
      closePopup();
    }
  });

})();
