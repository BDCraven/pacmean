'use strict';

describe("PacMean", function () {
  var pacMean;

  beforeEach(function () {
    pacMean = new PacMean(canvas.width/2, canvas.height/2);
  });

  describe("instantiation", function () {
    it("is created with set dimensions", function () {
      expect(pacMean.width).toEqual(28)
      expect(pacMean.height).toEqual(28)
    });

    it("starts at set co-ordinates", function () {
      expect(pacMean.xCoordinate()).toEqual(240);
      expect(pacMean.yCoordinate()).toEqual(240);
    });

    it("has a default speed", function () {
      expect(pacMean.SPEED).toEqual(1);
    });
  });

  describe("draw", function () {
    it("creates a new sprite", function () {
      pacMean.draw();
      expect(pacMean.sprite).toEqual(jasmine.any(Sprite));
    });
  });

  describe("xCoordinate", function () {
    it("returns the current x co-ordinate", function () {
      expect(pacMean.xCoordinate()).toEqual(240);
    });
  });

  describe("yCoordinate", function () {
    it("returns the current y co-ordinate", function () {
      expect(pacMean.yCoordinate()).toEqual(240);
    });
  });

  describe("goRight", function () {
    it("increases the x co-ordinate", function () {
      pacMean.goRight();
      expect(pacMean.xCoordinate()).toEqual(241);
    });

    it("resets its location on the board when it passes the right board edge", function () {
      pacMean.x = 480
      pacMean.goRight();
      expect(pacMean.xCoordinate()).toEqual(1);
    });
  });

  describe("goLeft", function () {
    it("decreases the x co-ordinate", function () {
      pacMean.goLeft();
      expect(pacMean.xCoordinate()).toEqual(239);
    });

    it("resets its location on the board when it passes the left board edge", function () {
      pacMean.x = 0
      pacMean.goLeft();
      expect(pacMean.xCoordinate()).toEqual(479);
    });
  });

  describe("goUp", function () {
    it("can have its y co-ordinate decreased", function () {
      pacMean.goUp();
      expect(pacMean.yCoordinate()).toEqual(239);
    });

    it("resets its location on the board when it passes the top board edge", function () {
      pacMean.y = 0
      pacMean.goUp();
      expect(pacMean.yCoordinate()).toEqual(479);
    });
  });

  describe("goDown", function () {
    it("can have its y co-ordinate increased", function () {
      pacMean.goDown();
      expect(pacMean.yCoordinate()).toEqual(241);
    });

    it("resets its location on the board when it passes the bottom board edge", function () {
      pacMean.y = 480
      pacMean.goDown();
      expect(pacMean.yCoordinate()).toEqual(1);
    });
  });

  describe("setting and getting the key", function (){
    it("receives and returns a key value", function () {
      pacMean.setKey(37);
      expect(pacMean.getKey()).toEqual(37);
    });
  });
});
