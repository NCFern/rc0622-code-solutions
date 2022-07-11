/* exported take */

// takes the count and returns the number from the array //
// if our count is greater than the length of the array, return the arrray //
// create an empty array //
// loop through the array until we reach the count //
// push the array into the final array //
// return the final array //

function take(array, count) {
  if (count > array.length) {
    return array;
  }

  var finalTake = [];
  for (var i = 0; i < count; i++) {
    finalTake.push(array[i]);
  }
  return finalTake;
}
