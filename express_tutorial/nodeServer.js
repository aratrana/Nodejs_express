const http = require("http")
const fs = require('fs')
const server = http.createServer((req, res) => {
   if (req.url === '/') {
        res.writeHead(200, {'content-type': 'text/html'})
        const homePage = fs.readFileSync('node.html')
        res.write(homePage)
    } else {
        res.writeHead(200, {'content-type': 'text/html'})
        const contentPage = fs.readFileSync('content.html')
        res.write(contentPage)
    }
    res.end()
})

server.listen(3000)