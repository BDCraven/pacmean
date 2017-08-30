'use strict';
var context = {
  fillRect: function () {
  }
}

describe("PacMean", function () {
  var pacMean;

  beforeEach(function () {
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
});
