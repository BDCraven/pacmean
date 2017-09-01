function Ghost() {
  this.x = 8 * GRID_ELEMENT_WIDTH;
  this.y = 10 * GRID_ELEMENT_HEIGHT;
  this.speed = GRID_ELEMENT_WIDTH;
}

Ghost.prototype.draw = function () {
  context.fillStyle='pink';
  context.fillRect(this.x,this.y,GRID_ELEMENT_WIDTH,GRID_ELEMENT_HEIGHT);
};
