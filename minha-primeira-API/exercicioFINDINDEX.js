const Filmes = [
    {nome: "Camisa de Pano", ano: 1945},
    {nome: "Camisa de Poliester", ano: 1999},
    {nome: "Camisa den Camisa", ano: 2008},
    {nome: "Camisa den Argodao", ano: 2006},
];

const MenorAno = Filmes.findIndex((F) => F.ano < 1946);
console.log(MenorAno)

/*for(index = 0; index < Filmes.length; index++) {
    let filmess = Filmes[index];
    if(filmess.ano < 1946) {
        console.log(index);
        break;
    }
}*/