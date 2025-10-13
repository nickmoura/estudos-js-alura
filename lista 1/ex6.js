let temLogin = true
let temSenha = false

// o user só acessa se tiver login E senha
let podeAcessar = temLogin && temSenha

console.log('Pode acessar o sistema?', podeAcessar)