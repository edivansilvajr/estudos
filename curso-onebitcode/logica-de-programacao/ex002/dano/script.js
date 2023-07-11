const atacante = prompt('Qual é o nome do personagem atacante?')
const poderDeAtaque = parseFloat(prompt('Qual é o seu poder de ataque?'))

const defensor = prompt('Qual é o nome do personagem defensor?')
let pontosDeVida = parseFloat(prompt('Quantos pontos de vida ele possui?'))
const poderDeDefesa = parseFloat(prompt('Qual é o seu poder de defesa?'))
const possuiEscudo = prompt('Ele possui escudo? (Sim/Não)')

let danosCausado = 0

if (poderDeAtaque > poderDeDefesa && possuiEscudo === 'Não') {
    danosCausado = poderDeAtaque - poderDeDefesa
} else if(poderDeAtaque > poderDeDefesa && possuiEscudo === 'Sim') {
    danosCausado = (poderDeAtaque - poderDeDefesa) /2
}

pontosDeVida -= danosCausado

alert(atacante + ' causou ' + danosCausado + ' pontos de dano em  ' + defensor)

alert(
    atacante + '\nPoder de ataque: ' + poderDeAtaque + '\n\n' +
    defensor + '\nPontos de vida: ' + pontosDeVida +
    '\nPoder de defesa: ' + poderDeDefesa + '\nPossui escudo: ' + possuiEscudo
)

