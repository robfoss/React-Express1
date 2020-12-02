
/*
.map() transforms the elements of one array into another array
*/

const numbers = [ 1, 2, 3, 4, 5];
const squareItBaby = n => n * n;
const squaresBaby = numbers.map(squareItBaby);
//console.log(squaresBaby);
//              [1, 4, 9, 16, 25]

function myMap(arr, callback) {
    const newArr = [];

    // loop over the elements of arr
    for (let n of arr) {
        // apply the callback function
        const newVal = callback(n);
        // store the result in newArr
        newArr.push(newVal);
    }

    return newArr;
}
const squares2 = myMap(numbers, squareItBaby);
//console.log(squares2);
