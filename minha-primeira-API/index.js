import express from 'express';
const app = express();
app.use(express.json()); // necessário para ler o body no POST

let livros = [
    {idLivro: 1, stTitulo: "Biografia do xxx tentation", stAutor: "Jair Bolsonaru", blDisponivel: true},
    {idLivro: 2, stTitulo: "Dicionário do teu Pai", stAutor: "Aquele que foi comprar cigarro", blDisponivel: true},
    {idLivro: 3, stTitulo: "A história da loja Fly", stAutor: "Eduardo de Alemeida", blDisponivel: true}
]; //banco de dados

let ultimoid = 3; // último id já usado no array

// os get
app.get('/', function(req, res) {
    res.send("seja bem-vindo a gestão de livros")
});

app.get('/livros', (req, res) => {
    res.json(livros)
});

app.get("/livros/:id", (req, res) => {
    //console.log(req.params.id)
    const id = parseInt(req.params.id)

    if (isNaN(id)) {
        //console.log("caiu aq!")
        return res.status(400)
            .json({mensagem: "o parametro precisa ser um valido!!!"})
    }

    //find
    let livro = livros.find((livro) => {
        return livro.idLivro === id;
    });

    if (!livro) {
        return res.status(404).json({mensagem: "Recurso n encontrado"})
        // ou: return res.status(404).send();
    }
    //n precisaria do else pois com o return ja indica de o código acaba aq!

    res.json(livro);

    console.log(livro);
});

//post
app.post("/livros", (req, res) => {
    console.log(req.body);
    console.log("chamando post")

    //body
    const titulo_enviado = req.body.titulo;
    const autor_enviado = req.body.autor;

    if (!autor_enviado || !titulo_enviado) {
        return res.status(400).json({mensagem: "Ve se o autorrr ou o titulis esta varziu!"})
    }

    ultimoid++;
    let idnovo = ultimoid;

    let novolivro = {
        idLivro: idnovo,
        blDisponivel: true,
        stTitulo: titulo_enviado,
        stAutor: autor_enviado
    };

    console.log(novolivro)
    console.log(autor_enviado + " - " + titulo_enviado)

    livros.push(novolivro);
    res.status(201).json(novolivro);
});

app.listen(3000);