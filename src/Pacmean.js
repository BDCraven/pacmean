function PacMean(x, y) {
  this.width = 30;
  this.height = 30;
  this.x = x;
  this.y = y;
  ctx = context;
  ctx.fillStyle = "yellow";
  ctx.fillRect(this.x, this.y, this.width, this.height);
}
