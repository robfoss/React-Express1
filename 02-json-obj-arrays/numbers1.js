const likes = require("./likes");

if (likes[0] % 2 === 0) {
  console.log("even");
} else {
  console.log("odd");
}

const isEven = (n) => n % 2 === 0;
const onlyEvens = likes.filter(isEven)
console.log(onlyEvens.length)
console.log(likes.)
console.log(`likes[0] is even? ${isEven(likes[0])}`);

const overTwenty = (n) => n === 20000;
console.log(overTwenty())
