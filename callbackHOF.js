// HOF -> Higher Order Function === função que recebe outra função com parâmetro

function calcular(numero1, numero2, operacao) {
    const resultado = numero1 + num

    return operacao(numero1, numero2)
    
}

function soma(num1, num2) {
    return num1 + num2
}

function divisao(num1, num2) {
    return num1 / num2
}

const resultadoSoma = calcular(3, 8, soma) // soma é um callback
console.log(`O resultado da soma é: ${resultadoSoma}`)

const resultadoDivisao = calcular(32, 8, divisao) // divisão é um callback
console.log(`O resultado da divisão é: ${resultadoDivisao}`)