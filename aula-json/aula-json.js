const fs = require('fs');

// Lendo arquivo JSON
fs.readFile('teste.json', (erro, dados) => {
    if (erro) {
        console.error('Erro: ' + erro);
    } else {
        console.log(JSON.parse(dados));
        console.log(typeof(dados));
    }
})

// Convertendo String para um JSON
const pessoa = '{ "nome": "Valentin" }';
console.log(JSON.parse(pessoa));

// Convertendo Objeto para um JSON
const usuario = {
    nome: 'Ash Ketchum',
    idade: 10
};

console.log(JSON.stringify(usuario));