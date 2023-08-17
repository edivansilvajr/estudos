// Função de ordem superior que executa uma função duas vezes
function executarDuasVezes(funcao) {
    funcao();
    funcao();
}

// Função que exibe uma mensagem
function mostrarMensagem() {
    console.log("Olá, mundo!");
}

// Usando a função de ordem superior para executar a função duas vezes
executarDuasVezes(mostrarMensagem);
