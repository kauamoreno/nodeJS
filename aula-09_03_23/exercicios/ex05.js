// Escreva em Node.JS usando modulo readline que leia um número e verificar se é positivo ou negativo.

const readlineSync = require('readline-sync')

const numero = readlineSync.questionInt("Digite um numero positivo ou negativo: ")

if(numero > 0){
    console.log(`O numero ${numero} é positivo`);
} else if(numero < 0){
    console.log(`O numero ${numero} é negativo`);
}else{
    console.log(`O numero ${numero} é um neutro`);
}