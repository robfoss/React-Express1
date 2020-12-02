const employees = require('./employees-array.json');
/*
// filter out anyone with a short last name
// transfom their jobTitle to UPPERCASE
{
    lastName: "Herman",
    jobTitle: "Chief"
}
{
    lastName: "Herman",
    jobTitle: "CHIEF"
}
*/

// 0. declare a function
function summarize(e) {
    // 1. turn the variable into an argument
    // const e = employees[0];
    const newObj = {
        
        lastName: e.lastName,
        jobTitle: e.jobTitle
    }
    // 2. turn the console.log into a return
    // console.log(newObj);
    return newObj;
}

//console.log(summarize(employees[3]));
//const summaryOfEmployees = employees.map(summarize);
//console.log(summaryOfEmployees);

// helper function returns true if last name longer than 5 chars
// to be used with filter
// function isLastNameLong(e) {
//     return e.lastName.length > 5;
// }
const isLastNameLong = e => e.lastName.length > 5;
// if (isLastNameLong(employees[1])) {
//     console.log('yep');
// } else {
//     console.log('nope');
// }

function capTitle(e) {
    return {
       // jobArea: e.jobArea,
        //lastName: e.lastName,
        // instead of hard-coded copying, use the "sprinkle"
        ...e, // more formally, the "spread operator"
        // which copies the key/value pairs from the e variable
        // into our new object
        jobTitle: e.jobTitle.toUpperCase()
    }
}


// const emps2 = employees.filter(isLastNameLong);
// // //console.log(emps2);
// const emps3 = emps2.map(summarize);
// // //console.log(emps3);
// const emps4 = emps3.map(capTitle);
// // console.table(capTitle(employees[0]));

// const emps2 = employees.filter(isLastNameLong);
// // //console.log(emps2);
// const emps3 = employees.filter(isLastNameLong).map(summarize);
// // //console.log(emps3);
const emps4 = employees.filter(isLastNameLong)
                        .map(summarize)
                        .map(capTitle);
// console.table(capTitle(employees[0]));
console.log(emps4);
