function PacMean(x, y) {
  this.width = GRID_ELEMENT_WIDTH - 2;
  this.height = GRID_ELEMENT_HEIGHT - 2;
  this.SPEED = 1;
  this.x = x;   //tracks the top left x coordinate of the grid it occupies
  this.y = y;   //tracks the top left y coordinate of the grid it occupies
}

PacMean.prototype.draw = function () {
  context.fillStyle = "yellow";
  context.fillRect(this.x + 1, this.y + 1, this.width, this.height);
};

PacMean.prototype.goRight = function () {
  this.x += this.SPEED;
};

PacMean.prototype.goLeft = function () {
  this.x -= this.SPEED;
};

PacMean.prototype.goUp = function () {
  this.y -= this.SPEED;
};

PacMean.prototype.goDown = function () {
  this.y += this.SPEED;
};

PacMean.prototype.getX = function () {
  return this.x;
};

PacMean.prototype.getY = function () {
  return this.y;
};
