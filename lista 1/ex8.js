let a = 5
let b = 3

let ambosPares = (a % 2 === 0) && (b % 2 === 0) ? 'Sim' : 'Não'

let saoIguais = (a === b) ? 'Sim' : 'Não'

console.log(`Os números são pares? ${ambosPares}`)
console.log(`Os números são iguais? ${saoIguais}`)

let conclusao = ambosPares && saoIguais ? 'Sim' : 'Não'

console.log(`Os números são pares e iguais? ${conclusao}`)