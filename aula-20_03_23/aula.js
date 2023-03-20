/*
    node install express - Instalando o express

    * O QUE É EXPRESS
    Express é um framework web para Node.js que simplifica
    o processo de criação de aplicativos da web e APIs. 
    Ele fornece uma maneira fácil de lidar com solicitações e respostas HTTP, 
    gerenciamento de rotas, middlewares, autenticação, sessões, entre outras funcionalidades.
*/

//importar o modulo express
const express = require("express");

//criando uma instancia
const app = express();

//definindo a porta do servidor
const port = 3000;

//função para ser executada em cada requisiccao feita ao servidor
app.use(express.static('aula-20_03_23/public'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/index.html')
})

//exibindo a mensagem no console
console.log(`A porta que esta conectada é o localhost:${port}`);

//iniciando o servidor na porta definida
app.listen(port)
