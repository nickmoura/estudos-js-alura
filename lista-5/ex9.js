// Crie uma classe Livro com propriedades titulo e autor. Crie dois objetos dessa classe.

class Livro {
    constructor(titulo, autor) {
        this.titulo = titulo
        this.autor  = autor
    }
}

const livro1 = new Livro('O Senhor dos Aneis', 'J. R. R. Tolkien')
const livro2 = new Livro('Memórias Póstumas de Brás Cubas', 'Machado de Assis')

console.log(livro1)
console.log(livro2)