//Escreva em Node.JS usando modulo readline que leia dois números e imprimir o maior deles.

const readlineSync = require('readline-sync')

n1 = readlineSync.questionFloat('Digite um numero: ')
n2 = readlineSync.questionFloat('Digite outro numero: ')

if(n1 > n2){
    console.log(`O numero ${n1} é maior que ${n2}`);
} else if(n2 > n1){
    console.log(`O numero ${n2} é maior que ${n1}`);
}else{
    console.log(`O numero ${n1} é igual a ${n2}`);
}