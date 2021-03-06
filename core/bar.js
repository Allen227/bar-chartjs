import optionManager from './option.js';

var barInfns = ['x', 'y', 'w', 'h','val', 'd_style', 'a_style'];

/**
 * Create bar
 * @return {Object} item instance of bar-chart
 */
function createBar () {
  var bar = Object.create(null);
  var args = arguments;
  barInfns.forEach(function (el, idx) {
    bar[el] = args[idx];
  });
  return bar;
}

/**
 * Draw bar
 */
function drawBar (ctx, bar, isSelect) {
  if (isSelect) ctx.fillStyle = bar.a_style;
  else ctx.fillStyle = bar.d_style;

  ctx.fillRect(bar.x, bar.y, bar.w, bar.h);
}

export {
  drawBar,
  createBar
};
