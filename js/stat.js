'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var TOP_GAP = 58;
var LEFT_GAP = 40;
var BOTTOM_GAP = 10;
var BAR_GAP = 50;
var TEXT_HEIGHT = 16;
var TEXT_GAP = 5;
var BAR_WIDTH = 40;
var barHeight = CLOUD_HEIGHT - TOP_GAP - TEXT_GAP * 4 - TEXT_HEIGHT * 2 - BOTTOM_GAP;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);

  ctx.fillStyle = '#000';

  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', 120, 30);
  ctx.fillText('Список результатов:', 120, 50);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

var fillBarColor = function (ctx, namePlayer) {
  var randomSaturation = Math.floor(Math.random() * 100) + '%';
  if (namePlayer === 'Вы') {
    ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  } else {
    ctx.fillStyle = 'hsl(240, ' + randomSaturation + ', 60%)';
  }
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(Math.round(times[i]), CLOUD_X + LEFT_GAP + (BAR_GAP + BAR_WIDTH) * i, CLOUD_HEIGHT - BOTTOM_GAP - TEXT_HEIGHT - TEXT_GAP * 2 - (barHeight * times[i]) / maxTime - TEXT_GAP);
    ctx.fillText(players[i], CLOUD_X + LEFT_GAP + (BAR_GAP + BAR_WIDTH) * i, CLOUD_Y + TOP_GAP + TEXT_HEIGHT + barHeight + TEXT_GAP * 3);
    ctx.fillStyle = fillBarColor(ctx, players[i]);
    ctx.fillRect(CLOUD_X + LEFT_GAP + (BAR_GAP + BAR_WIDTH) * i, CLOUD_Y + TOP_GAP + TEXT_HEIGHT + TEXT_GAP * 2 + barHeight, BAR_WIDTH, -(barHeight * times[i]) / maxTime);
  }
};
