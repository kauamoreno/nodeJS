//importar o módulo
const readlineSync = require('readline-sync')

animais = ['Leao', 'Elefante', 'Crocodilo', 'Girafa', 'Hipopotamo']
index = readlineSync.keyInSelect(animais, 'Qual o seu animal preferido?');
console.log('Ok, ' + animais[index] + ' é o seu animal preferido');