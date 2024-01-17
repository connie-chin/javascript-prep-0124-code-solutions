// create your loops here.
function whileLoop1 () {
  const nums = []; //creates a new array
  let i = 0;// initializing a value
  while (i < 10) { //while loop that loops 10 times
    nums.push(i);//uses push method to add numbers 0-9 into the new array... need explaining for this one
    i++;//incremementing, adding value to keep loop moving?
  }
  return nums; //returns the new array with numbers 0-9... need explaining for this too
}
console.log('whileLoop1 output',whileLoop1());


function whileLoop2 () {
  const numbers = [];
  let i = 0;
  while (i < 20) {
    numbers.push(i);
    i = i + 2;
  }
  return numbers;
}
console.log('whileLoop2 output', whileLoop2());


function forLoop1 () {
  const num = [];
  for (let i=0; i<10; i++){
    num.push(i);
  }
  return num;
}
console.log('forLoop1 output: ',forLoop1());


function forLoop2 () {
  for (let i =100; i>0; i--){
  //  num.push(i);
    console.log('Time till explosion: ' + i + '!');
  }
 // return i;
}
console.log(forLoop2());


function forInLoop1(object) {
  const info = [];
  for (const i in object){
info.push(i);
  }
  return info;
}
const info = {name: 'Ada LoveLace', age: 'classic', hobby: 'computation', invention: 'analytical engine'};
console.log('forInLoop1 output:', forInLoop1(info));


function forInLoop2 (object) {
  const info = [];
  for (const i in object) {
    info.push(object[i]);
  }
  return info;
}
console.log('forInLoop2 output:', forInLoop2(info));
