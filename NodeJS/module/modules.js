// User defined modules

// Object students
var students = {
    "1" : "Arpit",
    "2" : "Aryan",
    "3" : "Vikram"
}

// Function add
const add = (a, b) => {
    return a+b
}

// Two ways to export both 

// @Method 1
// module.exports.anyNameYouWantItToBe = students
// module.exports.anyotherNameYouWantItToBe = add

// @Method 2
module.exports = {
    anyNameYouWantItToBe: students,
    anyotherNameYouWantItToBe: add
}