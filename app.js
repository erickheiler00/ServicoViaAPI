const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(3000);

// URL do servidor (segurar o CTRL e clicar em cima):
// http://localhost:3000/

// ao executar o código com "node app.js" já vai estar funcionando, basta acessar a URL

// também dá para executar com o nodemon:
// nodemon app.js