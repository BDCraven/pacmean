'use strict';

(function(exports){
  function PacDot(width, height, colour) {
    this._width = width;
    this._height = height;
    this._colour = colour || '#FFF';
  };

  PacDot.prototype.displayPacDot = function(x,y){
    context.fillStyle = this._colour;
    context.fillRect(x,y,this._width/10,this._height/10);
  };

  exports.PacDot = PacDot;
})(this);
