const totalAulas = 80

let faltas = 25

const limiteDeFaltas = 0.25

let porcentagemFaltas = (25/80)

let estourouFaltas = porcentagemFaltas >= limiteDeFaltas ? 'Sim' : 'Não'

console.log('Estourou em faltas?', estourouFaltas)