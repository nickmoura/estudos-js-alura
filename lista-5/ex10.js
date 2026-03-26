// Adicione um método descrever() à classe Livro que retorna uma string com as informações do livro.

class Livro {
    constructor(titulo, autor) {
        this.titulo = titulo
        this.autor  = autor
    }

    descrever() {
        return `Título: ${this.titulo} | Autor: ${this.autor}`
    }
}

const livro1 = new Livro('O Senhor dos Aneis', 'J. R. R. Tolkien')
const livro2 = new Livro('Memórias Póstumas de Brás Cubas', 'Machado de Assis')

console.log(livro1.descrever())
console.log(livro2.descrever())