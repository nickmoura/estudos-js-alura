/* 3. Atualizando valores
Modifique a propriedade "idade" com um novo valor. */

const prompt = require('prompt-sync')();

const nome = 'Nick';

let idade = 31;

console.log(`Nome: ${nome}, Idade: ${idade}`);

const novaIdade = prompt('Digite a nova idade: ');

idade = Number(novaIdade);

console.log (`Nova idade definida: ${idade}`);