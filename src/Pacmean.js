function PacMean(x, y) {
  this.width = this.height = 20;
  this.SPEED = 1;
  this.x = x;
  this.y = y;
  this.draw();
}

PacMean.prototype.draw = function () {
  context.fillStyle = "yellow";
  context.fillRect(this.x-this.width/2, this.y-this.height/2, this.width, this.height);
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
