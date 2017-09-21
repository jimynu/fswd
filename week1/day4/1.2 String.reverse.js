String.prototype.reverse = function() {
  var returnString = '';
  for (var i = 0; i < this.length; i++) {
    returnString = this[i] + returnString;
  }
  return returnString;
};

console.log('esrever'.reverse());
