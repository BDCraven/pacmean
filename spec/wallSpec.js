'use strict';

describe('Wall', function() {
  var wall;

  beforeEach(function() {
    wall = new Wall(50,50,'#00F')
  });

  describe ('constructor', function() {
    it ('can be created with a height, width, and colour', function() {
      expect(wall).toBeDefined();
    });
  });
});
