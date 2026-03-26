// Crie uma função que recebe um nome e imprime "Olá, [nome]". Se o nome não for passado, use "visitante" como valor padrão.

import { createInterface } from 'readline/promises'
import { stdin as input, stdout as output } from 'process'

const rl = createInterface({ input, output })

const nomeUsuario = await rl.question('Qual seu nome? ')

function saudacao(nome) {
    if (nome) {
        console.log(`Olá, ${nome}!`)
    } else {
        console.log('Olá, visitante!')
    }
}

saudacao(nomeUsuario)

rl.close()