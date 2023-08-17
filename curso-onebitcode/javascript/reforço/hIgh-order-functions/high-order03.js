function calcular(a, b, operacao) {
    console.log("Realizando uma operação");
    const resultado = operacao(a, b);
    return resultado;
}

function somar(x, y) {
    console.log("Realizando uma soma");
    return x + y;
}

console.log(calcular(3, 5, somar));

console.log(calcular(3, 5, (x, y) =>{
    console.log("Realizando uma subtração");
    return x - y;
}));