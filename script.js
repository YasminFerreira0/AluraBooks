console.log("Hello World!");

//sincrono - código executado linha por linha
console.log("olá mundo");
console.log("Estou aprendendo sobre sincrocidade e assincocidade no javascrip");
console.log("event loop, call stack e task queue.");

//assincrono - executa codigos em segundo plano

console.log("olá mundo");

function termos() {
    console.log("event loop, call stack e task queue.");
}

setTimeout(termos, 2000);
console.log("Estou aprendendo sobre sincrocidade e assincocidade no javascrip");
