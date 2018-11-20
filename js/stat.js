'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;
//расстояние между колонками
var GAP = 50;
//смещение одной колонки относительно другой
var shift = BAR_WIDTH + GAP;

var getMaxElement = function (arr) {
  var maxElement = arr[0]
  for (var i = 0; i < arr.length; i ++) {
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

window.renderStatistics = function(ctx, names, times) {
  renderCloud (ctx, CLOUD_X + 10, CLOUD_Y + 10, 'rgba(0, 0, 0, 0.7)');
  renderCloud (ctx, CLOUD_X, CLOUD_Y, '#fff');
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 130, 40);
  ctx.fillText('Список результатов: ', 130, 60);

  // Пишем результат-время
  ctx.fillStyle = '#000';
  for (var i = 0; i < times.length; i ++) {
    // Разница между максимальной полоской и текущей
    var differenceBar = Math.round(BAR_HEIGHT - times[i] / getMaxElement(times) * BAR_HEIGHT);
    ctx.fillText(Math.round(times[i]) + '  ', 150 + i * shift, 90 + differenceBar);
  }

  // Рисуем прямоугольник-полоску
  for (var i = 0; i < times.length; i ++) {
    var rnd = Math.random();
    ctx.fillStyle = 'rgba(0, 0, 255, ' + rnd + ')';
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    }
    var differenceBar = Math.round(BAR_HEIGHT - times[i] / getMaxElement(times) * BAR_HEIGHT);
    ctx.fillRect(150 + i * shift, 100 + differenceBar, BAR_WIDTH, BAR_HEIGHT - differenceBar);
  }

  // Пишем имя
  ctx.fillStyle = '#000';
  for (var i = 0; i < names.length; i ++) {
    ctx.fillText(names[i] + '  ', 150 + i * shift, 270);
  }
};

