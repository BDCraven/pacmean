canvas = document.getElementById('global-canvas');
context = canvas.getContext('2d');

window.onload=function() {
  var key;
  var world, pacMean;

  var pacMeanX = 9 * 25;    //starts at grid position j = 9; change 25 to the constant defined in World
  var pacMeanY = 16 * 25;   //starts at grid position i = 16; change 25 to the constant defined in World

  context.fillStyle='black';
  context.fillRect(0,0,canvas.width,canvas.height);

  world = new World;
  pacMean = new PacMean(pacMeanX, pacMeanY);

  window.addEventListener('keydown', function (e) {
    key = e.keyCode;
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
    else if (key && key == 38) {pacMean.goUp();}
    else if (key && key == 39) {pacMean.goRight();}
    else if (key && key == 40) {pacMean.goDown();}
    clear();
  }
};
