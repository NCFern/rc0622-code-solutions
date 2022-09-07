/* exported union */

// return array containing unique values from first and second, in same order, once //
// create new array //
// loop through first array //
// if current value is not found in final array, push it to final array //
// repeat with second array //
// return final array //

function union(first, second) {
  const finalUnion = [];
  for (let i = 0; i < first.length; i++) {
    if (!finalUnion.includes(first[i])) {
      finalUnion.push(first[i]);
    }
  }
  for (let j = 0; j < second.length; j++) {
    if (!finalUnion.includes(second[j])) {
      finalUnion.push(second[j]);
    }
  }
  return finalUnion;
}
