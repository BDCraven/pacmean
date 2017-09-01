describe("Ghost", function () {
  var pinky;

  beforeEach(function () {
    pinky = new Ghost();
  });

  describe("look", function () {
    it("sets the values of where the PacMean is", function () {
      pinky.look(1, 2);
      expect(pinky.pacMeanX).toEqual(1);
      expect(pinky.pacMeanY).toEqual(2);
    });
  });

  describe("chooseDirection", function () {
    it("can choose to go horizontally", function () {
      spyOn(Math, "floor").and.returnValue(1);
      spyOn(pinky, "_leftOrRight");
      pinky.chooseDirection();
      expect(pinky._leftOrRight).toHaveBeenCalled();
    });

    it("can choose to go vertically", function () {
      spyOn(Math, "floor").and.returnValue(0);
      spyOn(pinky, "_upOrDown");
      pinky.chooseDirection();
      expect(pinky._upOrDown).toHaveBeenCalled();
    });
  });

  describe("follow", function () {
    it("returns a movement function based on the direction", function () {
      pinky.direction = 37;
      expect(pinky.follow()).toEqual(pinky.goLeft());
    });
  });

  describe("goRight", function () {
    it("increases the x co-ordinate", function () {
      pinky.goRight();
      expect(pinky.xCoordinate()).toEqual(300);
    });
  });

  describe("goLeft", function () {
    it("decreases the x co-ordinate", function () {
      pinky.goLeft();
      expect(pinky.xCoordinate()).toEqual(240);
    });
  });

  describe("goUp", function () {
    it("can have its y co-ordinate decreased", function () {
      pinky.goUp();
      expect(pinky.yCoordinate()).toEqual(240);
    });
  });

  describe("goDown", function () {
    it("can have its y co-ordinate increased", function () {
      pinky.goDown();
      expect(pinky.yCoordinate()).toEqual(300);
    });
  });
});
