/* 
function saudacao(nome) { // Nesse caso, "nome" é um parâmetro da função "saudacao"
    console.log(`Olá,`, nome)
} 
    */



// const saudacao = (nome) => {
//     console.log(`Vida longa e próspera, ${nome}`)
// }

const saudacao = nome => console.log(`Olá, ${nome}`)


saudacao(`Nick`) // "Nick" é o argumento

saudacao(`Outra pessoa`)

// Função que dobra um número

// function calcularDobroDeUm(numero) {
//     return numero * 2

// }

const calcularDobroDeUm = numero => numero * 2

const numeroDobrado = calcularDobroDeUm(4)
console.log(`O dobro de 4 é: ${numeroDobrado}`)

console.log(`Meu`, `nome`, `é`, `Nick`)