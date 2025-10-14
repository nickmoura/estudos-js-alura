let totalDigitados = 0

let numero

const entradas = [100, 12, 20, 30, 50, 70, 0]

let indice = 0

do {
    numero = entradas[indice++]
    if (
        numero !== 0
    ) {
        totalDigitados++
    }
} while (
    numero !== 0
)

console.log(`Foram digitados ${totalDigitados} números.`)