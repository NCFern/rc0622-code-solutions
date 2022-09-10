/* exported equal */

// return true if first and second are the same, false if not //
// if length of first doesnt equal length of second, return false //
// loop through first array //
// if first array at index i doesnt equal second array at index i. return false //
// otherwise, return true //

function equal(first, second) {
  if (first.length !== second.length) {
    return false;
  }
  for (let i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  }
  return true;
}
