#!/usr/bin/env node

'use strict';

/*
    Faz uma requisição na API `http://loripsum.net/api/`
    e grava um arquivo texto com o nome e a quantidade
    de parágrafos especificados 
*/

// agora é possível escolher o nome do arquivo, bem como quantos parágrafos queremos gerar
// passamos isso por linha de comando

const http = require('http'); 

const fs = require('fs');

// para passarmos o nome do arquivo como argumento na linha de comando
// .replace(/[^a-z0-9\.]/gi, ''), é usado para remover caracteres invalidos do nome do arquivo 
const fileName = String(process.argv[2] || '').replace(/[^a-z0-9\.]/gi, ''); 

// para passarmos a quantidade de paragrafos como argumento na linha de comando
// .replace(/[^\d]/g, ''), é usado para garantir que apenas números sejam passados para a quantidade de paragrafos
const quantidadeDeParagrafos = String(process.argv[3] || '').replace(/[^\d]/g, '');

const ComoUsar = 'USO: node loremipsum_ex3.js {nomeArquivo} {quantidadeParágrafos}'; 
// a ordem dos argumentos será essa:
// argv[0] = node
// argv[1] = loremipsum.js
// argv[2] = passaremos o nome do arquivo que queremos criar
// argv[3] = passaremos a quantidade de paragrafos que queremos gerar

// exemplo = node loremipsum.js teste.txt 10
// irá criar um arquivo teste.txt com 10 paragrafos preenchidos

if (!fileName || !quantidadeDeParagrafos) { // verifica se o nome do arquivo e a quantidade de paragrafos foram informados
    return console.log(ComoUsar); // se pelo menos um dos dois estiver faltando irá aparecer a mensagem de comoUsar 
}                                 // para que o usuário saiba como rodar o arquivo da maneira correta

http.get('http://loripsum.net/api/' + quantidadeDeParagrafos, (res) => {
    let text = '';
    res.on('data',  (chunk) => {
        text += chunk;
    });
    res.on('end',  () => {
        fs.writeFile(fileName, text, () => { 
            console.log('Arquivo ' + fileName + ' pronto!'); // agora o nome do arquivo também aparece na mensagem
        });
    });
})
.on('error', (e) => {
    console.log('Got error: ' + e.message);
});