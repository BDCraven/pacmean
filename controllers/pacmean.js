var world = new World;

canvas = document.getElementById('global-canvas');
context = canvas.getContext('2d');

context.fillStyle='black';
context.fillRect(0,0,canvas.width,canvas.height);

world.display();
