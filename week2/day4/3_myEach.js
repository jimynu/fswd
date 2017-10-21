function myEach(array, fn) {
  for (var i = 0; i < array.length; i++) {
     fn(array[i]);
  }
}

var array = [1,2,3];
var fn = function(el) { console.log(el); };

// should both yield the same resulat
// array.forEach(fn);
myEach(array, fn);
