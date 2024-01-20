/* exported toObject */
function toObject(keyValuePair) {
  const firstPart = keyValuePair[0];
  const secondPart = keyValuePair[1];
  const object = { [firstPart]: secondPart };
  return object;
}
