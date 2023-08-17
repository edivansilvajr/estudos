// Função de Ordem Superior que recebe uma função e um valor, e aplica a função ao valor
function aplicarFuncao(funcao, valor) {
    return funcao(valor);
}

// Função que dobra um número
function dobrar(numero) {
    return numero * 2;
}

// Função que triplica um número
function triplicar(numero) {
    return numero * 3;
}

// Usando a função de ordem superior para aplicar diferentes funções a um valor
const numero = 5;

const resultadoDobro = aplicarFuncao(dobrar, numero);
console.log("Resultado dobro:", resultadoDobro);

const resultadoTriplo = aplicarFuncao(triplicar, numero);
console.log("Resultado triplo:", resultadoTriplo);
