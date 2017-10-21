function myFilter(array, fn) {
  accArr = [];
  for (var i = 0; i < array.length; i++) {
    if (fn(array[i])) {
      accArr.push(array[i]);
    }
  }
  return accArr;
}


// creates a new array with all elements that pass the test implemented by the provided function

var words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];
var fn = function(el) { return el.length > 6; };

// should both yield the same result
console.log(words.filter(fn)); // ["exuberant", "destruction", "present"]
console.log(myFilter(words, fn));
