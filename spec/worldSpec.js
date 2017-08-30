'use strict';

describe ('World', function() {
  var world, grid, wall;

  beforeEach(function() {
    world = new World;
    grid = world.getGrid();
    wall = world.getWall();
  });

  describe ('constructor', function() {
    it('can be created with a grid', function() {
      expect(world).toBeDefined();
    });
  });

  describe('display', function() {
    it('displays the wall when the grid has a wall element', function() {
      world.display();
      expect(wall.callCount).toEqual(8);
    });
  });

});
