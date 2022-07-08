/* exported capitalize */

// capitalize the first letter but lowercase the rest //
// splice the first lettter of string and capitalize it //
// the remaning part of teh word is to be lowercased //

function capitalize(word) {
  var finalWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  return finalWord;
}

// return a word that has its first letter capitalized and the remaining letters lowercased //
// using the uppercase method, capitalize the word's first letter //
// using the lowercase method, lowercause the rest of the word by using the slice method at the 2nd letter of the word //
