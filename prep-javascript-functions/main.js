function addTwoNumbers(num1, num2) {
 return num1 + num2;
}
const addTwoNumbersResult = addTwoNumbers(17,3);
console.log("addTwoNumbers exercise:", addTwoNumbersResult);


function convertHoursToMinutes (hours) {
  return hours * 60;
}
const conversion = convertHoursToMinutes(2);
console.log("convertHoursToMinutes exercise:", conversion);


function getGreeting (name) {
  const greeting = 'Hello ' + name + '!';
  return greeting;
}
const greetingResult = getGreeting('World');
console.log("getGreeting exercise:", greetingResult);


function addAndMultiplyBy5 (num1, num2) {
  return (num1 + num2) * 5;
}
const addAndMultiplyBy5Result = addAndMultiplyBy5(10,5);
console.log("addAndMultiplyBy5 exercise:", addAndMultiplyBy5Result);

function multiplyAndDivideBy5 (num1, num2){
  return (num1 * num2) / 5;
}
const multiplyAndDivideBy5Result = multiplyAndDivideBy5(35, 10);
console.log("multiplyAndDivideBy5 exercise:", multiplyAndDivideBy5Result);


function subtractTwoNumbers (num1, num2) {
  return num1 - num2;
}
const subtractTwoNumbersResult = subtractTwoNumbers(22, 7);
console.log("subtractTwoNumers exercise:", subtractTwoNumbersResult);


function getCircleCircumference (radius) {
  return radius * (2* Math.PI)
}
const getCircleCircumferenceResult = getCircleCircumference(5);
console.log("getCircleCircumference exercise:", getCircleCircumferenceResult);


function getFullName (firstName, lastName) {
  const fullName = firstName + ' ' + lastName;
  return fullName;
}
const jR = getFullName ('Juan', 'Ramirez');
console.log("getFullName exercise:", jR);


function cube(number) {
  return number ** 3;
}
cubeResult = cube(5);
console.log("cube exercise:", cubeResult);
