'use strict';

describe ('World', function() {
  var world;

  beforeEach(function() {
    world = new World;
  });

  describe ('constructor', function() {

    it('can be created', function() {
      expect(world).toBeDefined();
    });
  });
});
