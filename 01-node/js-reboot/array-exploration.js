/*
ps have you seen comments like this one?

- hello to an array of names, one at a time
    - for () loops
    - for of loops
    - .forEach()
- hello to names longer than 4 letters
    - .filter()
- hello to a name if it's in the array, otherwise "hello world"
    - .find()
*/

const names = [
    'Alice',
    'Bob',
    'Charlie',
    'Dom',
    'Elle'
];

// A for loop is if you need more control
// for (let i=0; i<names.length; i++){
//     const oneName = names[i];
//     console.log(`${i}: ${oneName}`);
// }

// for (let b=99; b>0; b--) {
//     console.log(`${b} bottles of coca-cola`);
// }
// for-of is when you only need the array elements, one at a time
// for (let oneName of names) {
//     console.log(`Hello ${oneName}`);
// }
// for (let oneName of names) {
//     console.log(`Goodbye ${oneName}`);
// }

// for (const name of names) {
//     console.log(`Goodbye ${oneName}`);
// }

const hello = (whom) => console.log(`Hello ${whom}`);
const bye = (whom) => console.log(`Bye ${whom}`);

// names.forEach(hello);
// names.forEach(bye);

const combo = (n) => {
    hello(n);
    bye(n);
};

//combo('Alice');
//names.forEach(combo);

// Callback pattern
// names.forEach((n) => {
//     hello(n);
//     bye(n);
// });

// Demo of .filter
const helloLongName = (n) => {
    // n is the name of the person
    if (n.length > 4) {
        hello(n);
    }
};

// const isNameLong = (n) => {
//     return n.length > 4;
//     // ^^ is a better way to write the if/else
//     // if (n.length > 4) {
//     //     return true;
//     // } else {
//     //     return false;
//     // }
// }
//helloLongName('bob');

// isNameLong is an arrow function that uses implicit return
const isNameLong = (n) => n.length > 4;

// We use isNameLong as a callback to names.filter()
const longNames = names.filter(isNameLong);

// *Very* short version:
//const longNames3 = names.filter((n) => n.length > 4);

console.log(longNames);

let longNames2 = [];
for (let n of names) {
    if (isNameLong(n)) {
        longNames2.push(n);
    }
}
console.log(longNames2);

// Implementation of our own .filter
// A function that accepts an array
// and returns an array, but only includes
// items that pass the callback() test.
// callback should return true or false.
const myFilter = (arr, callback) => {
    // 1. Create a new, empty array
    let newArray = [];

    // 2. iterate through the items in the array we
    // were passed
    for (let n of arr) {
        // 3. Use callback function as a test
        if (callback(n)) {
            // 4. If the item passes
            // add it to the new array
            newArray.push(n);
        }
    }
    // 5. Instead of printing, return the new array
    return newArray;
};

//const longNames = names.filter(isNameLong);
const longNames4 = myFilter(names, isNameLong);
console.log(longNames4);




