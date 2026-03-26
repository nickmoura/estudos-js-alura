const pessoa = {
    nome: 'Nathalia',
    idade: 17,
    profissao: 'Estudante'
}

const { nome, idade } = pessoa

console.log(nome)
console.log(idade)

function saudacao({ nome, idade }) {
    console.log('Olá,', nome)
    if (idade > 18) {
        console.log('Maior de idade')
    } else {
        console.log('Menor de idade')
    }
}

saudacao(pessoa)

const frutas = ['uva', 'banana']

// const [primeira, segunda] = frutas