function Ball() {
  // initialise coordinates
  this.position = [50, 50];

  // initialise ball speed (vector[horizontal, vertical])
  this.speed = [10, 10];
}

Ball.prototype.render = function(context) {
  context.beginPath();
  // arc: (centerX, centerY, radius, startAngle, endAngle, (clockwise/anticlockwise))
  context.arc(this.position[0], this.position[1], 10, 0, 2 * Math.PI);
  context.fillStyle = 'white';
  context.fill();
};

Ball.prototype.move = function(canvas) {
  this.position[0] += this.speed[0];
  this.position[1] += this.speed[1];

  // horizontal bounce
  if (this.position[0] < 0 || this.position[0] > canvas.width) {
    this.speed[0] = -this.speed[0];
  }

  // vertical bounce
  if (this.position[1] < 0 || this.position[1] > canvas.height) {
    this.speed[1] = -this.speed[1];
  }
};




function Game() {
  this.canvas = document.querySelector('#canvas');
  this.context = this.canvas.getContext('2d');
  //this.context.scale(2, 2);
}

Game.prototype.resetCanvas = function() {
  this.context.fillStyle = 'gray';
  this.context.fillRect(0,0,this.canvas.width,this.canvas.height);
};

Game.prototype.play = function(ball) {
  setInterval(function() {
    this.resetCanvas();
    ball.render(game.context);
    ball.move(this.canvas);
  }.bind(this), 17);
};




// start game
var game = new Game();
ball = new Ball();
game.play(ball);

// debug: stop ball after 3s
setTimeout(function() {
  ball.speed = [0, 0];
}, 3000);
