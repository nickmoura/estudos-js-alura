const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log('Bem-vindo ao quiz de capitais!')
console.log('Responda com a letra correta: a, b ou c.\n');

let acertos = 0; 

rl.question('1- Qual a capital da França?\n(a) Berlim\n(b) Madrid\n(c) Paris\n> ', (resposta1) => {
    if (resposta1.toLowerCase() === 'c') {
        acertos++;
    }
    rl.question('2- Qual a capital da Austrália?\n(a) Sydney\n(b) Canberra\n(c) Melbourne\n> ', (resposta2) => {
        if (resposta2.toLowerCase() === 'b') {
            acertos++;
        }

        rl.question('3- Qual a capital do Japão?\n(a) Tóquio\n(b) Pyongyang\n(c) Pequim\n> ', (resposta3) => {
            if (resposta3.toLowerCase() === 'a') {
                acertos++;
            }

            if (acertos === 3) {
                console.log('Parabéns! Você acertou tudo e é um Deus do JavaScript!')
            };

            if (acertos === 2) {
                console.log('Mandou muito bem, acertou duas, mas ainda pode melhorar.')
            }

            if (acertos === 1) {
                console.log('Você acertou apenas uma.')
            }

            if (acertos === 0) {
                console.log('Eita! Você não acertou nenhuma questão.')
            }

            rl.close();
        });
    });
});
