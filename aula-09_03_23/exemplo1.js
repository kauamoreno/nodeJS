//importar o módulo
const readlineSync = require('readline-sync')

console.log("Olá Mundo");

// Pedindo a resposta do usuario
// * Para quebrar a linha = \n
var userName = readlineSync.question('Qual o seu nome? \n');
console.log(`Olá ${userName}! Prazer te conhecer`);