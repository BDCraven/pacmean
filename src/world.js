'use strict';

(function(exports){
  function World() {
    this._ELEMENT_WIDTH = 25;
    this._ELEMENT_HEIGHT = 25;

    this._grid = [
      [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
      [1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1],
      [1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,1,1,0,1],
      [1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,1,1,0,1],
      [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
      [1,0,1,1,0,1,0,1,1,1,1,1,0,1,0,1,1,0,1],
      [1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1],
      [1,1,1,1,0,1,1,1,0,1,0,1,1,1,0,1,1,1,1],
      [0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0],
      [1,1,1,1,0,1,0,1,1,0,1,1,0,1,0,1,1,1,1],
      [0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0],
      [1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,1,1,1,1],
      [0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0],
      [1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,1,1,1,1],
      [1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1],
      [1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,1,1,0,1],
      [1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1],
      [1,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1,1],
      [1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1],
      [1,0,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,0,1],
      [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
      [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    ];

    this._MAX_ELEMENTS_X = this._grid.length;
    this._MAX_ELEMENTS_Y = this._grid[0].length;

    this._wall = new Wall(this._ELEMENT_WIDTH, this._ELEMENT_HEIGHT);
  };

  World.prototype.getWall = function() {
    return this._wall;
  };

  World.prototype.draw = function() {
    for (var i = 0; i < this._MAX_ELEMENTS_X; i++ ) {
      for (var j = 0; j < this._MAX_ELEMENTS_Y; j++) {
        if(this._grid[i][j] === 1)
          this._wall.displayWall(j * this._ELEMENT_WIDTH , i * this._ELEMENT_HEIGHT);
      }
    }
  };

  World.prototype.isWall = function(pacmeanX,pacmeanY) {
    var j = pacmeanX / this._ELEMENT_WIDTH;
    var i = pacmeanY / this._ELEMENT_HEIGHT;
    if(this._grid[i][j] === 1) {
      return true;
    } else {
      return false;
    };
  };

  exports.World = World;
})(this);
