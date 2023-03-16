/*
Crie um servidor JSON Server com uma rota /filmes
que retorne uma lista com pelo menos 3 filmes
cada um com os campos:
titulo, descrição e avaliação
*/

fetch('http://localhost:3000/filmes').then(response => response.json())
    .then(filmes => {
        console.log(filmes);
    })