/* exported difference */

// combines 2 arrays and returns 1 containing unique elements, deletes duplicates //
// create new array //
// loop through first array //
// if element is not found in second array, push it to new array //
// vice versa with second array //
// return final array //

function difference(first, second) {
  const finalDifference = [];
  for (let i = 0; i < first.length; i++) {
    if (!second.includes(first[i])) {
      finalDifference.push(first[i]);
    }
  }
  for (let j = 0; j < second.length; j++) {
    if (!first.includes(second[j])) {
      finalDifference.push(second[j]);
    }
  }
  return finalDifference;
}
