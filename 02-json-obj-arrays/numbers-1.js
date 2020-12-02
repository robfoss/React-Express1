/*
1. Add up the number of likes.
Each number in the array is the number of likes for a single post.

*/

// require() knows how to import JSON!!
const likes = require('./numbers.json');

//console.log(likes);

if (Array.isArray(likes)) {
    console.log('yep that is an array');
} else {
    console.log('nope');
}

console.log(likes[0]);
// 1. import numbers.json
// 2. do an if/else to test if likes[0] is odd
// 3. print out whether it is or not

if ((likes[0] % 2) === 0) {
    console.log('that is even. totally even');
} else {
    console.log('odd. it is odd!');
}

// 1. put your even/odd tester in a function
// 2. pass it the first number and confirm that it returns true/false correctly

//function isEven(n) {

    // returning the comparison only works
    // if you intend to return a boolean.
    //return (n % 2) === 0;
    // if (n % 2 === 0) {
    //     return true;
    // } else {
    //     return false;
    // }


    // if (n % 2 === 0) {
    //     return 'true!!!';
    // } else {
    //     return 'false :(';
    // }
    // ternary operator is a short hand if/else
    //return (n % 2) === 0 ? 'true!!!' : 'false :(';
//}
//const isEven = (n) => (n % 2) === 0;
const isEven = n => (n % 2) === 0;


console.log(`likes[0] is even? ${isEven(likes[0])}`);


// Use our isEven function with the likes array.
// for (let l of likes) {
//     if (isEven(l)) {
//         console.log(l)
//     }
// }
// .filter to produce a new array, that only contains evens
const onlyEvens = likes.filter(isEven);
console.log(onlyEvens.length);
console.log(likes.length);

// Activity: how many posts over 20000 likes?
const hasLotsOfLikes = n => n > 20000;
/*
function hasLotsOfLikes(n) {
    return n > 20000;
    // or:
    if (n > 20000) {
        return true;
    } else {
        return false;
    }
}
*/
const highLikes = likes.filter(hasLotsOfLikes);
console.log(highLikes.length);