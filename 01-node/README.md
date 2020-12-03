

# Scope

- Scope is "where you can use a variable"
- If you define a variable in a function, you can only use it inside of that function.

# Arguments

- a.k.a. "parameters"
- think of them as variables that is assigned *when you call* the function
- if you don't pass in a value, the arg will be `undefined`
    - `undefined` means no value was assigned

# Arrow functions

## How do I write an arrow function?

Start with a standard "function declaration"
```js
function helloWhom(person) {
    console.log(`Hello ${person}`);
}
```

Convert it to a function expression assigned to a variable.
```js
// 1. Use fn name as a const variable
// 2. on the RHS, copy/paste the function
// 3. delete the name from the RHS
const helloWhom = function (person) {
    console.log(`Hello ${person}`);
}
```

Rewrite it as an arrow function
```js
// 1. copy/paste your fn expr as var
// 2. delete the word function from RHS
// 3. put an arrow after the parentheses
const helloWhom = (person) => {
    console.log(`Hello ${person}`);
}
```

## Do I always assign it to a variable?

Yes!

(There are exceptions, but assign to a variable for now.)

## When do I need to assign to the result to a variable?

If you need to use the result later, assign it to a variable:

```js
const mySandwich = makeSandwich('tofu');
console.log(mySandwich);
```

If you need to use the result now, no variable:

```js
console.log(makeSandwich('tofu'));
```

## What is "implicit return"?

It's even shorter-hand for a function.

Specifically, it's an arrow function that only has a single expression. (i.e., it has one line of code, and that line *is* the value you want to return).

To do implicit return, start with an arrow function that only has a single line of code (that line should be a `return` statement):
```js
const makeSandwich = (toppings) => { return `[pita] ${toppings} [pita]` };
```

Remove the curly braces `{}` and remove the `return` keyword:
```js
const makeSandwich = (toppings) => `[pita] ${toppings} [pita]`;
```

## Is implcit return the same as a callback?

They're separate concepts, but usually used together:

```js
// isNameLong is an arrow function that uses implicit return
const isNameLong = (n) => n.length > 4;
```

```js
// We use isNameLong as a callback to names.filter()
const longNames = names.filter(isNameLong);
```
# Node.js modules

- module.exports exports a value, not a variable
- require() is a function call, meaning it is replaced with the exported value.

# Exploring a Node.js codebase

- start with a file named `app.js`, `server.js`, or `main.js`, or `index.js`
- look at `require()` and `module.exports` first 
    - these are the "inputs" and "outputs" for your Node.js files
- find one piece of functionality, locate a function and examine the parameters and return value
  - repeat until satisfied

