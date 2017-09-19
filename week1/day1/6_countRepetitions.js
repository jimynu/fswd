// Count repetitions
//
// You will be given an array of string:
//
// ['kerouac', 'fante', 'fante', 'buk', 'hemingway', 'hornby', 'kerouac', 'buk', 'fante']
// Return an object where the keys are the string and the value for each key is how many repetitions they have in the provided array
//
//
// In the previous example the solution would be:
//
// {
//   kerouac: 2,
//   fante: 3,
//   buk: 2,
//   hemingway: 1,
//   hornby: 1
// }

function countRepetitions(authorsArr) {
  var authors = {};

  for(var key in authorsArr) {
    var author = [authorsArr[key]];
    if(authors[author]) {
      // increase author count
      authors[author]++;
    } else {
      // create author and set count to 1
      authors[author] = 1;
    }
  }
  console.log(authors);
}

// solution provided

function countRepetitions2(elements) {
  return elements.reduce(function(acc, el) { //acc[umulator] = empty object, el = element
    if (acc[el]) { // is already in object (acc)
      acc[el] += 1;
    } else { // not in object
      acc[el] = 1;
    }

    return acc;
  }, {});
}

countRepetitions(['kerouac', 'fante', 'fante', 'buk', 'hemingway', 'hornby', 'kerouac', 'buk', 'fante']);
