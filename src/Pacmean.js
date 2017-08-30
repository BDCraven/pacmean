var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var pacMean;

window.onload = start();

function start() {
  context.fillStyle = 'black';
  context.fillRect(0,0,canvas.width,canvas.height);
  pacMean = new component(30, 30, "yellow", 10, 120);
}

function component(width, height, color, x, y) {
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y;
  ctx = context;
  ctx.fillStyle = color;
  ctx.fillRect(this.x, this.y, this.width, this.height);
}
