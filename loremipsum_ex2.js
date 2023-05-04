'use strict'; 

/*
    Faz uma requisição na API `http://loripsum.net/api/`
    e cria um arquivo chamado lorem.html com a resposta 
    no mesmo diretório do arquivo javascript chamado lorem.html
*/

// agora, vamos guardar o conteudo da variavel em um arquivo de texto de nome pré-definido

const http = require('http'); 
const fs = require('fs'); // importa o módulo "fs" do Node.js para manipular arquivos no sistema de arquivos local.

http.get('http://loripsum.net/api/', (res) => { 
    
    var text = ''; 
    res.on('data', (chunk) => { 
        text += chunk; 
    });

    res.on('end',  () => {
        fs.writeFile('lorem.html', text, () =>{ // cria um arquivo chamado "lorem.html" no mesmo diretório do arquivo
                                                // javascript e escreve nele o conteudo da variavel text
            console.log('Arquivo pronto!'); // mensagem que aparece quando o arquivo é criado com sucesso
        });
    });
})

.on('error', (e) => {
    console.log('Got error: ' + e.message); 
});