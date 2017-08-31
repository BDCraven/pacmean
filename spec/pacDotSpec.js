'use strict';

describe('PacDot', function() {
  var pacDot;

  beforeEach(function() {
    pacDot = new PacDot(3,3,'#fff')
  });

  describe ('constructor', function() {
    it ('can be created with height, width, and colour', function() {
      expect(pacDot).toBeDefined();
    });
  });
});
