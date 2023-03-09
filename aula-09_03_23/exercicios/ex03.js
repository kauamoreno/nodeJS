// Escreva em Node.JS usando modulo readline que leia uma idade e verificar se a pessoa é maior de idade (18 anos ou mais).

const readlineSync = require('readline-sync')

const idade = readlineSync.questionInt('Qual a sua idade? ')

if(idade < 18){
    console.log("Acesso não permitido, voce é menor de idade");
}else{
    console.log("Acesso permitido, voce é maior de idade");
}