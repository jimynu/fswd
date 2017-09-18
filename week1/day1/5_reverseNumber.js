// Convert number to reversed array of digits

// Given a random number. You have to return the digits of this number within an array in reverse order.

function convert(number) {
  //convert number to string in order to adress numbers as letters
  number = number.toString();
  var numberArray = [];

  //fill numberArray
  for (i=0; i<number.length; i++) {
    numberArray.push(number[i]*1);
  }

  //sort nurmberArray
  console.log(numberArray.sort().reverse());
}

convert(429563); // => [9, 6, 5, 4, 3, 2]
convert(324); // => [4, 3, 2]
