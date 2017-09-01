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
    });
  });

  describe('isWall', function() {
    it('detects a wall to the left when wall exists', function() {
      expect(world.isWall(6 * 30, 9 * 30, 37)).toBe(true);
    });

    it('detects no wall to the left when no wall exists', function() {
      expect(world.isWall(6 * 30, 10 * 30, 37)).toBe(false);
    });

    it('detects a wall to the right when wall exists', function() {
      expect(world.isWall(6 * 30, 10 * 30, 39)).toBe(true);
    });

    it('detects no wall to the right when no wall exists', function() {
      expect(world.isWall(5 * 30, 10 * 30, 39)).toBe(false);
    });

    it('detects a wall to the top when wall exists', function() {
      expect(world.isWall(9 * 30, 16 * 30, 38)).toBe(true);
    });

    it('detects no wall to the top when no wall exists', function() {
      expect(world.isWall(8 * 30, 16 * 30, 38)).toBe(false);
    });

    it('detects a wall to the bottom when wall exists', function() {
      expect(world.isWall(7 * 30, 16 * 30, 40)).toBe(true);
    });

    it('detects no wall to the bottom when no wall exists', function() {
      expect(world.isWall(6 * 30, 16 * 30, 40)).toBe(false);
    });
  });

  describe ('haveAllPacDotsBeenEaten', function() {
    it ('return false if all pac dots have not been eaten', function() {
      expect(world.haveAllPacDotsBeenEaten()).toBe(false);
    });

    it ('return true if all pac dots have been eaten', function() {
      for (var i = 0; i < 22; i++ ) {
        for (var j = 0; j < 19; j++) {
          world.gridToZero(j * GRID_ELEMENT_WIDTH, i * GRID_ELEMENT_HEIGHT);
        };
      };
      expect(world.haveAllPacDotsBeenEaten()).toBe(true);
    });
  });

});
