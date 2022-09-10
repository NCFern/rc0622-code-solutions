/* exported zip */

// couple the first indexes of arrays 1 and 2 //
// create a new array //
// create a new var to represent the length number using the Math.min method //
// loop through both arrays //
// push the coupled indexes of the first and second array into the new array //
// return new array //

function zip(first, second) {
  const finalZip = [];
  const count = Math.min(first.length, second.length);
  for (let i = 0; i < count; i++) {
    finalZip.push([first[i], second[i]]);
  }
  return finalZip;
}
