'use strict';

(function(exports){
  function World() {
    this._ELEMENT_WIDTH = 40;
    this._ELEMENT_HEIGHT = 40;

    this._grid = [
      [1,1,1,1,1,1,1,1,1,1,1,1],
      [1,0,1,0,0,0,0,0,0,0,0,1],
      [1,0,0,0,0,0,0,0,0,0,0,1],
      [1,0,0,0,0,0,0,0,0,0,0,1],
      [1,0,0,0,0,0,0,0,0,0,0,1],
      [1,0,0,0,1,0,0,1,0,0,0,1],
      [1,0,0,0,1,0,0,1,0,0,0,1],
      [1,0,0,0,0,0,0,0,0,0,0,1],
      [1,0,0,0,0,0,0,0,0,0,0,1],
      [1,0,0,0,0,0,0,0,0,0,0,1],
      [1,0,0,0,0,0,0,0,0,0,0,1],
      [1,1,1,1,1,1,1,1,1,1,1,1]
    ];

    this._MAX_ELEMENTS_X = this._grid.length;
    this._MAX_ELEMENTS_Y = this._grid[0].length;

    this._wall = new Wall(this._ELEMENT_WIDTH, this._ELEMENT_HEIGHT);
  };

  World.prototype.getWall = function() {
    return this._wall;
  };

  World.prototype.getGrid = function() {
    return this._grid;
  };

  World.prototype.display = function() {
    console.log(this._grid);
    for (var x = 0; x < this._MAX_ELEMENTS_X; x++ ) {
      for (var y = 0; y < this._MAX_ELEMENTS_Y; y++) {
        if(this._grid[x][y] === 1)
          this._wall.display(x*this._ELEMENT_WIDTH,y*this._ELEMENT_HEIGHT);
      }
    }
  };

  exports.World = World;
})(this);
