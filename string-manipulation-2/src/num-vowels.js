/* exported numVowels */

// count number of vowels in the string //
// make var to hold number, start at 0 //
// make array to hold capital/lower case vowelts to check //
// make a loop that iterates through string //
// if the string contains a vowel, add 1 to var //
// return var holding number //

function numVowels(string) {
  var finalVowels = 0;
  var vowelArray = ['A', 'a', 'E', 'e', 'I', 'i', 'O', 'o', 'U', 'u'];
  for (var i = 0; i < string.length; i++) {
    if (vowelArray.includes(string[i])) {
      finalVowels++;
    }
  }
  return finalVowels;
}
