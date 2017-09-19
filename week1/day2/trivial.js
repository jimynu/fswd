// constructor for class Trivial
function Trivial() {
  this.questions = [];
}

// class
var trivial = new Trivial();

// method: add question
Trivial.prototype.addQuestion = function(qstn) {
  this.questions.push(qstn);
  console.log(Trivial.questions);
};

// method: ask question
Trivial.prototype.askQuestion = function(qstn) {
  // display the challenge
  var userAnswer = window.prompt(qstn.title + '\n' + qstn.choices.join('\n'));

  // check if answer is right
  if (userAnswer.toUpperCase() === qstn.correctAnswer) {
    window.alert('Congrats!');
  } else {
    window.alert('Wrong answer, my dear.');
  }
};


// constructor for class Question
function Question(title, choices, correctAnswer) {
  this.title = title;
  this.choices = choices;
  this.correctAnswer = correctAnswer;
}

// initialise questions
var question = new Question('Capital of France', ['A - Paris', 'B - Rome'], 'A');
trivial.addQuestion(question);
console.log(trivial.questions);

// start the game
trivial.askQuestion(question);
