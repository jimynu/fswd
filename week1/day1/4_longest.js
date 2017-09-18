// Sort and remove duplicated characters

// Take 2 strings s1 and s2 including only letters from a to z.

// Return a new sorted string, the longest possible, containing distinct letters, - each taken only once - coming from s1 or s2.

function longest(s1, s2) {
  var myString = s1 + s2;
  var stringMaterial = [];

  for(var i=0; i<myString.length; i++) {
    //check if letter is in Array stringMaterial
    if(stringMaterial.indexOf(myString[i]) == -1) {
      // put letter in stringMaterial
      stringMaterial.push(myString[i]);
    }
  }

  // sort content of stringMaterial alphabetically + join digits
  console.log(stringMaterial.sort().join(""));
}



longest('abcccaa', 'acddddffzzz'); // => 'abcdfz'

a = 'xyaabbbccccdefww';
b = 'xxxxyyyyabklmopq';
longest(a, b); // => 'abcdefklmopqwxy'

a = 'abcdefghijklmnopqrstuvwxyz';
longest(a, a); // => 'abcdefghijklmnopqrstuvwxyz'
