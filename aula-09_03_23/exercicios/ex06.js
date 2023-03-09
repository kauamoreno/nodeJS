//Escreva em Node.JS usando modulo readline que leia três notas de um aluno e imprimir a média dele se está aprovado ou reprovado com a média 7.

const readlineSync = require('readline-sync')

console.log("Digite suas 3 notas para saber sua media aritmetica e sua aprovacao \n");
nota1 = readlineSync.questionFloat("Nota 1: ")
nota2 = readlineSync.questionFloat("Nota 2: ")
nota3 = readlineSync.questionFloat("Nota 3: ")

const media = (nota1 + nota2 + nota3)/3
const mediaMinima = 7

if(media >= mediaMinima){
    console.log(`Parabens! A sua media foi ${media.toFixed(2)} e voce foi aprovado`);
}else{
    console.log(`\nA sua media foi de ${media.toFixed(2)} e voce nao foi aprovado`);
}