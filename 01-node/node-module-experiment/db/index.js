// const db1 = require('./1');
// const db2 = require('./2');

module.exports = {
    db1: require('./1'),
    db2: require('./2')
};

// Takeaways for exploring a new codebase:
/*
- start with a file named app.js, server.js, or main.js, or index.js
- look at require() and module.exports first 
- find one piece of functionality, locate a function and examine the parameters and return value
  - repeat until satisfied
- module.exports exports a value, not a variable
- require() is a function call, meaning it is replaced with the exported value.

*/