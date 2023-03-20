//importar o modulo express
const express = require("express");

//criando uma instancia
const app = express();

//definindo a porta do servidor
const port = 7777;

//função para ser executada em cada requisiccao feita ao servidor
app.use(express.static('aula-20_03_23/BancoDeDadosFake'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/db.html')
})

//exibindo a mensagem no console
console.log(`A porta que esta conectada é o localhost:${port}`);

//iniciando o servidor na porta definida
app.listen(port)


// node aula-20_03_23/BancoDeDadosFake/db.js  Para executar o html na porta 7777


function enviarDados(){

    const nome = document.getElementById('nome').value
    const idade = document.getElementById('idade').value

    fetch('http://localhost:3000/pessoas', {
        
        method: 'POST', //Metodo HTTP utilizado
        headers: {
            'content-type': 'application/json' //Tipo de conteúdo enviado (JSON)
        },
        body: JSON.stringify({ nome: nome, idade:idade })

    }).then(response => response.json())

}