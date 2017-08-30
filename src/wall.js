'use strict';

var Wall = function (width, height, colour) {
  var self = this;
  self._width = width; //Add an || here in case argument hasn't been passed
  self._height = height;
  self._colour = colour;
};
