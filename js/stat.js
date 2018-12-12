'use strict';

(function () {

  var CLOUD_WIDTH = 420;
  var CLOUD_HEIGHT = 270;
  var CLOUD_X = 100;
  var CLOUD_Y = 10;
  var BAR_HEIGHT = 150;
  var BAR_WIDTH = 40;
  // расстояние между колонками
  var GAP = 50;
  // смещение одной колонки относительно другой
  var shift = BAR_WIDTH + GAP;
  var textColor = '#000';
  var playerBarColor = 'rgba(255, 0, 0, 1)';
  var anotherPlayersBarColor = 'rgba(0, 0, 255, ';

  var getMaxElement = function (arr) {
    var maxElement = arr[0];
    for (var i = 1; i < arr.length; i++) {
      if (arr[i] > maxElement) {
        maxElement = arr[i];
      }
    }
    return Math.round(maxElement);
  };

  var renderCloud = function (ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  };

  var getRandom = function (min, max) {
    return Math.random() * (max - min) + min;
  };

  window.renderStatistics = function (ctx, names, times) {
    renderCloud(ctx, CLOUD_X + 10, CLOUD_Y + 10, 'rgba(0, 0, 0, 0.7)');
    renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
    ctx.fillStyle = '#000';
    ctx.font = '16px PT Mono';
    ctx.fillText('Ура вы победили!', 130, 40);
    ctx.fillText('Список результатов: ', 130, 60);
    for (var i = 0; i < times.length; i++) {
      // Разница между максимальной шкалой и текущей
      var differenceBar = Math.round(BAR_HEIGHT - times[i] / getMaxElement(times) * BAR_HEIGHT);
      // Пишем результат игрока
      ctx.fillStyle = textColor;
      ctx.fillText(Math.round(times[i]) + '  ', 150 + i * shift, 90 + differenceBar);
      // Генерируем случайное число от 0.25 до 1 для определения интенсивности цвета шкалы
      var rnd = getRandom(0.25, 1);
      // Определяем цвет шкалы
      ctx.fillStyle = names[i] === 'Вы' ? playerBarColor : anotherPlayersBarColor + rnd + ')';
      // Рисуем шкалу и пишем имя
      ctx.fillRect(150 + i * shift, 100 + differenceBar, BAR_WIDTH, BAR_HEIGHT - differenceBar);
      ctx.fillStyle = textColor;
      ctx.fillText(names[i] + '  ', 150 + i * shift, 270);
    }
  };

})();
