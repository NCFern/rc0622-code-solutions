/* exported capitalizeWord */

// return word with its first letter capitalized and the rest lowercased //
// exception- return as JavaScript //
// make new var to hold word and use toLowerCase method //
// if word is 'javascript' return it as 'JavaScript' //
// use toUpperCase var[0] and concatinate by using slice method on word[1] using toLowerCase

function capitalizeWord(word) {
  var finalCapitalize = word.toLowerCase();
  if (finalCapitalize === 'javascript') {
    return 'JavaScript';
  }
  return finalCapitalize[0].toUpperCase() + word.slice(1).toLowerCase();
}
