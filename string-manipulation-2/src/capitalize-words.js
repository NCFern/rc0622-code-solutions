/* exported capitalizeWords */

// return string with every word capitalized //
// make new var to hold empty string //
// use toUpperCase method to capitalize string at index 0 //
// make a for loop that starts at 1 and iterates by 1 //
// use toLowerCase method to loop and iterate through string //
// if string contains a space ' ', use toUpperCaseMethod to capitalize from that point + 1 //
// return var //

function capitalizeWords(string) {
  var finalCapitalizeWords = '';
  finalCapitalizeWords = string[0].toUpperCase();
  for (var i = 1; i < string.length; i++) {
    finalCapitalizeWords += string[i].toLowerCase();

    if (string[i] === ' ') {
      finalCapitalizeWords += string[i + 1].toUpperCase();
      i++;
    }
  }
  return finalCapitalizeWords;
}
