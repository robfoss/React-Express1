const employees = require('./employees-array.json');
const employee = employees[0];

/* Notes
key/value pairs are called:
- Objects in JS
- Hashes in Ruby
- Dictionaries in Python
- ...and many others!
*/

// dot syntax is used 99% of the time
// Use this when you know what key you're accessing.
// console.log(employee.jobTitle);

// bracket syntax
// console.log(employee['jobTitle']);

// How do I get all the keys?
//console.log(Object.keys(employee));
const theKeys = Object.keys(employee);
console.log(theKeys);
//for (let k of theKeys) {
for (let i = 0; i < theKeys.length; i++) {
    let k = theKeys[i];
    console.log(`${i}: ${k}: ${employee[k]}`);
    //console.log(k); // just print the key
    //const theValue = employee[k];
    //console.log(theValue);
    // console.log(`${k}: ${theValue}`);
    //console.log(employee.k); // print value for that key
    // console.log(employee['lastName'])
    // firstName: 'Elsie'
    // lastName: 'Orn'
}



// let k = 'firstName';
// let theValue = employee[k];
// console.log(`${k}: ${theValue}`);

