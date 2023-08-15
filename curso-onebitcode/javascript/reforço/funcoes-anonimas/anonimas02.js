olaMundo();
oiMundo();

function olaMundo() {
    console.log("Olá, mundo!");
}

const oiMundo = function() {
    console.log("Oi, mundo");
}

/* Observe que acontecerá o seguinte erro após executar o código: Cannot access 'oiMundo' before initialization.Pois a inicialização da variável tem que acontecer antes da chamada no caso do oi mundo */