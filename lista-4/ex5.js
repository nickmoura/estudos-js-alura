/* 5. Função com objeto
Crie uma função que recebe um objeto pessoa e retorna uma frase com seus dados. */

const eu = {
  nome: 'Nickolas',
  idade: 31,
  cidade: 'Sorocaba',
  profissao: 'Desenvolvedor'
};

function apresentarPessoa(pessoa) {
  const { nome, idade, cidade, profissao } = pessoa; // ou: pessoa.nome, etc.
  return `Olá, meu nome é ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`;
}

console.log(apresentarPessoa(eu));