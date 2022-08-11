/* exported drop */

// removes the first counts from the array and returns the rest //
// if count > array, return array //
// make an empty array //
// make a loop where the count is iterated, serves as starting point//
// push the item in the array to the final array //
// return final array //

function drop(array, count) {
  if (count > array.length) {
    return array;
  }

  var finalDrop = [];
  for (var i = count; i < array.length; i++) {
    finalDrop.push(array[i]);
  }
  return finalDrop;
}
