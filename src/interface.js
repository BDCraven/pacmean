canvas = document.getElementById('global-canvas');
context = canvas.getContext('2d');

window.onload=function() {
  var gameController = new GameController();
  window.addEventListener('keydown', function (e) {
    if (e.keyCode >= 37 && e.keyCode <= 40)
      gameController.setKey(e.keyCode);
  });
  window.requestAnimationFrame(loopGame);

  function loopGame() {
    gameController.updateGameArea();
    requestAnimationFrame(loopGame);
  }
};
