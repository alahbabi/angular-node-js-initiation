let http = require('http')

let server = http.createServer()

server.on('request', (request, response) => {
    response.writeHead(200 , {
        'Content-type': 'text/html; charset=utf-8'
    })

    response.end('Salut Abdelkarim')
})

server.listen(8080)