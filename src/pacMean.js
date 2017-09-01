'use strict';

(function(exports) {
  function PacMean(x, y) {
    this.width = GRID_ELEMENT_WIDTH - 2;
    this.height = GRID_ELEMENT_HEIGHT - 2;
    this.sprite = new Sprite();
    this.SPEED = GRID_ELEMENT_WIDTH;
    this.x = x;
    this.y = y;
  }

  PacMean.prototype.draw = function () {
    var direction = this.getKey() || 39;
    this.sprite.setDirection(direction);
    this.sprite.setCoordinates(this.x, this.y);
    this.sprite.update();
    this.sprite.render();
  };

  PacMean.prototype.getWidth = function () {
    return this.width;
  };

  PacMean.prototype.getHeight = function () {
    return this.height;
  };

  PacMean.prototype.getSprite = function () {
    return this.sprite;
  };

  PacMean.prototype.getSpeed = function () {
    return this.SPEED;
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
      this.x = 0;
    }
  };

  PacMean.prototype.goLeft = function () {
    if (this._checkHorizontalLocation()) {
      this.x -= this.SPEED;
    }else{
      this.x = canvas.width - GRID_ELEMENT_WIDTH;
    }
  };

  PacMean.prototype.goUp = function () {
    if (this._checkVerticalLocation()) {
      this.y -= this.SPEED;
    }else{
      this.y = canvas.height - GRID_ELEMENT_HEIGHT;
    }
  };

  PacMean.prototype.goDown = function () {
    if (this._checkVerticalLocation()) {
      this.y += this.SPEED;
    }else{
      this.y = 0;
    }
  };


  PacMean.prototype.setKey = function (key){
    this.key = key;
  };

  PacMean.prototype.getKey = function (){
    return this.key;
  };

  PacMean.prototype._checkHorizontalLocation = function () {
    return this.x >= 0 && this.x <= canvas.width;
  };

  PacMean.prototype._checkVerticalLocation = function () {
    return this.y >= 0 && this.y <= canvas.height;
  };

  exports.PacMean = PacMean;
})(this);
