/*
Crie um servidor JSON Server com uma rota /carros
que retorne uma lista com 3 carros
cada um com os campos:
nome, modelo e ano
*/

fetch('http://localhost:3000/carros').then(response => response.json())
    .then(carros => {
        console.log(carros);

        document.getElementById('carros1').innerHTML = `Nome: ${carros[0].nome} <br> Modelo: ${carros[0].modelo} <br> Ano: ${carros[0].ano} `
        document.getElementById('carros2').innerHTML = `Nome: ${carros[1].nome} <br> Modelo: ${carros[1].modelo} <br> Ano: ${carros[1].ano} `
        document.getElementById('carros3').innerHTML = `Nome: ${carros[2].nome} <br> Modelo: ${carros[2].modelo} <br> Ano: ${carros[2].ano} `
    })