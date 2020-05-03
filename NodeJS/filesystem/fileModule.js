// Using File System module
const fs = require('fs')

// @Asynchronous Reading of the File
// fs.readFile(filename, encoding, callbackFunction(error, contentOfFile))
fs.readFile("test.txt", "utf8", (err, data) => {
    if(!err) {
        console.log(data) 
    } else {
        console.error("Error occured. ",err)
    }
})

// @Synchronous reading of the File
// contentOfFile = fs.readFileSync(filename, encoding)
// Uncomment below code.
// try {
//     var content = fs.readFileSync("test.txt", "utf8")
//     console.log(content)
// } catch (error) {
//     console.error(error)
// }

// @Asynchronous writing of the File
// fs.writeFile(filename, Content, callbackFunction(error))
fs.writeFile("test.txt", "Hey! it changed.", err => {
    if(err) {
        console.log(err)
    }
})

// @Synchronous writing of the File
// fs.reawriteFileSync(filename, content)
// Uncomment below code.
// try {
//     fs.writeFileSync("test.txt", "Yay! It changed.")
// } catch (err) {
//     console.error(err)
// }