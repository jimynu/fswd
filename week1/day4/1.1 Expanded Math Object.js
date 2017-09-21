//console.log(Math.random()); // built-in random fn

var myMath = Object.create(Math);

console.log('random NR from myMath: ' + myMath.random()); // same as Math.random()

Math.randomInt = function(max, min=0) {
  return Math.floor(Math.random() * (max-min+1) + min);
};

//console.log(myMath.__proto__);


console.log(Math.randomInt(1,-1));
