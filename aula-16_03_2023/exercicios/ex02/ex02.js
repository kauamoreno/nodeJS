/*
Crie um servidor JSON Server com uma rota /filmes
que retorne uma lista com pelo menos 3 filmes
cada um com os campos:
titulo, descrição e avaliação
*/

fetch('http://localhost:3000/filmes').then(response => response.json())
    .then(filmes => {
        console.log(filmes);

        document.getElementById('filmes1').innerHTML = `Titulo: ${filmes[0].titulo} <br> Descricão: ${filmes[0].descricao} <br> Avaliacão: ${filmes[0].avaliacao} `
        document.getElementById('filmes2').innerHTML = `Titulo: ${filmes[1].titulo} <br> Descricão: ${filmes[1].descricao} <br> Avaliacão: ${filmes[1].avaliacao} `
        document.getElementById('filmes3').innerHTML = `Titulo: ${filmes[2].titulo} <br> Descricão: ${filmes[2].descricao} <br> Avaliacão: ${filmes[2].avaliacao} `
    })