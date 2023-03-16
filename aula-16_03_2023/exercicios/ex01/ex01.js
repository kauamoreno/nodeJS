/*
Crie um servidor JSON Server com uma rota /usuarios
que retorne uma lista com pelo menos 3 usuarios 
cada um com os campos:
id, nome, email e senha
*/

fetch('http://localhost:3000/usuarios').then(response => response.json())
    .then(users => {
        console.log(users);
    })