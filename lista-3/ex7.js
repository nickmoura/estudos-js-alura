let anoNascimento = 1994
let anoAtual = 2025

for ( 
    let anoContado = anoNascimento;
    anoContado <= anoAtual;
    anoContado++
) {
    let idade = anoContado - anoNascimento
    console.log(`No ano ${anoContado}, você tinha ${idade} anos.`)
}