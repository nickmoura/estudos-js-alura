/* 1. Criando um objeto pessoal
Crie um objeto com seu nome, idade e profissão. */

const eu = {
    nome: 'Nick',
    idade: 31,
    profissão: 'Desenvolvedor'
}

for (const chave in eu) {
    console.log('Chave:', chave)
    console.log('Valor:', eu[chave])
}