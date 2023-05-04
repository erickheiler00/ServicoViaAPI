'use strict'; // modo estrito do javascript, para verificação de erros mais rigorosas

/*
    Faz uma requisição na API `http://loripsum.net/api/`
    e escreve o texto no terminal
*/

// apenas imprimimos o conteudo da variavel na tela

// a constante http é definida pelo módulo "http" do Node.js
// permitindo fazer requisições http
const http = require('http'); // para informar que vamos utilizar o módulo http
                              // importa o módulo "http" do Node.js

http.get('http://loripsum.net/api/', res => { // fazendo uma requisição http do tipo get para o
											  // endereço http://loripsum.net/api/
    
    let text = ''; // definindo uma variavel como string vazia 
    res.on('data', chunk => {
        text += chunk; // adicionando na variavel text os dados recebidos da requisição http
    }); // o evento data da requisição é acionado sempre que um novo chunk (pedaço) de dados é recebido

    res.on('end',  () => { // o evento end da requisição é acionado quando todos os dados da resposta foram recebidos
        console.log(text); // imprime o conteúdo da variável text no terminal
    });
})

.on('error', (e) => { // evento erro da requisição
    console.log('Got error: ' + e.message); // erro caso a URL informada seja inválida 
                                            // ou quando ocorrer qualquer outro erro durante a requisição
});