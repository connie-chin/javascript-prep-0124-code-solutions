/* exported isLowerCased */
function isLowerCased(word) {
  for (i = 0; i < word.length; i++) {
    if (word == word.toLowerCase()) {
      return true;
    } else {
      return false;
    }
  }
}
