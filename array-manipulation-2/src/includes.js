/* exported includes */

// checks if array holds the value //
// loop through array to see if current index === value //
// if so, return true//
// if not, return false //

function includes(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}
