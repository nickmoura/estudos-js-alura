let totalNumerosPares = 0

let totalNumerosImpares = 0

// laço de repetição

for (let numero = 0; numero <= 50; numero++) {
    numero % 2 === 0
        ? totalNumerosPares++ 
        : totalNumerosImpares++
}

console.log(`Total de números pares: ${totalNumerosPares}`)
console.log(`Total de números ímpares: ${totalNumerosImpares}`)