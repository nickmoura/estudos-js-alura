// contar quantos números pares e ímpares nós temos entre 0 e 100



let totalNumerosPares = 0

let totalNumerosImpares = 0

// laço de repetição

for (
    let numero = 0;
    numero <= 100;
    numero++
) {
    numero % 2 === 0
        ? totalNumerosPares++
        : totalNumerosImpares++
}

console.log(`Total de números pares: ${totalNumerosPares}`)
console.log(`Total de números ímpares: ${totalNumerosImpares}`)