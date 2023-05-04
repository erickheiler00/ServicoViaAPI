const http = require('http');
const server = http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'text/plain'})
    
    if (request.url === '/'){
        response.end('Hello World!')
    } else if (request.url === '/close'){
        response.end('Adeus!')
    } else{
        response.end('URL invalida')
    }
    
})
server.listen(1337, '127.0.0.1', () => {
    console.log('Server running at http://127.0.0.1:1337/')
}) 

// inicializar com nodemon
// nodemon servidor_http_ex2.js

// alterar a política de execução do PowerShell temporariamente para permitir a execução de scripts não assinados.
// Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass

// restaurar a política de execução anterior
// Set-ExecutionPolicy -Scope Process -ExecutionPolicy Default
