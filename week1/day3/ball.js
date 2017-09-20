function Ball() {
  // initialise coordinates
  this.position = [300, 250];

  // initialise ball speed (vector[horizontal, vertical])
  this.speed = [10, 4];
}

Ball.prototype.render = function(context) {
  context.beginPath();
  // arc: (centerX, centerY, radius, startAngle, endAngle, (clockwise/anticlockwise))
  context.arc(this.position[0], this.position[1], 5, 0, 2 * Math.PI);
  context.fillStyle = 'white';
  context.fill();
};

Ball.prototype.move = function(canvas) {
  this.position[0] += this.speed[0];
  this.position[1] += this.speed[1];

  // horizontal bounce left
  if (this.position[0] < 10) {
    this.speed[0] = -this.speed[0];
    console.log('+1 for right player!');
  }

  // horizontal bounce right
  if (this.position[0] > canvas.width-10) {
    this.speed[0] = -this.speed[0];
    console.log('+1 for left player!');
  }

  // vertical bounce
  if (this.position[1] < 10 || this.position[1] > canvas.height-10) {
    this.speed[1] = -this.speed[1];
  }
};
