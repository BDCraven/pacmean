'use strict';

describe ('World', function() {
  var world, wall;

  beforeEach(function() {
    world = new World;
    wall = world.getWall();
  });

  describe ('constructor', function() {
    it('can be created with a grid', function() {
      expect(world).toBeDefined();
    });
  });

  describe('display', function() {
    it('displays the wall when the grid has a wall element', function() {
      spyOn(wall, 'displayWall')
      world.draw();
      expect(wall.displayWall.calls.count()).toEqual(211)
    });
  });

});
