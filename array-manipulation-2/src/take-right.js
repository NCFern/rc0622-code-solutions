/* exported takeRight */

// return the count of array starting from end //
// make empty array //
// make a loop where i is iterated //
// if i is greater than the array's length - count - 1 //
// push item in array to final array //
// return final array //

function takeRight(array, count) {
  var finalTakeRight = [];
  for (var i = 0; i < array.length; i++) {
    if (i > array.length - count - 1) {
      finalTakeRight.push(array[i]);
    }
  }
  return finalTakeRight;
}
