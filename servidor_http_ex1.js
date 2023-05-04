const http = require('http');
const server = http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'text/plain'})
/*
    writeHead() é usado para enviar informações sobre a resposta HTTP antes de enviar o corpo da resposta
    nesse caso, o servidor está informando ao cliente que está enviando uma resposta com código 200 
    (que significa que o status é OK) e com o tipo de conteúdo de texto simples.
*/ 
    response.end('Hello World!')
})
server.listen(1337, '127.0.0.1', () => {
    console.log('Server running at http://127.0.0.1:1337/')
}) 

// endereço 127 reservado para loopback (localhost)

/* 
    significa que, ao se conectar a esse endereço, a conexão 
    é feita com o próprio computador em que o programa está sendo executado,
    permitindo testar e depurar aplicativos que usem uma conexão de rede sem 
    precisar de uma conexão real com outros dispositivos.
*/

// para rodar:
// node servidor_http_ex1.js