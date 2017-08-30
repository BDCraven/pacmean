canvas = document.getElementById('global-canvas');
context = canvas.getContext('2d');

window.onload=function() {
  var key;
  var pacMean;
  var pacMeanX = 9 * 25;
  var pacMeanY = 16 * 25;
  var world = new World;

  context.fillStyle='black';
  context.fillRect(0,0,canvas.width,canvas.height);

  pacMean = new PacMean(pacMeanX, pacMeanY);
  window.addEventListener('keydown', function (e) {
    key = e.keyCode;
  });
  window.addEventListener('keyup', function (e) {
    key = false;
  });
  setInterval(updateGameArea, 10);

  function clear() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    context.fillStyle='black';
    context.fillRect(0,0,canvas.width,canvas.height);
    world.draw();
    pacMean.draw();
  }

  function updateGameArea() {
     if (key && key == 37) {pacMean.goLeft();}
     if (key && key == 38) {pacMean.goUp();}
     if (key && key == 39) {pacMean.goRight();}
     if (key && key == 40) {pacMean.goDown();}
     clear();
   }
};
