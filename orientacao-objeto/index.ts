interface IPessoa {
    nome: string;
    idade: number;
    altura: number;
    _cpf: string;

    dormir: () => void;
}

class Pessoa {
    nome: string;
    idade: number;
    altura: number;
    private _cpf: string;

    // Método Construtor
    constructor(nome: string, idade: number, altura: number, cpf: string) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
        this._cpf = cpf;
    }

    dormir() {
        console.log(`${this.nome} está dormindo...`)
    }

    acordar() {
        console.log(`${this.nome} acordou...`)
    }

    // accessor: getter
    get cpf(): string {
        return this._cpf;
    }

    // accessor: setter
    set cpf(valor: string) {
        this._cpf = valor;
    }
}

// Criando um objeto a partir de uma classe. Utilizando () estamos chamando o construtor da Classe
const felipe = new Pessoa("Felipe", 23, 180, '48925988879');
console.log(felipe.cpf)
felipe.cpf = '1233';
console.log(felipe.cpf)


// Herança
class Professor extends Pessoa {
    codigo: string;

    constructor(nome:string, idade: number, altura: number, cpf:string, codigo: string) {
        super(nome, idade, altura, cpf)
        this.codigo = codigo;
    }
}

// Polimorfismo
console.log(felipe instanceof Pessoa);
console.log(felipe instanceof Professor);