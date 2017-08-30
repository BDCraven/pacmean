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
    expect(pacMean.width).toEqual(30)
    expect(pacMean.height).toEqual(30)
  });

  it("starts at set co-ordinates", function () {
    expect(pacMean.x).toEqual(10);
    expect(pacMean.y).toEqual(120);
  });

  it("has a default speed", function () {
    expect(pacMean.SPEED).toEqual(1);
  });

  it("calls its draw function on instantiation", function () {
    expect(pacMean.draw).toHaveBeenCalled();
  });

  it("can have its x co-ordinate increased", function () {
    pacMean.goRight();
    expect(pacMean.x).toEqual(11);
  });

  it("can have its x co-ordinate decreased", function () {
    pacMean.goLeft();
    expect(pacMean.x).toEqual(9);
  });

  it("can have its y co-ordinate decreased", function () {
    pacMean.goUp();
    expect(pacMean.y).toEqual(119);
  });

  it("can have its y co-ordinate increased", function () {
    pacMean.goDown();
    expect(pacMean.y).toEqual(121);
  });
});
