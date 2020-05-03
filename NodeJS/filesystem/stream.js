// Read bulky files using createReadStream and then passing the read data through the pipe to the response object
var http = require('http')
var fs = require('fs')

const server = http.createServer((req, res) => {
    const stream = fs.createReadStream('test.txt')
    stream.pipe(res)
})

server.listen(3000, () => {
    console.log("Server running...")
})