const express = require('express');
const app = express();

// Define uma rota para a página inicial
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Define uma rota para a API
app.get('/api/elevarAoQuadrado/:num', (req, res) => {
    const num = parseInt(req.params.num); // convertendo o valor do parâmetro "num" em um número inteiro
    const result = num ** 2;
    res.json({'Elevado ao quadrado': result});
});

// Inicia o servidor
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000!');
});

// http://localhost:3000/

// exemplo de URL: 
// http://localhost:3000/api/elevarAoQuadrado/5