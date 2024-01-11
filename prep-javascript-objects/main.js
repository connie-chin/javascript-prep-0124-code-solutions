let person = {firstName: 'Georgie', lastName: 'Theobold', hobby: 'Ball Fetching'}
console.log(person);
const fullName = "The person's name is: " + person.firstName + " " + person.lastName;
console.log(fullName);
person.job = 'handballer';
console.log("The person's current job is: " + person.job);
person['previousJob'] = 'dishwasher';
console.log("The person's previous job is: " + person['previousJob']);
console.log("The complete person object: ");
console.log(person);
