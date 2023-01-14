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


async function buscaEndereco() {
    try {
        var consultaCEP = await fetch('http://viacep.com.br/ws/01001000/json/');
        var consultaCEPConvertido = await consultaCEP.json();
        if (consultaCEPConvertido.erro) {
            throw Error("Cep não existente!");
        }
        console.log(consultaCEPConvertido);
    }catch (erro) {
        console.log(erro);
    }
}

buscaEndereco();









//commet aleatorio
//commet aleatorio
//commet aleatorio
//commet aleatorio
//commet aleatorio
//commet aleatorio
//commet aleatorio
//commet aleatorio
//commet aleatorio
//commet aleatorio
//commet aleatorio
//commet aleatorio