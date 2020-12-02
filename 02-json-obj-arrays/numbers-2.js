const likesAsStrings = require('./numbers-as-strings.json');

// transform the array of strings
// into an array of numbers

// Use .map()!
// 1. Write a function that can transform 1 value (return the new version of the value)
// 2. Pass the function as a callback to .map()
// 3. Store the result in a new variable

const stringToNumber = s => parseInt(s, 10); // pass 10 as the second argument
//const stringToNumber = s => +s; // VOODOO!
// function stringToNumber(s) {
//     return parseInt(s, 10);
// }
// console.log(typeof likesAsStrings[0]);
// console.log(typeof stringToNumber(likesAsStrings[0]));
const likes = likesAsStrings.map(stringToNumber);
console.log(likes);

// equivalent of map:
// const newArray = [];
// for (let i of likes) {
//     newArray.push(likesAsStrings(i));
// }
console.log(likesAsStrings);
// map is safe to use because it does not mutate your original