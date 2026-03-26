// Crie um array com 3 linguagens de programação. Use destructuring para criar variáveis ling1, ling2 e ling3.

const ling = ['COBOL', 'JavaScript', 'Python']

// Possibilidade clean code:
// const [ling1, ling2, ling3] = ['COBOL','JavaScript','Python']

const [ling1, ling2, ling3] = ling

console.log(`A linguagem número 1 é ${ling1}`)
console.log(`A linguagem número 2 é ${ling2}`)
console.log(`A linguagem número 3 é ${ling3}`)