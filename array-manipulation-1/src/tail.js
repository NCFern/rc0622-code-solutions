/* exported tail */

// get all elements of array except the first //
// make empty array //
// make a loop starting at index 1, then push it into array //
// return the array //

function tail(array) {
  var finalTail = [];
  for (var i = 1; i < array.length; i++) {
    finalTail.push(array[i]);
  }
  return finalTail;
}

// create new array to hold values //
// check all indexes of array except the first one //
// push all remaining values into the array //
// return the array //
