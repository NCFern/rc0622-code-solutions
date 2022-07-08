/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var finalWords = [];
  for (var i = 0; i < words.length; i++) {
    finalWords.push(words[i] + suffix);
  }
  return finalWords;
}
