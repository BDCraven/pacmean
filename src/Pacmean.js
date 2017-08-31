function PacMean(x, y) {
  this.width = this.height = 30;
  this.SPEED = 1;
  this.x = x;
  this.y = y;
  this.draw();
}

PacMean.prototype.draw = function () {
  context.fillStyle = "yellow";
  context.fillRect(this.x-this.width/2, this.y-this.height/2, this.width, this.height);
};

PacMean.prototype.xCoordinate = function () {
  return this.x;
};

PacMean.prototype.yCoordinate = function () {
  return this.y;
};

PacMean.prototype.goRight = function () {
  if (this._checkHorizontalLocation()) {
    this.x += this.SPEED;
  }else{
    this.x = 1;
  }
};

PacMean.prototype.goLeft = function () {
  if (this._checkHorizontalLocation()) {
    this.x -= this.SPEED;
  }else{
    this.x = canvas.width - 1;
  }
};

PacMean.prototype.goUp = function () {
  if (this._checkVerticalLocation()) {
    this.y -= this.SPEED;
  }else{
    this.y = canvas.height - 1;
  }
};

PacMean.prototype.goDown = function () {
  if (this._checkVerticalLocation()) {
    this.y += this.SPEED;
  }else{
    this.y = 1;
  }
};

PacMean.prototype._checkHorizontalLocation = function () {
  return this.x > 0 && this.x < canvas.width;
};

PacMean.prototype._checkVerticalLocation = function () {
  return this.y > 0 && this.y < canvas.height;
};
