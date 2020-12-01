


// a function is like a recipe
function helloLiz() {
    console.log('Hello Liz');
}

function helloTurkey() {
    console.log('Hello Turkey');
}

function hey() {
    const whom = 'Oakley';
}


// "Function declaration"
// function helloWhom(person) {
//     console.log(`Hello ${person}`);
// }

// Function expression assigned to a variable.
// 1. Use fn name as a const variable
// 2. on the RHS, copy/paste the function
// 3. delete the name from the RHS
// const helloWhom = function (person) {
//     console.log(`Hello ${person}`);
// }

// Fn expr as an arrow function
// 1. copy/paste your fn expr as var
// 2. delete the word function from RHS
// 3. put an arrow after the parentheses
const helloWhom = (person) => {
    console.log(`Hello ${person}`);
}

//const whom = 'Oakley';
//helloWhom('someone!');

//const makeSandwich = (toppings) => { return `[bread] ${toppings} [bread]` };
// "implicit return" is even shorter-hand for a function.
const makeSandwich = (toppings) => `[pita] ${toppings} [pita]`;

//const mySandwich = makeSandwich('tofu');
//console.log(mySandwich);
console.log(makeSandwich('tofu'));

// you have to "make" the recipe (call the fn)
//helloLiz();
//helloTurkey();

