'use strict';

function Sprite() {
	this.pacMeanImg = new Image();
	this.pacMeanImg.src = "src/images/PacManSpritesDemo.gif";
	this.width = 28.5;
	this.height = 28.5;
  this.dwidth = 25;
	this.dheight = 25;
	this.numberOfFrames = 3;
	this.currentFrame = 0;
	this.separation = 32;
	this.frameIndexes = [[6, 5, 0], [2, 1, 0], [4, 3, 0], [8, 7, 0]];
}

Sprite.prototype.setDirection = function (key) {
	this.direction = key;
};

Sprite.prototype.setCoordinates = function (x, y) {
	this.x = x;
	this.y = y;
};

Sprite.prototype.getDirection = function () {
	if (this.direction === 37) {return 1}
	if (this.direction === 38) {return 2}
	if (this.direction === 39) {return 0}
	if (this.direction === 40) {return 3}
};

Sprite.prototype.render = function() {
	context.drawImage(
		this.pacMeanImg,
		2 + this.frameIndexes[this.getDirection()][this.currentFrame] * this.separation,
		2,
		this.width,
		this.height,
		this.x,
		this.y,
		this.dwidth,
		this.dheight);
};

Sprite.prototype.update = function () {
	if (this.currentFrame < this.numberOfFrames - 1) {
		this.currentFrame += 1;
	} else {
		this.currentFrame = 0;
	}
};
