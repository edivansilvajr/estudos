console.log(nome);      // Isso não funciona porque a variável 'nome' é declarada apenas depois dessa linha.
console.log(sobrenome); // Isso também não funciona pelo mesmo motivo.

var nome = 'Edivan';    // 'var' declaração de 'nome' é içada (hoisting) para o topo do escopo, mas ainda não tem valor atribuído.
let sobrenome = 'Silva'; // A declaração de 'sobrenome' usando 'let' não é içada da mesma forma.

console.log(nome);      // Agora 'nome' tem um valor atribuído, então isso funciona.
console.log(sobrenome); // Isso também funciona porque 'sobrenome' é definido usando 'let'.
