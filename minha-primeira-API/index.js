import express from 'express';
const app = express();

app.get('/', function(req, res) {
    res.send("seja bem-vindo a gestão de livros")
});

app.get('/livros', (req, res) => {
    res.send("Hello word!");
});

app.listen(3000);
