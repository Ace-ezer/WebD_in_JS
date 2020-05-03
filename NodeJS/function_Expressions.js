// Named Function
// @parameter callback is just a reference, it can be named anything
function Print(callback) {
    console.log("I am a named function.")
    callback()
}


// Two methods to execute higher order named function "Print"
// @Method 1
Print(() => {
    console.log("I am an unnamed function.")
})

// Arrow function
const arrowFunction = () => {
    console.log("I am an unnamed function.")
}

// @Method 2
Print(arrowFunction)

