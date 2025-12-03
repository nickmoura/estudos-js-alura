const pessoa = {
    nome: 'Nick',
    idade: 31,
    pets: ['Milly'],
    nacionalidade: 'Brasileiro'
}

for(const chave in pessoa) {
    console.log('Chave:', chave)
    console.log('Valor:', pessoa[chave])
}

const chaves = Object.keys(pessoa)
const valores = Object.values(pessoa)
const entradas = Object.entries(pessoa)

console.log('Chave:', chaves)
console.log('Valores:', valores)
console.log('Entradas (chave/valor):', entradas)