// Imporatando o modulo express
const app = require('express')();

// Importar o modulo http 
const http = require('http').createServer(app)

//Importando o modulo socket.io e parametro html
const io = require('socket.io')(http);

//Rota para a pagina inicial
app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'))

//Evento para quando o cliente se conectar ao servidor via Socket.IO
io.on('connection', (socket) => {
    console.log("Usuario Conectado");

    //Evento para quando o cliente enviar uma mensagem ao servidor 
    socket.in('chat message', (data) => io.emit('chat message', (data)))

    //Evento para quando o cliente se desconectar do servidor
    socket.on('disconnect', () => console.log("Usuario Desconectado"));
})

//Inicia o servidor na porta 3000
http.listen(3000, () => {
    console.log("O servidor esta rodando na porta 3000");
})