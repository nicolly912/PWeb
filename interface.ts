/*Você foi contratado para construir um sistema para gerenciamento dos livros de uma livraria.
A princípio o proprietário irá trabalhar tanto com Livros Físicos como com EBook. Ambos os tipos de livros possuem as seguintes
características: titulo, ano, isbn, preço, autor, editora, estoque. Preciso ter metodos para exibir dados do livro, bem como
atualizar estoque
Para os ebooks precisamos adicionar também  o tamanho do arquivo.
Precisamos ter uma classe para gerenciar os livros da livraria: ela será responsável por adicionar, excluir, vender livros da livraria.
Quando eu vendo um livro o estoque do livro será diminuído.
Use os conceitos de interface e classe além dos já conhecidos em Javascript para manipular arrays.
Adicione alguns dados como exemplo e rode o código que não deve apresentar erros na tipagem durante a compilação / execução.*/

interface ILivro {
    titulo: string;
    autor: string;
    editora: string;
    ano: number;
    isbn: number;
    preco: number;
    estoque: number;
    exibirDetalhes(): void;
    atualizarEstoque(qtd: number): void;
}

interface IEBook extends ILivro {
    tamanhoArquivo: number;
}

class LivroFisico implements ILivro {
    constructor(
        public titulo: string,
        public autor: string,
        public editora: string,
        public ano: number,
        public isbn: number,
        public preco: number,
        public estoque: number
    ) {}

    exibirDetalhes(): void {
        console.log(`Livro Físico: ${this.titulo}, Autor: ${this.autor}, Estoque: ${this.estoque}`);
    }

    atualizarEstoque(qtd: number): void {
        this.estoque += qtd;
    }
}

class EBook implements IEBook {
    constructor(
        public titulo: string,
        public autor: string,
        public editora: string,
        public ano: number,
        public isbn: number,
        public preco: number,
        public estoque: number,
        public tamanhoArquivo: number
    ) {}

    exibirDetalhes(): void {
        console.log(`EBook: ${this.titulo}, Autor: ${this.autor}, Estoque: ${this.estoque}, Tamanho: ${this.tamanhoArquivo}MB`);
    }

    atualizarEstoque(qtd: number): void {
        this.estoque += qtd;
    }
}

class Livraria {
    private livros: ILivro[] = [];

    adicionarLivro(livro: ILivro): void {
        this.livros.push(livro);
    }

    venderLivro(isbn: number): void {
        const livro = this.livros.find(l => l.isbn === isbn);
        if (!livro) {
            console.log("Livro não encontrado.");
            return;
        }
        if (livro.estoque > 0) {
            livro.estoque -= 1;
            console.log(`Livro vendido: ${livro.titulo}`);
        } else {
            console.log("Estoque esgotado.");
        }
    }

    listarLivros(): void {
        this.livros.forEach(livro => livro.exibirDetalhes());
    }
}

const livro1 = new LivroFisico("Você Ligou para Sam", "MacDustin Thao", "Editora A", 2021, 9789899082854, 24.99, 5);
const ebook1 = new EBook("Minha pequena livraria", "Ali Berg & Michelle Kalus", "Editora x", 2019, 9788595082508, 16.25, 10, 5);

const livraria = new Livraria();
livraria.adicionarLivro(livro1);
livraria.adicionarLivro(ebook1);

livraria.listarLivros();
livraria.venderLivro(9788595082508);
livraria.listarLivros();
