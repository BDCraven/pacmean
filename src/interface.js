canvas = document.getElementById('global-canvas');
context = canvas.getContext('2d');

window.onload=function() {
  var key;
  var world, pacMean;

  var pacMeanX = 9 * GRID_ELEMENT_WIDTH;    //starts at grid position j = 9
  var pacMeanY = 16 * GRID_ELEMENT_HEIGHT;  //starts at grid position i = 16

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
    clear();
    if (key === undefined ) return;

    pacMeanX = pacMean.getX();
    pacMeanY = pacMean.getY();
    if (world.isWall(pacMeanX, pacMeanY, key)) return;

    if (key == 37) {pacMean.goLeft();}
    else if (key == 38) {pacMean.goUp();}
    else if (key == 39) {pacMean.goRight();}
    else if (key == 40) {pacMean.goDown();}

  }
};
