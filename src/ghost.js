(function(exports) {
  'use strict';

  function Ghost() {
    this.x = 9 * GRID_ELEMENT_WIDTH;
    this.y = 9 * GRID_ELEMENT_HEIGHT;
    this.speed = GRID_ELEMENT_WIDTH;
    this.image = new Image();
    this.image.src = "src/images/pinky.gif";
  }

  Ghost.prototype.xCoordinate = function () {
    return this.x;
  };

  Ghost.prototype.yCoordinate = function () {
    return this.y;
  };

  Ghost.prototype.draw = function () {
    context.drawImage(this.image,this.x,this.y,GRID_ELEMENT_WIDTH,GRID_ELEMENT_HEIGHT)
    // context.fillStyle='pink';
    // context.fillRect(this.x,this.y,GRID_ELEMENT_WIDTH,GRID_ELEMENT_HEIGHT);
  };

  Ghost.prototype.look = function (x, y) {
    this.pacMeanX = x;
    this.pacMeanY = y;
  };

  Ghost.prototype.chooseDirection = function () {
    if (Math.floor(Math.random() * 2) + 1 === 2) {
      this._leftOrRight();
    } else {
      this._upOrDown();
    }
  };

  Ghost.prototype.getDirection = function () {
    return this.direction;
  };

  Ghost.prototype.follow = function () {
    if (this.direction === 37) {return this.goLeft();}
    if (this.direction === 38) {return this.goUp();}
    if (this.direction === 39) {return this.goRight();}
    if (this.direction === 40) {return this.goDown();}
  };

  Ghost.prototype.goRight = function () {
    this.x += this.speed;
  };

  Ghost.prototype.goLeft = function () {
    this.x -= this.speed;
  };

  Ghost.prototype.goUp = function () {
    this.y -= this.speed;
  };

  Ghost.prototype.goDown = function () {
    this.y += this.speed;
  };

  Ghost.prototype._leftOrRight = function () {
    if (this.x < this.pacMeanX) {
      this.direction =  39;}
    if (this.x > this.pacMeanX) {
      this.direction = 37; }
  };

  Ghost.prototype._upOrDown = function () {
    if (this.y < this.pacMeanY) {
      this.direction = 40;}
    if (this.y > this.pacMeanY) {
      this.direction = 38;}
  };

  exports.Ghost = Ghost;
}(this));
