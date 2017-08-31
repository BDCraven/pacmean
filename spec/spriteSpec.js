'use strict';

describe("Sprite", function () {
  var sprite;

  beforeEach(function () {
    sprite = new Sprite();
  });

  describe("instantiation", function () {
    it("receives a key value", function () {
      sprite.setDirection(37)
      expect(sprite.direction).toEqual(37);
    });
  });

  describe("getDirection", function () {
    it("returns 1 if it is facing left", function () {
      sprite.setDirection(37)
      expect(sprite.getDirection()).toEqual(1);
    });

    it("returns 2 if it is facing up", function () {
      sprite.setDirection(38)
      expect(sprite.getDirection()).toEqual(2);
    });

    it("returns 0 if it is facing right", function () {
      sprite.setDirection(39)
      expect(sprite.getDirection()).toEqual(0);
    });

    it("returns 3 if it is facing down", function () {
      sprite.setDirection(40)
      expect(sprite.getDirection()).toEqual(3);
    });
  });

  describe("render", function () {
    it("draws a shape on the canvas", function () {
      spyOn(context, "drawImage")
      sprite.setDirection(37);
      sprite.render();
      expect(context.drawImage).toHaveBeenCalled();
    });
  });

  describe("update", function () {
    it("increments the tick count", function () {
      sprite.update();
      expect(sprite.tickCount).toEqual(1);
    });

    it("resets the tick count if it exceeds the number of ticks per frame", function () {
      sprite.tickCount = sprite.ticksPerFrame;
      sprite.update();
      expect(sprite.tickCount).toEqual(0);
    });

    it("increments the current frame if it is less than the total number of frames", function () {
      sprite.tickCount = sprite.ticksPerFrame;
      sprite.update();
      expect(sprite.currentFrame).toEqual(1);
    });

    it("resets the current frame if it is greater than the total number of frames", function () {
      sprite.currentFrame = sprite.numberOfFrames - 1
      sprite.tickCount = sprite.ticksPerFrame;
      sprite.update();
      expect(sprite.currentFrame).toEqual(0);
    });
  });
});
