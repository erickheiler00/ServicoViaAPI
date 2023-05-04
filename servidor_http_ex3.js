const http = require('http');

//utilizando Map

const routes = new Map()
routes.set('/', (request, response) => response.end('Hello World!'))
routes.set('/close', (request, response) => response.end('Adeus!'))

const server = http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'text/plain'})
    if (!routes.has(request.url))
        return response.end('URL invalida')
    
    return routes.get(request.url)(request, response)
})  

server.listen(1337, '127.0.0.1', () => {
    console.log('Server running at http://127.0.0.1:1337/')
}) 
