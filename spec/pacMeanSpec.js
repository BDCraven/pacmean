'use strict';

describe("PacMean", function () {
  var pacMean;

  beforeEach(function () {
    pacMean = new PacMean(270, 480);
  });

  describe("instantiation", function () {
    it("is created with set dimensions", function () {
      expect(pacMean.getWidth()).toEqual(28)
      expect(pacMean.getHeight()).toEqual(28)
    });

    it("starts at set co-ordinates", function () {
      expect(pacMean.xCoordinate()).toEqual(270);
      expect(pacMean.yCoordinate()).toEqual(480);
    });

    it("has a default speed", function () {
      expect(pacMean.getSpeed()).toEqual(30);
    });
  });

  describe("draw", function () {
    it("creates a new sprite", function () {
      pacMean.draw();
      expect(pacMean.getSprite()).toEqual(jasmine.any(Sprite));
    });
  });

  describe("xCoordinate", function () {
    it("returns the current x co-ordinate", function () {
      expect(pacMean.xCoordinate()).toEqual(270);
    });
  });

  describe("yCoordinate", function () {
    it("returns the current y co-ordinate", function () {
      expect(pacMean.yCoordinate()).toEqual(480);
    });
  });

  describe("goRight", function () {
    it("increases the x co-ordinate", function () {
      pacMean.goRight();
      expect(pacMean.xCoordinate()).toEqual(300);
    });

    it("resets its location on the board when it passes the right board edge", function () {
      pacMean.x = 670;
      pacMean.goRight();
      expect(pacMean.xCoordinate()).toEqual(0);
    });
  });

  describe("goLeft", function () {
    it("decreases the x co-ordinate", function () {
      pacMean.goLeft();
      expect(pacMean.xCoordinate()).toEqual(240);
    });

    it("resets its location on the board when it passes the left board edge", function () {
      pacMean.x = -30;
      pacMean.goLeft();
      expect(pacMean.xCoordinate()).toEqual(540);
    });
  });

  describe("goUp", function () {
    it("can have its y co-ordinate decreased", function () {
      pacMean.goUp();
      expect(pacMean.yCoordinate()).toEqual(450);
    });

    it("resets its location on the board when it passes the top board edge", function () {
      pacMean.y = -30;
      pacMean.goUp();
      expect(pacMean.yCoordinate()).toEqual(630);
    });
  });

  describe("goDown", function () {
    it("can have its y co-ordinate increased", function () {
      pacMean.goDown();
      expect(pacMean.yCoordinate()).toEqual(510);
    });

    it("resets its location on the board when it passes the bottom board edge", function () {
      pacMean.y = 690;
      pacMean.goDown();
      expect(pacMean.yCoordinate()).toEqual(0);
    });
  });

  describe("setting and getting the key", function (){
    it("receives and returns a key value", function () {
      pacMean.setKey(37);
      expect(pacMean.getKey()).toEqual(37);
    });
  });
});
