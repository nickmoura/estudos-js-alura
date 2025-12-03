/* 7. Filtrando maiores de idade
Percorra o array e exiba apenas os nomes das pessoas com 18 anos ou mais. */

// Forma completa

// const pessoas = [
//     { nome: 'Ana', idade: 22},
//     { nome: 'Bruno', idade: 17},
//     { nome: 'Carla', idade: 19},
//     { nome: 'Daniel', idade: 15},
//     { nome: 'Eduardo', idade: 30}
// ]

// function filtrarAdultos() {
//     return pessoas.filter(pessoa => pessoa.idade >= 18);
// }

// console.log('Os maiores de idade são: ' + filtrarAdultos().map(p => p.nome).join(', '));

// Forma enxuta

// const pessoas = [
//   { nome: 'Ana', idade: 22 },
//   { nome: 'Bruno', idade: 17 },
//   { nome: 'Carla', idade: 19 },
//   { nome: 'Daniel', idade: 15 },
//   { nome: 'Eduardo', idade: 30 }
// ];

// console.log(
//   `Os maiores de idade são: ${
//     pessoas
//       .filter(p => p.idade >= 18)
//       .map(p => p.nome)
//       .join(', ')
//   }`
// );

// Forma didática

const pessoas = [ 
{ nome: "Ana", idade: 17 }, 
{ nome: "Carlos", idade: 22 }, 
{ nome: "Mariana", idade: 18 } 
]; 

for (let p of pessoas) { 
if (p.idade >= 18) { 
console.log(`${p.nome} é maior de idade.`); 
} 
}