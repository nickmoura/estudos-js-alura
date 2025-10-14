let divisiveisPorTres = 0

for (
    let numero = 1;
    numero <= 100;
    numero++
) {
    if (
        numero % 3 === 0
    ) {
        divisiveisPorTres++
    }
}

console.log(`${divisiveisPorTres} números são divisíveis por três entre um e cem.`)