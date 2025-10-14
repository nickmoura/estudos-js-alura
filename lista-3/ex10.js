let saldo = 0

const escolhas = [1, 2, 1, 2, 1, 2, 1, 2, 1, 3]

let depositos = [100, 50, 250, -5]

let iEscolha = 0

let iDeposito = 0

let opcao = null

do {
    console.log(`1 - Ver saldo\n2 - Fazer depósito\n3 - Sair`)
    opcao = escolhas[iEscolha]
    iEscolha++
    if (
        opcao === undefined
    ) {
        opcao = 3
    }
    opcao = Number(opcao)
    switch (
    opcao
    ) {
        case 1:
            console.log(`Saldo atual: R$ ${saldo.toFixed(2)}`)
            break
        case 2:
            let valor = depositos[iDeposito]
            if (
                valor === undefined
            ) {
                console.log(`Não há mais depósitos.`)
                break;
            }
            valor = Number(valor);
            if (
                !Number.isFinite(valor) || valor <= 0
            ) {
                console.log(`O valor de R$ ${valor} é inválido.`)
                break;
            }
            saldo += valor;
            iDeposito++;
            console.log(`Valor de R$ ${valor} depositado.`)

            break
        case 3:
            console.log(`Encerrando...`)
            break
        default:
            console.log(`Opção inválida.`)
    }
}
while (
    opcao !== 3
)