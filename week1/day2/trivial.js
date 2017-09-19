// constructor for class Trivial
function Trivial() {
  this.questions = [];
  this.currentQstnIndex = 0;
}

// method: add question
Trivial.prototype.addQuestion = function(qstn) {
  this.questions.push(qstn);
  console.log(Trivial.questions);
};

// method: ask one question
Trivial.prototype.askQuestion = function() {
  // display the challenge
  var question = this.questions[this.currentQstnIndex];
  var userAnswer = window.prompt(question.display());

  // check if answer is right
  if (userAnswer.toUpperCase() === question.correctAnswer) {
    window.alert('Congrats!');
  } else {
    window.alert('Wrong answer, my dear.');
  }
};

// method: increase current question index
Trivial.prototype.next = function() {
  this.currentQstnIndex++;
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
    console.log('game over');
  }
};

// constructor for class Question
function Question(title, choices, correctAnswer) {
  this.title = title;
  this.choices = choices;
  this.correctAnswer = correctAnswer;
}

// method: format the question for output
Question.prototype.display = function() {
  return this.title + '\n' + this.choices.join('\n');
};



// start game: create instance
var trivial = new Trivial();

// initialise questions
var question = new Question('Capital of France', ['A - Paris', 'B - Rome'], 'A');
trivial.addQuestion(question);
var question2 = new Question('Capital of Sweden', ['A - Paris', 'B - Stockholm'], 'B');
trivial.addQuestion(question2);
console.log(trivial.questions);

// start the game
//trivial.askQuestion(question);
trivial.play();
