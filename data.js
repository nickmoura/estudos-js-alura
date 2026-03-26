const agora = new Date()

console.log(agora)

console.log('Ano: ', agora.getFullYear())
console.log('Mês: ', agora.getMonth())
console.log('Dia: ', agora.getDate())
console.log('Hora: ', agora.getHours())
console.log('Minutos: ', agora.getMinutes())

const nascimento = new Date('1994-11-19:13:00.000Z')

console.log(nascimento)

console.log('Data formatada - BR: ', nascimento.toLocaleDateString('pt-br'))