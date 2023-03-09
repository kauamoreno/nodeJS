//Escreva em Node.JS usando modulo readline que leia três números e imprimir a soma deles.

const readlineSync = require('readline-sync')

n1 = readlineSync.questionFloat('Digite o valor para n1: ')
n2 = readlineSync.questionFloat('Digite o valor para n2: ')
n3 = readlineSync.questionFloat('Digite o valor para n3: ')

const soma = n1 + n2 + n3

console.log(`A soma de ${n1}, ${n2} e ${n3} é igual a ${soma}`);