const us = require('./places.json');

//console.log(us.Georgia.Atlanta['East Lake']['Chris\' House']);
//console.log(us.Georgia.Atlanta['East Lake']["Chris' House"]);
/*
Should I escape or use backticks?
- use backticks
  - unless you have to write vanilla JS for a really-really old browser.
*/
//console.log(us.Georgia.Atlanta.East_Lake.MyHouse.Living_Room);

// 3 minute activity
// Write a function that prints out an Array of the city names in Georgia.
// ["Athens", "Atlanta", "Macon"]
function getCities(state) {
    //console.log(Object.keys(us[state]));
    return Object.keys(us[state]);
}
//const getCities = state => Object.keys(us[state]);
//console.log(getCities("Texas"));

function getNeighborhood(n, country) {
    let didFind = false;
    //console.log(n);
    // East Lake, Atlanta
    // Find a neighborhood (which is level 3 in my data)
    const states = Object.keys(country);
    //console.log(states);
    for (let s of states) {
        //console.log(Object.keys(country[s]));
        const cities = Object.keys(country[s]);

        for (let c of cities) {
            //console.log(Object.keys(country[s][c]));
            const nhs = Object.keys(country[s][c]);
            for (let nh of nhs) {
                if (n === nh) {
                    console.log('YAY!');
                    console.log(`${nh}, ${c}`);

                    didFind = true;
                }                
            }
        }
    }

    if (!didFind) {
        console.log(`${n} does not exist in that country`);
    }
}

// getNeighborhood("Xanadu", us);
getNeighborhood("Five Points", us);