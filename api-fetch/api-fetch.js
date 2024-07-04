// Iniciando o Fetch API

// then / catch
// O then() recebe uma Promise
// json() também é um método que envolve Promises 

 
fetch('https://viacep.com.br/ws/06236725/json').then((resposta) => {
    resposta.json().then((dados) => {
        console.log(dados); // Transforma a resposta em formato JSON
    }); 

}).catch((erro) => {
    console.log(`Deu ruim: ${erro}`);
});



// async / await

async function obterDadosCep() {
    const resposta = await fetch('https://viacep.com.br/ws/06236725/json');
    const dados = await resposta.json();
    console.log(dados);
}

obterDadosCep();