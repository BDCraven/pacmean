'use strict';
var context = {
  fillRect: function () {
  }
}

describe("PacMean", function () {
  var pacMean;

  beforeEach(function () {
    spyOn(PacMean.prototype, "draw")
    pacMean = new PacMean(10, 120);
  });

  it("is created with set dimensions", function () {
    expect(pacMean.width).toEqual(28)
    expect(pacMean.height).toEqual(28)
  });

  it("starts at set co-ordinates", function () {
    expect(pacMean.getX()).toEqual(10);
    expect(pacMean.getY()).toEqual(120);
  });

  it("has a default speed", function () {
    expect(pacMean.SPEED).toEqual(1);
  });

  it("can have its x co-ordinate increased", function () {
    pacMean.goRight();
    expect(pacMean.getX()).toEqual(11);
  });

  it("can have its x co-ordinate decreased", function () {
    pacMean.goLeft();
    expect(pacMean.getX()).toEqual(9);
  });

  it("can have its y co-ordinate decreased", function () {
    pacMean.goUp();
    expect(pacMean.getY()).toEqual(119);
  });

  it("can have its y co-ordinate increased", function () {
    pacMean.goDown();
    expect(pacMean.getY()).toEqual(121);
  });
});
