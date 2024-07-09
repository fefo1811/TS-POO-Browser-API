"use strict";
class Pessoa {
    // Método Construtor
    constructor(nome, idade, altura, cpf) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
        this._cpf = cpf;
    }
    dormir() {
        console.log(`${this.nome} está dormindo...`);
    }
    acordar() {
        console.log(`${this.nome} acordou...`);
    }
    // accessor: getter
    get cpf() {
        return this._cpf;
    }
    // accessor: setter
    set cpf(valor) {
        this._cpf = valor;
    }
}
// Criando um objeto a partir de uma classe. Utilizando () estamos chamando o construtor da Classe
const felipe = new Pessoa("Felipe", 23, 180, '48925988879');
console.log(felipe.cpf);
felipe.cpf = '1233';
console.log(felipe.cpf);
// Herança
class Professor extends Pessoa {
    constructor(nome, idade, altura, cpf, codigo) {
        super(nome, idade, altura, cpf);
        this.codigo = codigo;
    }
}
// Polimorfismo
console.log(felipe instanceof Pessoa);
console.log(felipe instanceof Professor);
