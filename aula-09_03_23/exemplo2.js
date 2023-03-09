//importar o módulo
const readlineSync = require('readline-sync')

var n1 = readlineSync.questionFloat('Digite um numero: ')
var n2 = readlineSync.questionFloat('Digite outro numero: ')

soma = n1 + n2

console.log(`A soma de ${n1} e ${n1} é de ${soma}`);
