		var RIGHT  = 0;
		var LEFT = 1;
		var UP = 2;
		var DOWN = 3;

			// function arrowControl(e) {
			// 	e = e || window.event;
			//
			// 	if (e.key == 'ArrowLeft') {
			// 		pacMean.setDirection(LEFT);
			// 	} else if (e.key == 'ArrowRight') {
			// 		pacMean.setDirection(RIGHT);
			// 	} else if (e.key == 'ArrowUp') {
			// 		pacMean.setDirection(UP);
			// 	} else if (e.key == 'ArrowDown') {
			// 		pacMean.setDirection(DOWN);
			// 	}
			// 	if (e.key == 'Meta') {
			// 		pacMean.setSpeed(7);
			// 	};
			// }

		var pacMeanImg = new Image();
		pacMeanImg.src = "images/PacManSpritesDemo.gif";

		function gameLoop () {
		  window.requestAnimationFrame(gameLoop);

		  pacMean.update();
		  pacMean.render();
		}

		function sprite (options) {

			var that = {},
				x = 0, y = 0,
				frameIndex = 0,
				tickCount = 0,
				ticksPerFrame = options.ticksPerFrame || 0,
				numberOfFrames = options.numberOfFrames || 1;
			var frameIndexes = [[6, 5, 0], [2, 1, 0], [4, 3, 0], [8, 7, 0]];
			var RIGHT  = 0;
			var LEFT = 1;
			var UP = 2;
			var DOWN = 3;
			var dir = RIGHT;
			// var speed = 3;

			that.context = options.context;
			that.width = options.width;
			that.height = options.height;
			that.image = options.image;
			that.loop = options.loop;
			that.separation = options.separation;
			that.dwidth = options.dwidth;
			that.dheight = options.dheight;

			that.update = function () {
        tickCount += 1;

        if (tickCount > ticksPerFrame) {
        	tickCount = 0;

          // Go to the next frame
					if (frameIndex < numberOfFrames - 1) {
							// Go to the next frame
							frameIndex += 1;
					} else if (that.loop) {
							frameIndex = 0;
					}
				}

				// // Update position based on direction
				// // dir
				// 	if (dir == RIGHT) {
				// 		x += speed;
				// 	} else if (dir == LEFT) {
				// 		x -= speed;
				// 	} else if (dir == UP) {
				// 		y -= speed;
				// 	} else if (dir == DOWN) {
				// 		y += speed;
				// 	}
    	};

			that.render = function() {

				// Clear the canvas
				that.context.fillStyle = "black";
				that.context.fillRect(0, 0, 600, 600);

				// Draw the animation
				that.context.drawImage(
					that.image,
					2 + frameIndexes[dir][frameIndex] * that.separation,
					2,
					that.width,
					that.height,
					x,
					y,
					that.dwidth,
					that.dheight);
			};

			that.nudge = function(h, v){
				x += h;
				y += v
			};

			that.setDirection = function(direction) {
				dir = direction;
			}

			that.setSpeed = function(speeeeeed) {
				speed = speeeeeed;
			}
			return that;
		}

		var canvas = document.getElementById("pacMeanAnimation")
	  canvas.width = 600;
	  canvas.height = 600;

		var pacMean = sprite({
			context: canvas.getContext("2d"),
			width: 28.5,
			separation: 32,
			height: 28.5,
			image: pacMeanImg,
			numberOfFrames: 3,
			ticksPerFrame: 2,
			dwidth: 100,
			dheight: 100,
			loop: true
		});


	function renderSprite() {
		pacMean.render();
	}


	// Start the game loop as soon as the sprite sheet is loaded
			pacMeanImg.addEventListener("load", gameLoop);
