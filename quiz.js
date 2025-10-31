const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log('Bem-vindo(a) ao Quiz de JavaScript!');
console.log('Responda com a letra correta: a, b ou c.\n');

let acertos = 0;

rl.question('1- Qual palavra usamos para criar uma função?\n(a) define\n(b) function\n(c) create\n>', (resposta1) => {
    if (resposta1.toLowerCase() === 'b') {
        acertos++;
    }
    rl.question('2- Qual dessas é uma estrutura de repetição?\n(a) loopar\n(b) repeat \n(c) for\n>', (resposta2) => {
        if (resposta2.toLowerCase() === 'c') {
            acertos++;
        }

        rl.question('3- Qual valor é consirado falsy em JavaScript?\n(a) 1\n(b) 0\n(c) "texto"\n>', (resposta3) => {
            if (resposta3.toLowerCase() === 'b') {
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


