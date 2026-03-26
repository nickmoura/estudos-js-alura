// Crie dois objetos: um com nome e outro com idade. Combine-os em um terceiro objeto usando spread.

let nick1 = {
    nome: 'Nick'
}

let nick2 = {
    idade: 31
}

let nick3 = {...nick1, ...nick2}

console.log(nick3)