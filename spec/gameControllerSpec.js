'use strict';

var context = {
  fillRect: function () {
  },
  clearRect: function () {
  },
};

var canvas = {
  width: 480,
  height: 480,
};


describe("GameController", function () {
  var gameController;

  beforeEach(function () {
    gameController = new GameController();
  });

  describe("instantiation", function () {
    it("has default co-ordinates for PacMean", function () {
      expect(gameController.pacMeanX).toEqual(240);
      expect(gameController.pacMeanY).toEqual(240);
    });

    it("instantiates a world when it is created", function () {
      expect(gameController.world).toEqual(jasmine.any(World));
    });

    it("instantiates a PacMean when it is created", function () {
      expect(gameController.pacMean).toEqual(jasmine.any(PacMean));
    });
  });

  describe("setKey", function () {
    it("sets the direction based on keycode", function () {
      gameController.setKey(37);
      expect(gameController.key).toEqual(37);
    });
  });

  describe("updateGameArea", function () {
    it("checks the direction PacMean is moving", function () {
      spyOn(gameController, "returnDirection");
      gameController.updateGameArea();
      expect(gameController.returnDirection).toHaveBeenCalled();
    });

    it("draws PacMean", function () {
      spyOn(PacMean.prototype, "draw");
      gameController.updateGameArea();
      expect(PacMean.prototype.draw).toHaveBeenCalled();
    });

    it("sets its pacMeanX value relative to the x co-ordinate of the PacMean object", function () {
      spyOn(gameController.pacMean, "xCoordinate").and.returnValue(1);
      gameController.updateGameArea();
      expect(gameController.pacMeanX).toEqual(1);
    });

    it("sets its pacMeanX value relative to the x co-ordinate of the PacMean object", function () {
      spyOn(gameController.pacMean, "yCoordinate").and.returnValue(1);
      gameController.updateGameArea();
      expect(gameController.pacMeanY).toEqual(1);
    });

    it("calls its clear function to reset the board", function () {
      spyOn(gameController, "clear");
      gameController.updateGameArea();
      expect(gameController.clear).toHaveBeenCalled();
    });
  });

  describe("clear", function () {
    it("clears the canvas", function () {
      spyOn(context, "clearRect");
      gameController.clear();
      expect(context.clearRect).toHaveBeenCalled();
    });

    it("refills the canvas", function () {
      spyOn(context, "fillRect");
      gameController.clear();
      expect(context.fillRect).toHaveBeenCalled();
    });

    it("redraws the world", function () {
      spyOn(gameController.world, "display");
      gameController.clear();
      expect(gameController.world.display).toHaveBeenCalled();
    });

    it("recreates PacMean", function () {
      spyOn(window, "PacMean");
      gameController.clear();
      expect(window.PacMean).toHaveBeenCalled();
    });
  });

  describe("returnKey", function () {
    it("returns the goLeft function if the key is set to 37", function () {
      gameController.setKey(37);
      expect(gameController.returnDirection()).toEqual(gameController.pacMean.goLeft());
    });

    it("returns the goUp function if the key is set to 38", function () {
      gameController.setKey(38);
      expect(gameController.returnDirection()).toEqual(gameController.pacMean.goUp());
    });

    it("returns the goRight function if the key is set to 39", function () {
      gameController.setKey(39);
      expect(gameController.returnDirection()).toEqual(gameController.pacMean.goRight());
    });

    it("returns the goDown function if the key is set to 40", function () {
      gameController.setKey(40);
      expect(gameController.returnDirection()).toEqual(gameController.pacMean.goDown());
    });
  });
});
