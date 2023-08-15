function somar(a, b) {
    return a + b
}

let operacao = somar

console.log(operacao(4, 5))

// A palavra subtrair não é necessária
operacao = function subtrair(a, b) { 
    return a - b
}

console.log(operacao(4, 5))

// Um exemplo sem a palavra 'subtrair'
operacao = function(a, b) { 
    return a - b
}

console.log(operacao(4, 5))