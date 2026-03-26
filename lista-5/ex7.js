// Crie uma variável com a data atual e exiba o dia, mês e ano formatados.

function mostrarData() {
    const hoje = new Date()

    const dataFormatada = hoje.toLocaleDateString('pt-BR')
    console.log(`Hoje é dia ${dataFormatada}`)
}

mostrarData()
