//Importar a biblioteca json-server
const jsonServer = require('json-server');

//Criar uma instancia do servidor json-server
//Essa instancia é usada para criar e configurar o servidor
const server = jsonServer.create();

//Criar um roteador com o arquivo db.json
//O roteador define as rotas do servidor. Ele utiliza um arquivo JSON para gerar a rota
const router = jsonServer.router('aula-06_04_23/db.json')

//Funções que são executadas em cada requisição feita com o servidor
//Importa os padrões json-server
const middlewares = jsonServer.defaults();

//Funções que são executadas em cada requisição feita com o servidor
server.use(middlewares);

//Define a porta em que o servidor irá rodar
const port = 3000;

//Usa o roteador criado
server.use(router);

//Importando o modulo express e instanciando-o
const express = require('express');
const app = express();
app.use(express.static('public')); //Configura

//Define a rota raiz e envia o arquivo index.html
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
})

//Inicia o servidor na porta definida e exibe a mensagem no console
server.listen(port, () => {
    console.log("Json-server rodando na porta: " + port);
})

/*
Rodando o servidor - node aula-06_04_23/server.js
*/