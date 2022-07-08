/* exported initial */

// get all elements except the last /
// make empty array //
// make a loop that goes until second to last element (array.length - 1) //
// push elements into array /
// return array //

function initial(array) {
  var finalArray = [];
  for (var i = 0; i < array.length - 1; i++) {
    finalArray.push(array[i]);
  }
  return finalArray;
}

// create new array to hold values //
// check all indexes of array except the last one //
// push all remaining values into the array //
// return the array //
