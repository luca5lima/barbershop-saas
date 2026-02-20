const express = require('express');

const app = express();

app.get('/home', (req, res) => {
    res.contentType("aplication/html");
    res.status(200).send('<h1>Hello Node!</h1>');
});

app.get('/users', (req, res) => {
        const users = [
      { 
        id: 1, 
        name: "Lima",
        idade: 25
    },
    { 
        id: 2, 
        name: "Joaquin",
        idade: 25
      },
    ];
    res.contentType("application/json");
    res.status(200).send(JSON.stringify(users));
});

const port = 8080;

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});