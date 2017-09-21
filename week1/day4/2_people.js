function Person(firstName, lastName, isAlive) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.isAlive = isAlive;
}

Person.prototype.greet = function () {
  console.log('Hello this is Laurent Meyer');
};

// create sub-"class"
var Writer = function(firstName, lastName, isAlive) {
  Person.call(this, firstName, lastName, isAlive);

  // ist das hier richtig? oder nachträglich nach constructor?
  this.pseudonym = (this.firstName + this.lastName)
    .split("")
    .reverse()
    .join("");
};

// // test
// var leo = new Writer('Leo', 'Tolstoi', false);
// console.log(leo.pseudonym);

// link Writer to Person
Writer.prototype = Object.create(Person.prototype);

// // now we can
// leo = new Writer('Leo', 'Tolstoi', false); // again!
// leo.greet();


Writer.prototype.signBook = function() {
  console.log(this.pseudonym);
};

// var leo = new Writer('Leo', 'Tolstoi', false);
// leo.signBook();



var Developer = function(firstName, lastName, codename) {
  Person.call(this, firstName, lastName, true);

  this.codename = codename;
};

// link Developer to Person
Developer.prototype = Object.create(Person.prototype);

Developer.prototype.impress = function() {
  var nulleins = '0100101010101101010010101001010101011010100101';
  console.log(nulleins.repeat(5) + '\n' + this.codename);
};

var manel = new Developer('Manel', 'Pavon', 'Ping Pong King');
manel.impress();



var Singer = function(firstName, lastName, melody) {
  Person.call(this, firstName, lastName, true);

  this.melody = melody;
  this.artisticName = 'Fancy' + this.firstName + 'Fancy' + this.lastName;
};

// link Singer to Person
Singer.prototype = Object.create(Person.prototype);

Singer.prototype.sing = function() {
  console.log((this.melody + ' ').repeat(3));
};


// var robbie = new Singer('Robbie', 'Williams', 'aaahyaya');
// robbie.sing();




var JuniorDeveloper = function(firstName, lastName, codename) {
  Developer.call(this, firstName, lastName, codename);

  this.isStruggling = true;
};

// link Developer to Person
JuniorDeveloper.prototype = Object.create(Developer.prototype);

JuniorDeveloper.prototype.complain = function() {
  console.log(this.codename.toUpperCase());
};

JuniorDeveloper.prototype.workHard = function() {
  console.log((this.codename + ' is working hard! ').repeat(10));
};

var kim = new JuniorDeveloper('Kim', 'B', 'Ihms');
kim.workHard();
kim.complain();



// What's the __proto__ of "People"?     ("Person")               Object – nope, constructor
// What's the prototype of "Writer"?                              Person
// Does "manel" have a __proto__ or a prototype? Why?             __proto__ – only functions have prototype, manel is an object
// What is the difference between __proto__ and prototype?        ???

// __proto__ = der name des prototyps
// prototype = stores functions to hand down
