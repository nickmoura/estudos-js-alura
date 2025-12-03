/* 8. Objeto com método
Crie um objeto com um método chamado "saudacao" que imprime "Olá, eu sou [nome]". */

// Individual

const pessoa = {
    nome: 'Nick',
    idade: 31,
    pets: ['Milly'],
    nacionalidade: 'Brasileiro',
    saudacao: function () {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
};

pessoa.saudacao();