'use strict';

(function(exports){
  function Endstate(text) {
    this.text = text;
  };

  Endstate.prototype._drawBox = function(x, y, width, height, color) {
    context.fillStyle = color || '#00F';
    context.fillRect(x, y, width, height);
  };

  Endstate.prototype._background = function (gridWidth, gridHeight) {
    this._drawBox(gridWidth * 5, gridHeight * 7, gridWidth * 9, gridHeight * 7);
    this._drawBox(gridWidth * 6, gridHeight * 8, gridWidth * 7, gridHeight * 5, "#000");
  };

  Endstate.prototype._text = function(x, y, text) {
    context.font='15px courier'
    context.fillStyle = '#FF0'
    context.fillText(text, x, y);
  }

  Endstate.prototype.draw = function(gridWidth, gridHeight, textHead, textBody) {
    this._background(gridWidth, gridHeight)
    this._text(gridWidth * 8, gridHeight * 10, textHead);
    this._text(gridWidth * 6, gridHeight * 11, textBody);
  };

  exports.Endstate = Endstate;
})(this);
