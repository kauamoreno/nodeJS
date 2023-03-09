//Escreva em Node.JS usando modulo readline que leia um número e verificar se é par ou ímpar

const readlineSync = require('readline-sync')

const numero = readlineSync.questionInt("Digite um numero inteiro: ")

const restoDivisao = numero % 2

if(restoDivisao == 1){
    console.log(`O numero ${numero} é impar`);
}else{
    console.log(`O numero ${numero} é par`);
}