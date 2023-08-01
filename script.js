/*console.log("Hello World!");

sincrono - código executado linha por linha
console.log("olá mundo");
console.log("Estou aprendendo sobre sincrocidade e assincocidade no javascrip");
console.log("event loop, call stack e task queue.");

assincrono - executa codigos em segundo plano

console.log("olá mundo");

function termos() {
    console.log("event loop, call stack e task queue.");
}

setTimeout(termos, 2000);
console.log("Estou aprendendo sobre sincrocidade e assincocidade no javascrip");

var consultaCEP = fetch('http://viacep.com.br/ws/01001000/json/')
    .then(resposta => resposta.JSON())
    .then(r => {
    if(r.erro){
        throw Error ("Esse cep não existe!");
    }else
    console.log(r)
    })
    .catch(erro => console.log(erro))
;
console.log(consultaCEP);*/


async function buscaEndereco(cep) {
    var mensagemErro = document.getElementById('erro');
    mensagemErro.innerHTML = "";
    try {
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        var consultaCEPConvertida = await consultaCEP.json();
        if (consultaCEPConvertida.erro) {
            throw Error('CEP não existente!');
        }
        var cidade = document.getElementById('cidade');
        var logradouro = document.getElementById('endereco');
        var estado = document.getElementById('estado');

        cidade.value = consultaCEPConvertida.localidade;
        logradouro.value = consultaCEPConvertida.logradouro;
        estado.value = consultaCEPConvertida.uf;

        console.log(consultaCEPConvertida);
        return consultaCEPConvertida;
    } catch (erro) {
        mensagemErro.innerHTML = `<p>CEP inválido. Tente novamente!</p>`
        console.log(erro);
    }
}

/*let ceps = ['01001000', '01001001'];
let conjuntoCeps = ceps.map(valores => buscaEndereco(valores));
Promise.all(conjuntoCeps).then(respostas = console.log(respostas));*/


var cep = document.getElementById('cep');
cep.addEventListener("focusout", () => buscaEndereco(cep.value));
