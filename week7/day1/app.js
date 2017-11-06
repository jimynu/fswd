var snake = {
  head: { x: 5, y: 8 },
  tail: [ { x: 5, y: 9 }, { x: 5, y: 10 } ],
  direction: { x: 0, y: -1 } // up
};

var level = 0;

var interval;

$(document).ready( function() {

  createCells();

  renderSnake();

  interval = setInterval(function() {
    moveSnake();
    renderSnake();
  }, 200);

  // change direction when key is pressed
  $(document).keydown( function(event) {
    if (event.keyCode === 38) { // up
      if (snake.direction.y === 0) { snake.direction = { x: 0, y: -1 }; }
    } else if (event.keyCode === 40) { // down
      if (snake.direction.y === 0) { snake.direction = { x: 0, y: 1 }; }
    } else if (event.keyCode === 37) { // left
      if (snake.direction.x === 0) { snake.direction = { x: -1, y: 0 }; }
    } else if (event.keyCode === 39) { // right
      if (snake.direction.x === 0) { snake.direction = { x: 1, y: 0 }; }
    }
  });

});


function createCells() {
  var container = $('#container');
  var cell = '<div class="cell"></div>';
  var row = 0;
  var col = 0;

  for (var i = 0; i < 100; i++) {
    container.append(cell);
    $('.cell').last().attr('data-row', row%10+1);
    $('.cell').last().attr('data-col', col%10+1);

    col++;
    if (col%10 === 0) {
      row++;
    }
  }
}



function renderSnake() {
  snake.tail.forEach(function(cell) {
    activateCell(cell);
  });

  makeHead(snake.head);
}


function selectCell(cell) {
  return $('.cell').filter(function() {
    return $(this).data('row') === cell.y && $(this).data('col') === cell.x;
  });
}



function makeHead(cellXY) {
  var cell = selectCell(cellXY);
  cell.removeClass('active');
  cell.addClass('head');
}

function activateCell(cellXY) {
  var cell = selectCell(cellXY);
  cell.removeClass('head');
  cell.addClass('active');
}

function removeCell(cellXY) {
  var cell = selectCell(cellXY);
  cell.removeClass('active head');
}



function moveSnake() {
  // pop one from tail
  level++;
  if ( level%10 != 0) {
    removeCell(snake.tail.pop());
  }

  // remove head and make it part of tail
  snake.tail.unshift(snake.head);

  // new head
  snake.head = {x: snake.head.x + snake.direction.x, y: snake.head.y + snake.direction.y};

  // borders
  if (snake.head.x === 11) {
    snake.head.x = 1;
  } else if (snake.head.x === 0) {
    snake.head.x = 10;
  } else if (snake.head.y === 11) {
    snake.head.y = 1;
  } else if (snake.head.y === 0) {
    snake.head.y = 10;
  }

  // check for collision
  snake.tail.forEach( function(cell) {
    if (snake.head.x === cell.x && snake.head.y === cell.y) {
      console.log('GAME OVER!');
      clearInterval(interval);
    }
  } );
}
