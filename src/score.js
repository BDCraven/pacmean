'use strict';

(function(exports){
  function Score() {
    this.value = 0
  };

  Score.prototype.increase = function(amount) {
    this.value += amount;
  }

  Score.prototype.draw = function(gridWidth, gridHeight) {
    context.font='15px courier'
    context.fillText("score: " + this.value,gridWidth,gridHeight/2);
    document.getElementById('score').innerHTML = this.value;
  };

  exports.Score = Score;
})(this);
