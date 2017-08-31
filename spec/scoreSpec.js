'use strict';

describe('Score', function() {
  var score;

  beforeEach(function() {
    score = new Score(50,50)
  });

  describe ('constructor', function() {
    it ('can be created with a value of 0', function() {
      expect(score.value).toEqual(0);
    });
  });

  describe ('increase', function() {
    it ('increases the score by argument given', function() {
      score.increase(1);
      expect(score.value).toEqual(1);
    });
  });
});
