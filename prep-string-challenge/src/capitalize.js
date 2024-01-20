/* exported capitalize */
function capitalize(word) {
  const wordLength = word.length;
  const restOfWord = word.slice(1);
  const lowerCase = restOfWord.toLowerCase();
  const firstLetter = word.charAt(0);
  const upperCase = firstLetter.toUpperCase();
  return upperCase.concat(lowerCase);
}
