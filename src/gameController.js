function GameController() {
  this.pacMeanX = 9 * GRID_ELEMENT_WIDTH;    //starts at grid position j = 9
  this.pacMeanY = 16 * GRID_ELEMENT_HEIGHT;  //starts at grid position i = 16
  this.world = new World();
  this.pacMean = new PacMean(this.pacMeanX, this.pacMeanY);
}

GameController.prototype.setKey = function (key) {
  this.key = key;
};

GameController.prototype.updateGameArea = function () {
  this.clear();
  if (!this.key) return;
  if (this.world.isPacDot(this.pacMean.xCoordinate(), this.pacMean.yCoordinate())) this.world.gridToZero(this.pacMean.xCoordinate(), this.pacMean.yCoordinate())
  if (this.world.isWall(this.pacMean.xCoordinate(), this.pacMean.yCoordinate(), this.key)) return;

  this.returnDirection();
  //this.pacMean.draw();
  //this.pacMeanX = this.pacMean.xCoordinate();
  //this.pacMeanY = this.pacMean.yCoordinate();
  //this.clear(); //may need to put clear on line 1
};

GameController.prototype.clear = function () {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillStyle='black';
  context.fillRect(0,0,canvas.width,canvas.height);
  this.world.draw();
  this.pacMean.draw();
};

GameController.prototype.returnDirection = function () {

  if (this.key === 37) {return this.pacMean.goLeft();}
  if (this.key === 38) {return this.pacMean.goUp();}
  if (this.key === 39) {return this.pacMean.goRight();}
  if (this.key === 40) {return this.pacMean.goDown();}
 };
