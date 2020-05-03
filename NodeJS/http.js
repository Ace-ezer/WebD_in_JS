// Including Http Module in app file.
const http = require('http')

// Port at which the server will run.
var port = process.env.PORT || 3000

// Creating a Nodejs server using http module
const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-type' , 'text/html')
    res.end('<h1>Hello World!</h1>')
})

// Set the server to listen on the port specified
server.listen(port, () => {
    console.log(`Server running at port ${port}`)
})
