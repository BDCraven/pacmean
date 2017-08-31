'use strict';

var context = {
  fillRect: function () {
  },
  clearRect: function () {
  },
  drawImage: function () {
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
      expect(gameController.pacMeanX).toEqual(270);
      expect(gameController.pacMeanY).toEqual(480);
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
      spyOn(gameController.pacMean, "setKey");
      gameController.setKey(37);
      expect(gameController.pacMean.setKey).toHaveBeenCalled();
    });
  });

  describe("updateGameArea", function () {
    it("checks the direction PacMean is moving", function () {
      spyOn(gameController, "returnDirection");
      gameController.setKey(37);
      gameController.updateGameArea();
      expect(gameController.returnDirection).toHaveBeenCalled();
    });

    it("draws PacMean", function () {
      spyOn(PacMean.prototype, "draw");
      gameController.setKey(37);
      gameController.updateGameArea();
      expect(PacMean.prototype.draw).toHaveBeenCalled();
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
      spyOn(gameController.world, "draw");
      gameController.clear();
      expect(gameController.world.draw).toHaveBeenCalled();
    });

    it("recreates PacMean", function () {
      spyOn(gameController.pacMean, "draw");
      gameController.clear();
      expect(gameController.pacMean.draw).toHaveBeenCalled();
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
