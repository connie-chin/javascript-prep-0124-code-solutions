/* exported compact */
function compact(array) {
  const newArray = []; //want to create something that evaluates each value of array, it boolean value is false, dont write, if true, add to new array
  for (i = 0; i < array.length + 1; i++) {
    if (array[i]) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
