/* exported isUpperCased */
function isUpperCased(word) {
  for (i = 0; i < word.length; i++) {
    if (word == word.toUpperCase()) {
      return true;
    } else {
      return false;
    }
  }
}
