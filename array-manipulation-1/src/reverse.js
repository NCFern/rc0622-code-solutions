/* exported reverse */

// reverse elements in array //
// make empty array //
// loop through array, starting from end, and make it the first element //
// incrementally go though array, making the last element the next element //
// return array //

function reverse(array) {
  var finalArray = [];
  for (var i = array.length - 1; i >= 0; i--) {
    finalArray.push(array[i]);
  }
  return finalArray;
}

// create new array to hold values //
// incrementally go through array, reversing the order of elements in the array //
// push all remaining values into the array //
// return the array //
