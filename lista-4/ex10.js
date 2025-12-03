const prompt = require('prompt-sync')();

const produto = {
    nome: 'Notebook',
    preco: 3500
}

let quantidade = prompt(`Digite a quantidade desejada de ${produto.nome}: `);

quantidade = Number(quantidade);

function calcularCarrinho() {
    const total = produto.preco * quantidade;
    const totalFormatado = total.toFixed(2).replace('.', ',');
    console.log(`O valor total da compra é de R$ ` + totalFormatado);
}

calcularCarrinho();