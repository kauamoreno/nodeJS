/*
Crie um servidor JSON Server com uma rota /carros
que retorne uma lista com 3 carros
cada um com os campos:
nome, modelo e ano
*/

fetch('http://localhost:3000/carros').then(response => response.json())
    .then(carros => {
        console.log(carros);
    })