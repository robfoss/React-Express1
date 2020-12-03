const employees = require('./employees-array.json');
/*
.map() transforms the elements of one array into another array
*/

// ".map() over" the employees array

/*
{
    lastName: "Orn",
    jobTitle: "Chief Communications Officer"
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
const summaryOfEmployees = employees.map(summarize);
console.log(summaryOfEmployees);