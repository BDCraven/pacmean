canvas = document.getElementById('global-canvas');
context = canvas.getContext('2d');

window.onload=function() {
  var gameController = new GameController();
  window.addEventListener('keydown', function (e) {
    gameController.setKey(e.keyCode);
  });
  window.setInterval(function () {
    gameController.updateGameArea();
  }, 10);
};
