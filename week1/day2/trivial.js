// constructor for class Trivial
function Trivial() {
  this.questions = [];
  this.currentQstnIndex = 0;
  this.players = [];
  this.currentPlayerIndex = 0;
}

// method: add question
Trivial.prototype.addQuestion = function(qstn) {
  this.questions.push(qstn);
  console.log(this.questions);
};

// method: ask one question
Trivial.prototype.askQuestion = function() {
  // display the challenge
  var question = this.questions[this.currentQstnIndex];
  var player = this.players[this.currentPlayerIndex];
  var givenAnswer;
  if ( question.choices === 'binary' ) {
    // yes/no question
    givenAnswer = window.confirm(player.display() + question.title);
  } else {
    // multiple choice
    givenAnswer = (window.prompt(player.display() + question.display()))
        .toUpperCase();
  }


  // check if answer is right
  if (givenAnswer === question.correctAnswer) {
    window.alert('Congrats!');
    player.addAnswer(true, question.category);
  } else {
    window.alert('Wrong answer, my dear.');
    player.addAnswer(false, question.category);
  }
};

// method: increase current question index
Trivial.prototype.next = function() {
  this.currentQstnIndex++;
  this.currentPlayerIndex++;
  if (this.currentPlayerIndex === this.players.length) {
    this.currentPlayerIndex = 0;
  }
  console.log('next player:' + this.currentPlayerIndex);
};

// method: ask all questions
Trivial.prototype.play = function() {
  this.askQuestion();
  // set current question to next one
  this.next();
  // if there are more questions, play again
  if ( this.currentQstnIndex < this.questions.length ) {
    this.play();
  } else {
    // game over: display stats
    console.log('game over');
    window.alert(this.showPlayerScore());
    window.alert(this.showCategoryScore());
  }
};



// method: add player
Trivial.prototype.addPlayer = function(name) {
  this.players.push(name);
  console.log(this.players);
};

// method: show score per player
Trivial.prototype.showPlayerScore = function() {
  var returnString = '';
  var winnerRatio = 0;
  var winners = [];

  // loop through players
  for (var playerNumber in this.players) {
    var player = this.players[playerNumber];
    // compile returnString ("Amy: 2 answered, 1 points scored –> 50% ratio")
    returnString = returnString + player.name + ': ' +
                                  player.answered + ' answered, ' +
                                  player.score + ' points scored -> ' +
                                  player.ratio() + ' % ratio\n';
    // get winners
    if (player.ratio() > winnerRatio) {
      // set new winnerRatio
      winnerRatio = player.ratio();
      winners = [];
      winners.push(player.name);
    } else if (player.ratio() === winnerRatio) {
      winners.push(player.name);
    }
  }

  // get winners
  if (winners.length === 1) {
    // one winner
    returnString = returnString + 'Winner: ' + winners;
  } else if (winnerRatio === 0) {
    // all have 0 right
    returnString = returnString + 'You\'re all losers.';
  } else if (winners.length > 1) {
    // multiple winners
    returnString = returnString + 'Winners: ' + winners.join(' and ');
  }
  return returnString;
};

// method: show score per category (could be done more beautiful)
Trivial.prototype.showCategoryScore = function() {
  var returnString = '';
  for (var playerNumber in this.players) {
    var player = this.players[playerNumber];
    returnString = returnString + player.name + ': ' + JSON.stringify(player.scoresPerCat, null, 2) + '\n';
  }
  return returnString;
};

Trivial.prototype.setPlayers = function() {
  var name = window.prompt("Your name? (blank to start game)");
  if (name === '') {
    //start game, if there's players
    if (this.players.length > 0) {
      trivial.play();
    } else {
      this.setPlayers();
    }
  } else {
    var playerx = new Player(name);
    this.addPlayer(playerx);
    this.setPlayers();
  }
};



// constructor for class Question
function Question(title, choices, correctAnswer, category) {
  this.title = title;
  this.choices = choices;
  this.correctAnswer = correctAnswer;
  this.category = category;
}

// method: format the question for output
Question.prototype.display = function() {
  return this.title + '\n' + this.choices.join('\n');
};



// constructor for class Player
function Player(name) {
  this.name = name;
  this.answered = 0;
  this.score = 0;
  this.scoresPerCat = {
    'literature' : 0,
    'geography' : 0
  };
}

// method: print out the current player
Player.prototype.display = function() {
  return 'Answer this, ' + this.name + '\n';
};

// method: if a question was answered, add the stats to the player (+1 answered, 0/1 points)
Player.prototype.addAnswer = function(success, category) {
  this.answered++;
  if ( success ) {
    this.score++;
    this.scoresPerCat[category]++;
  }
};

// calculate ratio
Player.prototype.ratio = function() {
  return Math.floor(this.score / this.answered * 100);
};





// start game: create instance
var trivial = new Trivial();

// initialise questions
var question1 = new Question('Capital of France', ['A - Paris', 'B - Rome'], 'A', 'geography');
trivial.addQuestion(question1);
var question2 = new Question('Capital of Sweden', ['A - Paris', 'B - Stockholm'], 'B', 'geography');
trivial.addQuestion(question2);
var question3 = new Question('Did Orwell write 1984?', 'binary', true, 'literature');
trivial.addQuestion(question3);
var question4 = new Question('Who wrote Anna Karenina?', ['A - Tolstoi', 'B - Dostoyevski'], 'A', 'literature');
trivial.addQuestion(question4);
console.log(trivial.questions);

// set players
// var player1 = new Player('Amy');
// trivial.addPlayer(player1);
// var player2 = new Player('Bob');
// trivial.addPlayer(player2);
trivial.setPlayers();

// start the game
//trivial.askQuestion(question);
//trivial.play();
