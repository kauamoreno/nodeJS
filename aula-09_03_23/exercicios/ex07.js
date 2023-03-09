//Escreva em Node.JS usando modulo readline que leia dois números inteiros e exiba o resultado da soma, subtração, multiplicação e divisão inteira desses números.

const readlineSync = require('readline-sync')

n1 = readlineSync.questionFloat("Digite o numero 1: ")
n2 = readlineSync.questionFloat("Digite o numero 2: ")

soma = n1 + n2;
subtracao = n1 - n2
mult = n1 * n2
div = n1 / n2

console.log(`\n${n1} + ${n2} = ${soma}`);
console.log(`${n1} - ${n2} = ${subtracao}`);
console.log(`${n1} * ${n2} = ${mult}`);
console.log(`${n1} / ${n2} = ${div.toFixed(2)}`);