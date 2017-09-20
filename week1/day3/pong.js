function Game() {
  this.canvas = document.querySelector('#canvas');
  this.context = this.canvas.getContext('2d');
  //this.context.scale(2, 2);

  // initialise paddle
  this.paddle1 = new Paddle([9, 200]);
  this.paddle2 = new Paddle([585, 200]);

  // listen for keys to move paddle -> set controller (upPressed, downPressed) in the respective paddle (1/2) to true
  // keyCodes p1: w=87, s=83
  // keyCodes p2: up=38, down=40
  var myThis = this;
  document.addEventListener('keydown', function(event) {
    //console.log(event.keyCode);
    if(event.keyCode === 87) {
      myThis.paddle1.upPressed = true;
      myThis.paddle1.moveUp(); // TODO: game...
    } else if(event.keyCode === 83) {
      myThis.paddle1.downPressed = true;
      myThis.paddle1.moveDown();
    } else if(event.keyCode === 38) {
      myThis.paddle2.upPressed = true;
      myThis.paddle2.moveUp();
    } else if(event.keyCode === 40) {
      myThis.paddle2.downPressed = true;
      myThis.paddle2.moveDown();
    }
  });

  // listen for key release -> set controller to false
  document.addEventListener('keyup', function(event) {
    if(event.keyCode === 87) {
      game.paddle1.upPressed = false;
    } else if(event.keyCode === 83) {
      game.paddle1.downPressed = false;
    } else if(event.keyCode === 38) {
      game.paddle2.upPressed = false;
    } else if(event.keyCode === 40) {
      game.paddle2.downPressed = false;
    }
  });
}

Game.prototype.resetCanvas = function() {
  this.context.fillStyle = '#568955';
  this.context.fillRect(0,0,this.canvas.width,this.canvas.height);
};

Game.prototype.play = function(ball) {
  setInterval(function() {
    this.resetCanvas();
    ball.render(this.context);
    this.paddle1.render(this.context);
    this.paddle2.render(this.context);
    ball.move(this.canvas);
    this.checkCollisions();
  }.bind(this), 17);
};

Game.prototype.checkCollisions = function() {
  // ball hits left/right wall

    // count points
    // start new game

  // ball hits left paddle (paddle1)
  // - horizontally: 9px (margin) + 6px (paddle) + 5px (ball radius) –> bounce at 20px
  // - vertically: paddle+50px = middle of paddle (paddle continues for 50px on both sides). subtract ball position, make positive number, compare.
  if (ball.position[0] <= 20 && Math.abs(this.paddle1.position[1] + 50 - ball.position[1]) < 50) {
    console.log('hit left paddle');
    // switch horizontal direction
    ball.speed[0] = -ball.speed[0];
  }

  // ball hits right paddle (paddle2)
  // canvas.width - 20 = 580
  if (ball.position[0] >= 580 && Math.abs(this.paddle2.position[1] + 50 - ball.position[1]) < 50) {
    console.log('hit right paddle');
    // switch horizontal direction
    ball.speed[0] = -ball.speed[0];
  }
};



// start game
var game = new Game();
ball = new Ball();
game.play(ball);

// debug: stop ball after some seconds
setTimeout(function() {
  ball.speed = [0, 0];
}, 2000);
