'use strict';

(function(exports){
  function Wall(width, height, colour) {
    this._width = width;
    this._height = height;
    this._colour = colour || '#00F';
  };

  Wall.prototype.displayWall = function(x,y){
    context.fillStyle = this._colour;
    context.fillRect(x,y,this._width,this._height);
  };

  exports.Wall = Wall;
})(this);
