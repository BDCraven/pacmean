'use strict';

(function(exports){
  var GRID_ELEMENT_WIDTH = 30;
  var GRID_ELEMENT_HEIGHT = 30;

  function World() {
    // 2 is a corrdor, 1 is a wall
    this._grid = [
      [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
      [1,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,1],
      [1,2,1,1,2,1,1,1,2,1,2,1,1,1,2,1,1,2,1],
      [1,2,1,1,2,1,1,1,2,1,2,1,1,1,2,1,1,2,1],
      [1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
      [1,2,1,1,2,1,2,1,1,1,1,1,2,1,2,1,1,2,1],
      [1,2,2,2,2,1,2,2,2,1,2,2,2,1,2,2,2,2,1],
      [1,1,1,1,2,1,1,1,2,1,2,1,1,1,2,1,1,1,1],
      [0,0,0,1,2,1,2,2,2,2,2,2,2,1,2,1,0,0,0],
      [1,1,1,1,2,1,2,1,1,0,1,1,2,1,2,1,1,1,1],
      [2,2,2,2,2,2,2,1,0,0,0,1,2,2,2,2,2,2,2],
      [1,1,1,1,2,1,2,1,1,1,1,1,2,1,2,1,1,1,1],
      [0,0,0,1,2,1,2,2,2,2,2,2,2,1,2,1,0,0,0],
      [1,1,1,1,2,1,2,1,1,1,1,1,2,1,2,1,1,1,1],
      [1,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,1],
      [1,2,1,1,2,1,1,1,2,1,2,1,1,1,2,1,1,2,1],
      [1,2,2,1,2,2,2,2,2,2,2,2,2,2,2,1,2,2,1],
      [1,1,2,1,2,1,2,1,1,1,1,1,2,1,2,1,2,1,1],
      [1,2,2,2,2,1,2,2,2,1,2,2,2,1,2,2,2,2,1],
      [1,2,1,1,1,1,1,1,2,1,2,1,1,1,1,1,1,2,1],
      [1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
      [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    ];

    this._NUM_ROWS = this._grid.length;
    this._NUM_COLS = this._grid[0].length;

    this._wall = new Wall(GRID_ELEMENT_WIDTH, GRID_ELEMENT_HEIGHT);
    this._pacdot = new PacDot(GRID_ELEMENT_WIDTH, GRID_ELEMENT_HEIGHT);
  };

  World.prototype.getWall = function() {
    return this._wall;
  };

  World.prototype.getPacDot = function() {
    return this._pacdot;
  };

  // i is the first array index, j is the second array index
  // As i changes we are going up / down in the array. Hence y coordinate is a function of i
  // As j changes we are going right / left in the array. Hence x coordinate is a function of j
  // Just remember x <-> j <-> width | y <-> i <-> height (read <-> as 'goes with')

  World.prototype.draw = function() {
    for (var i = 0; i < this._NUM_ROWS; i++ ) {
      for (var j = 0; j < this._NUM_COLS; j++) {
        if(this._grid[i][j] === 1)
          this._wall.displayWall(j * GRID_ELEMENT_WIDTH , i * GRID_ELEMENT_HEIGHT);
        if(this._grid[i][j] === 2)
          this._pacdot.displayPacDot(j * GRID_ELEMENT_WIDTH+(GRID_ELEMENT_WIDTH/2),i * GRID_ELEMENT_HEIGHT+(GRID_ELEMENT_HEIGHT/2));
      }
    }
  };

  World.prototype.isWall = function(pacMeanX, pacMeanY, key) {
    var i, j;

    if (key === undefined) return false;

    // Calculating new grid position if pacMean moved
    // ceil before subtracting, floor before adding
    if (key === 37) { //Left, so decrement j
      j = Math.ceil(pacMeanX * 1.0 / GRID_ELEMENT_WIDTH) - 1;
      i = Math.floor(pacMeanY / GRID_ELEMENT_HEIGHT);
    } else if (key === 38){ //Up, so decrement i
      j = Math.floor(pacMeanX / GRID_ELEMENT_WIDTH);
      i = Math.ceil(pacMeanY * 1.0 / GRID_ELEMENT_HEIGHT) - 1;
    } else if (key === 39){ //Right, so increment j
      j = Math.floor(pacMeanX * 1.0 / GRID_ELEMENT_WIDTH) + 1;
      i = Math.floor(pacMeanY / GRID_ELEMENT_HEIGHT);
    } else if (key === 42){ //Down, so increment i
      j = Math.floor(pacMeanX / GRID_ELEMENT_WIDTH);
      i = Math.floor(pacMeanY * 1.0 / GRID_ELEMENT_HEIGHT) + 1;
    }

    if(this._grid[i][j] === 1) {
      return true;
    } else {
      return false;
    };
  };

  exports.World = World;
  exports.GRID_ELEMENT_WIDTH  = GRID_ELEMENT_WIDTH;
  exports.GRID_ELEMENT_HEIGHT  = GRID_ELEMENT_HEIGHT;
})(this);
