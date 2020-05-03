// Using user defined Modules
// Destructuring the object returned by the module using same name as the keys in the object.
var { anyNameYouWantItToBe, anyotherNameYouWantItToBe } = require('./modules')

console.log(anyNameYouWantItToBe)
console.log(anyotherNameYouWantItToBe(1,2))