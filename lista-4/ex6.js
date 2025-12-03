/* 6. Lista de pessoas
Crie um array com 3 objetos, cada um representando uma pessoa com nome e idade. */

const pessoas = [
    { nome: 'Nick', idade: 31 },
    { nome: 'Noel', idade: 58 },
    { nome: 'Liam', idade: 53 },
    { nome: 'Morrissey', idade: 66 },
    { nome: 'Kurt', idade: 27 },
    { nome: 'Freddie', idade: 45 }
]

function pegarNomes(lista) {
    return lista.map(p => p.nome)
}

function pegarIdades(lista) {
    return lista.map(p => p.idade)
}

const nomes = pegarNomes(pessoas)              // a função retorna os nomes
const idades = pegarIdades(pessoas)            // a função retorna as idades
console.log(`Nomes: ${nomes.join(', ')}`)      // aqui você imprime o return dos nomes
console.log(`Idades: ${idades.join(', ')}`)    // aqui você imprime o return das idades