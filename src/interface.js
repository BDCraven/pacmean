canvas = document.getElementById('global-canvas');
context = canvas.getContext('2d');
var  wacka;

window.onload=function() {
  var openingTheme = new Audio('assets/pacman_beginning.wav');
  openingTheme.play();

  wacka = new Wacka(10, 'assets/wacka5.wav');

  var gameController = new GameController();
  window.addEventListener('keydown', function (e) {
    if (e.keyCode >= 37 && e.keyCode <= 40)
      gameController.setKey(e.keyCode);
  });
  window.setInterval(function () {
    gameController.updateGameArea();
  }, 160);
};
