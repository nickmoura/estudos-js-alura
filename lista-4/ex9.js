/* 9. Listando propriedades com for...in
Use um laço for...in para listar todas as propriedades e seus valores do objeto pessoal criado no exercício */

const jogadores = [
    { nome: 'Messi', clube: 'Inter Miami', gols: 30 },
    { nome: 'Ronaldo', clube: 'Al Nassr', gols: 25 },
    { nome: 'Neymar', clube: 'Santos', gols: 20 },
    { nome: 'Mbappé', clube: 'Real Madrid', gols: 28 },
    { nome: 'Lewandowski', clube: 'Barcelona', gols: 22 }
]

for (let j in jogadores) {
    const jogador = jogadores[j];
    console.log(`${jogador.nome} joga no ${jogador.clube} e marcou ${jogador.gols} gols.`);
}