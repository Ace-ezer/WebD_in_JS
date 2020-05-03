// These Variables can be used anyWhere in your JS code

console.log("That's how you comfort a bug in JS.")

// Prints current working directory
console.log(__dirname)

// Prints current working file
console.log(__filename)

// Executes the code within the block after specified period of time in ms.
setTimeout(() => {
    console.log("2 seconds have passed.") 
}, 2000)

// Time variable
var time = 0
// Timer Variable
// setInterval Executes the code within the block after every specified ms.
var timer = setInterval(() => {
    console.log("Printing after every 1 sec.")
    time++; // Increment time variable after specified period of time in ms.

    if(time > 4)
        clearTimeout(timer) // Stops the timer

}, 1000)

