let numeroSecreto = 7

let numeroInserido

const tentativas = [1, 3, 7]

let indice = 0

do {
    numeroInserido = tentativas[indice++]
    if (
        numeroInserido === 7
    ) {
        console.log(`Acertou!`)
    } else {
        console.log(`Tente novamente.`)
    }
} while (
    numeroInserido !== 7 && indice < 3
)

if (
    indice === 3 && numeroInserido !== numeroSecreto
) {
    console.log(`Acabaram as tentativas.`)
}