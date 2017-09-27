function selectionSort(arr) {
  var indexOfSmallest = 0;

  for (var i = 0; i < arr.length; i++) {
    arr.push(arr[i]); // append current number to the end
    indexOfSmallest = i+1; // start at next position … if current = last number is smallest, LAST should be taken AND REMOVED
    for (var k = i+1; k < arr.length; k++) {
      if (arr[k] < arr[indexOfSmallest]) {
        indexOfSmallest = k;
      }
    }
    arr[i] = arr[indexOfSmallest];
    arr.splice(indexOfSmallest,1);
  }
  return arr;
}


module.exports = {
  selectionSort: selectionSort
};
