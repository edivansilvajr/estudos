// Exemplo 1
function testarEscopo00() {
    let ola = 'Olá mundo';
    var oi = 'Oi mundo';
}

// Não é possível acessar 'ola' e 'oi' aqui, pois estão dentro da função
// console.log(ola); // Isso causaria um erro
// console.log(oi);  // Isso também causaria um erro

// Exemplo 2
var num = 6;

if (num > 5) {
    var maior = num;
    let maior01 = num;
}

console.log(maior);   // Isso funciona, pois 'maior' é definido com 'var'
// console.log(maior01); // Isso causaria um erro, pois 'maior01' é definido com 'let'

// Exemplo 3
function testarEscopo01(num) {
    if (num > 5) {
        var maior = num;
        let maior01 = num;
    }
    console.log(maior);   // Isso funciona, pois 'maior' é definido com 'var'
    // console.log(maior01); // Isso causaria um erro, pois 'maior01' é definido com 'let'
}

testarEscopo01(7);
