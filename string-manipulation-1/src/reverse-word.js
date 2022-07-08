/* exported reverseWord */

// reverse the characters of a string //
// make empty string //
// loop though string, starting at the end, and make it first letter //
// incrementally go from end making that letter the next letter //
// return the word //

function reverseWord(word) {
  var finalWord = '';
  for (var i = word.length - 1; i >= 0; i--) {
    finalWord += word[i];
  }
  return finalWord;
}

// create an empty string to hold the value //
// create a loop that would take the last letter of the word and place it first, and loop that process//
// return the final word /
