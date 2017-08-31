function GameController() {
  this.pacMeanX = canvas.width/2;
  this.pacMeanY = canvas.height/2;
  this.world = new World();
  this.pacMean = new PacMean(this.pacMeanX, this.pacMeanY);
}

GameController.prototype.setKey = function (key) {
  this.key = key;
};

GameController.prototype.updateGameArea = function () {
  this.returnDirection();
  this.pacMean.draw();
  this.pacMeanX = this.pacMean.xCoordinate();
  this.pacMeanY = this.pacMean.yCoordinate();
  this.clear();
};

GameController.prototype.clear = function () {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillStyle='black';
  context.fillRect(0,0,canvas.width,canvas.height);
  this.world.display();
  this.pacMean = new PacMean(this.pacMeanX, this.pacMeanY);
};

GameController.prototype.returnDirection = function () {
   if (this.key == 37) {return this.pacMean.goLeft();}
   if (this.key == 38) {return this.pacMean.goUp();}
   if (this.key == 39) {return this.pacMean.goRight();}
   if (this.key == 40) {return this.pacMean.goDown();}
 };
