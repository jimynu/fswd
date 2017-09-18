// Cat and Mouse
//
// You will be given a string featuring a cat 'C' and a mouse 'm'. The rest of the string will be made up of '.'.
//
// You need to find out if the cat can catch the mouse from it's current position. The cat can jump three characters. So:

function isCaught(s) {
  var cat = 0;

  // find "C"at
  for (var i = 0; i < s.length; i++) {
    if (s[i] == 'C') {
      cat = i;
    }
  }

  // find "m"ouse
  for (var j = cat+1; j <= cat+3; j++) {
    // console.log(s[j]); //feedback of the checked letters
    if ( s[j] == 'm') {
      return true;
    } else if (j==cat+3 && s[j] != 'm') {
      return false;
    }
  }
}

// better: search position of "m", store and compare to pos. of "C"

console.log(isCaught('C.....m')); // => false
console.log(isCaught('C..m')); // => true
console.log(isCaught('..C..m')); // => true
