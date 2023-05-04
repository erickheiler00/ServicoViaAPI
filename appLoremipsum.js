const express = require('express');
const app = express();

const http = require('http');
const fs = require('fs');

// Define uma rota para a página inicial
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Define uma rota para a API
app.get('/api/loremipsum/:num', (req, res) => {
    const num = parseInt(req.params.num);
    
    const fileName = `loremipsum_${num}.txt`;
    http.get(`http://loripsum.net/api/${num}`, (response) => {
        let text = '';
        response.on('data', (chunk) => {
            text += chunk;
        });

        response.on('end', () => {
            fs.writeFile(fileName, text, () => {
                console.log(`Arquivo ${fileName} pronto!`);
                
                // para ele baixar o arquivo txt do navegador e excluir do diretorio do arquivo javascript

                res.download(fileName, (err) => { // fazer download do arquivo
                    if (err) {
                        console.log(`Erro ao enviar o arquivo ${fileName}: ${err.message}`);
                        res.status(500).send('Erro interno do servidor');
                    } else {
                        console.log(`Arquivo ${fileName} enviado com sucesso!`);
                    }
                    
                    fs.unlink(fileName, (err) => { // excluir arquivo do diretório do arquivo javascript
                        if (err) {
                            console.log(`Erro ao excluir o arquivo ${fileName}: ${err.message}`);
                        } else {
                            console.log(`Arquivo ${fileName} excluído com sucesso!`);
                        }
                    });
                });
            });
            
        });
    }).on('error', (err) => {
        console.log(`Erro ao gerar o Lorem Ipsum: ${err.message}`);
        res.status(500).send('Erro interno do servidor');
    });
});

// Inicia o servidor
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000!');
});

// http://localhost:3000/

// exemplo de URL: 
// http://localhost:3000/api/loremipsum/5