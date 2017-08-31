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
    it('displays the pacDot when the grid has a pacDot element', function() {
      spyOn(pacDot, 'displayPacDot')
      world.draw();
      expect(pacDot.displayPacDot.calls.count()).toEqual(190)
    });
  });

  describe('isPacDot', function() {
    it('returns true if coordinate has a pacDot', function() {
      expect(world.isPacDot(240,540)).toBe(true);
    });
  });

  describe('gridToZero', function() {
    it('resets a coordinte to 0 in the grid', function() {
      expect(world._grid[16][7]).toEqual(2);
      world.gridToZero(210,480);
      expect(world._grid[16][7]).toEqual(0);
    })
  })

});
