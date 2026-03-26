// Crie um objeto com nome, idade e email. Use destructuring para extrair essas informações em variáveis separadas.

const usuario = {
    nome: 'Nick',
    idade: 31,
    email: 'teste@nick.com'
}

let { nome, idade, email } = usuario

function saudacao({ nome, idade }) {
    console.log(`Olá, ${nome}`)
    if (idade >= 18) {
        console.log('Você é maior de idade.')
    }
    else {
        console.log('Você é menor de idade.')
    }
}

saudacao(usuario)   