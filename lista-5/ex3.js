// Crie uma função que receba um número qualquer de argumentos e retorne a soma de todos. Use o operador rest (...).

// Função que recebe n números
function somarTudo(...numeros) {
    // Variável que vai guardar a soma total - deve começar em zero
    let soma = 0

    // Faz o loop
    for (let numero of numeros) {
        soma += numero // soma atual + nº da vez
    }

    // Retorna o resultado final da soma
    return soma
}

// Uso da função
console.log(somarTudo(10, 20, 30, 40))