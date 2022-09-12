/* exported reverseWords */

// takes a string and returns it revsersed //
// create a new array to hold word //
// use split method to split the string based at the space //
// loop through split string array //
// at each index, split the word, reverse it, the join it //
// push the reversed word into array //
// join the reversed words by adding spaces between them into new var //
// return new var //

function reverseWords(string) {
  var finalReverse = [];
  var splitString = string.split(' ');
  for (let i = 0; i < splitString.length; i++) {
    var reversedWord = splitString[i].split('').reverse().join('');
    finalReverse.push(reversedWord);
    var finalWord = finalReverse.join(' ');
  }
  return finalWord;
}
