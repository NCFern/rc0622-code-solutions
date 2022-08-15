/* exported ransomCase */

// return word with every other letter uppercased //
// make new var to hold string //
// use for loop to iterate through string //
// if i is even, make string[i] using toLowerCase method //
// if i is odd, make string[i] using toUppercase method //
// return string var //

function ransomCase(string) {
  var finalRansomCase = '';
  for (var i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      finalRansomCase += string[i].toLowerCase();
    } else {
      finalRansomCase += string[i].toUpperCase();
    }
  }
  return finalRansomCase;
}
