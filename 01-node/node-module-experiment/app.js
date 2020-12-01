// Why do I not need the .js at the end?
// What's up with the ./ ?
const peeps = require('./db'); // If db is directory, Node looks for db/index.js
// We declare a variable on the LHS
// On the RHS, we call the require() function and pass it the path
// to our db.js file. Node is OK if you leave off the .js

// Do I have to use the same name as the variable in db.js?
// Nope! The variable on the LHS does *not* have to match. Name it whatever you like!

// I want to use the users array!
console.table(peeps);