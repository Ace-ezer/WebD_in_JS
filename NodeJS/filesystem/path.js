// Using Path module
var path = require('path')

// Example location
var location = "/user/web/test.txt"

console.log("Prints filename with extension ",path.basename(location))

console.log("Prints filename without extension ", path.basename(location, path.extname(location)))

console.log("Prints directory name of the file ",path.dirname(location))

console.log("Prints extension ", path.extname(location))

console.log("Gives absolute path of the file mentioned ", path.resolve("test.txt"))

console.log("Prints relative path of the file ", path.resolve("/filesystem","test.txt"))
