'use strict';

describe ('World', function() {
  var world, wall, pacDot;

  beforeEach(function() {
    world = new World;
    wall = world.getWall();
    pacDot = world.getPacDot();
  });

  describe ('constructor', function() {
    it('can be created with a grid', function() {
      expect(world).toBeDefined();
    });
  });

  describe('displayWall', function() {
    it('displays the wall when the grid has a wall element', function() {
      spyOn(wall, 'displayWall')
      world.draw();
      expect(wall.displayWall.calls.count()).toEqual(211)
    });
  });

  describe('displayPacDot', function() {
    it('displays the wall when the grid has a wall element', function() {
      spyOn(pacDot, 'displayPacDot')
      world.draw();
      expect(pacDot.displayPacDot.calls.count()).toEqual(191)
    });
  });

});
