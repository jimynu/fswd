function myMap(array, fn) {
  accArr = [];
  for (var i = 0; i < array.length; i++) {
    accArr.push(fn(array[i]));
  }
  return accArr;
}

var array = [1,2,3];
var fn = function(el) { return el * 2; };

// should both yield the same resulat
// console.log(array.map(fn));
console.log(myMap(array, fn));
