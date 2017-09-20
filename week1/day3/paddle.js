function Paddle(position) {
  // initialise coordinates
  this.position = position;
}

Paddle.prototype.render = function(context) {
  context.fillStyle = 'black';
  context.fillRect(this.position[0],this.position[1],6,100);
};

Paddle.prototype.moveUp = function() {
  // stop loop if button isn't pressed anymore
  if (!this.upPressed) {
    return;
  }

  // check if topmost position is reached
  if (this.position[1] > 10) {
    this.position[1] -= 15;
  }
  this.render(game.context); // TODO: game??? this = Paddle
  setTimeout(this.moveUp.bind(this), 17);
};

Paddle.prototype.moveDown = function() {
  // stop loop, if button isn't pressed anymore
  if (!this.downPressed) {
    return;
  }

  // check if bottom position is reached
  if (this.position[1] < 390) {
    this.position[1] += 15;
  }
  this.render(game.context); // TODO: game??? this = Paddle
  setTimeout(this.moveDown.bind(this), 17);
};
