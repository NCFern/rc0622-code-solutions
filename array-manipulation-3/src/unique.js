/* exported unique */

// return array of elements when it first appears, doesnt show duplicate elements //
// create new array //
// loop through array //
// check if the current index matches whats inside //
// if it doesnt exist, push it into new array //
// return final array //

function unique(array) {
  const finalUnique = [];
  for (let i = 0; i < array.length; i++) {
    if (!finalUnique.includes(array[i])) {
      finalUnique.push(array[i]);
    }
  }
  return finalUnique;
}
