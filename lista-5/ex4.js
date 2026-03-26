// Crie dois arrays de frutas e combine-os usando o operador spread.

const frutas = ['Banana', 'Maçã', 'Pêra']
const frutasAdicionais = ['Morango', 'Limão', 'Laranja']

const clone = [...frutas]

const todasFrutas = [...frutas, ...frutasAdicionais]

console.log(frutas)
console.log(frutasAdicionais)
console.log(todasFrutas)