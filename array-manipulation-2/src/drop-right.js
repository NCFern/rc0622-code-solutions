/* exported dropRight */

// return array minus items of count from the end //
// make empty array //
// loop where i is iterated and goes until array.length - count //
// push item in array to final array //
// return final array //

function dropRight(array, count) {
  var finalDropRight = [];
  for (var i = 0; i < array.length - count; i++) {
    finalDropRight.push(array[i]);
  }
  return finalDropRight;
}
