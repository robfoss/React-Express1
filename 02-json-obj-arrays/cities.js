const places = require("./places.json");

const cityNames = (state) => Object.keys(places[`${state}`]);
console.log(cityNames("Georgia"));

const getCities = (state) => Object.keys(places[`${state}`]);
console.log(getCities("Texas"));
