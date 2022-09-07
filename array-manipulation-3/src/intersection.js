/* exported intersection */

// returns array of values contained in first and second //
// create new array //
// loop through first array //
// if element is in second array, push it to new array //
// return new array //

function intersection(first, second) {
  const finalIntersection = [];
  for (let i = 0; i < first.length; i++) {
    if (second.includes(first[i])) {
      finalIntersection.push(first[i]);
    }
  }
  return finalIntersection;
}
