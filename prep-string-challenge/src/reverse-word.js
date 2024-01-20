/* exported reverseWord */
function reverseWord(word) {
  let newWord = '';
  for (i = word.length - 1; i >= 0; i--) {
    newWord = newWord + word[i];
  }
  return newWord;
}
