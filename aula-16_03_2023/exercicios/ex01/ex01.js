/*
Crie um servidor JSON Server com uma rota /usuarios
que retorne uma lista com pelo menos 3 usuarios 
cada um com os campos:
id, nome, email e senha
*/

fetch('http://localhost:3000/usuarios').then(response => response.json())
    .then(users => {
        console.log(users);

        document.getElementById('user1').innerHTML = `ID: ${users[0].id} <br> Nome: ${users[0].nome} <br> Email: ${users[0].email} <br> Senha: ${users[0].senha}`
        document.getElementById('user2').innerHTML = `ID: ${users[1].id} <br> Nome: ${users[1].nome} <br> Email: ${users[1].email} <br> Senha: ${users[1].senha}`
        document.getElementById('user3').innerHTML = `ID: ${users[2].id} <br> Nome: ${users[2].nome} <br> Email: ${users[2].email} <br> Senha: ${users[2].senha}`

    })